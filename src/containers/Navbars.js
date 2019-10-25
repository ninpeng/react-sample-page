import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';

import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import DescriptionIcon from '@material-ui/icons/Description';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  title: {
    flexGrow: 1,
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  }
}));

const Navbars = ({ container }) => {
  
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [sampleOpen, setSampleOpen] = React.useState(false);

  const handleClick = () => {
    setSampleOpen(!sampleOpen);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className={classes.toolbar}>
      <Divider />
      <List>
        <ListItem button component={RouterLink} to={'/home'}>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary='Home' />
        </ListItem>
        <Divider />
        <ListItem button onClick={handleClick}>
          <ListItemIcon><DescriptionIcon /></ListItemIcon>
          <ListItemText primary='Sample' />
          { sampleOpen ? <ExpandLess /> : <ExpandMore /> }
        </ListItem>
        <Collapse in={sampleOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested} component={RouterLink} to={'/sample'}>
              <ListItemText primary='Home' />
            </ListItem>
            <ListItem button className={classes.nested} component={RouterLink} to={'/sample/gsap'}>
              <ListItemText primary='GSAP' />
            </ListItem>
            <ListItem button className={classes.nested} component={RouterLink} to={'/sample/dnd'}>
              <ListItemText primary={`Drag & Drop`} />
            </ListItem>
            <ListItem button className={classes.nested} component={RouterLink} to={'/sample/rematch'}>
              <ListItemText primary='Redux-Rematch' />
            </ListItem>
            <ListItem button className={classes.nested} component={RouterLink} to={'/sample/select'}>
              <ListItemText primary='react-select' />
            </ListItem>
            <ListItem button className={classes.nested} component={RouterLink} to={'/sample/graphql'}>
              <ListItemText primary='GraphQL' />
            </ListItem>
            <ListItem button className={classes.nested} component={RouterLink} to={'/sample/share'}>
              <ListItemText primary='Share API' />
            </ListItem>
            <ListItem button className={classes.nested} component={RouterLink} to={'/sample/websocket'}>
              <ListItemText primary='WebSocket' />
            </ListItem>
            <ListItem button className={classes.nested} disabled>
              <ListItemText primary='Disabled Menu' />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button component={RouterLink} to={'/phaser'}>
          <ListItemIcon><AirplanemodeActiveIcon /></ListItemIcon>
          <ListItemText primary='Phaser' />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary='TBD' />
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} noWrap>
            Title 현재 메뉴
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer} aria-label="drawer">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </>
  )
}

export default Navbars;

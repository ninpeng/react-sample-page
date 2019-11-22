import React, { useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import DrawerList from './DrawerList';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('lg')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  }
}));

const DrawerComponent = ({ container, open, setOpen }) => {
  
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));

  useEffect(() => {
    // lg 보다 커지면 모바일 메뉴창 닫기
    if (matches) {
      setOpen(false);
    }
  }, [matches, setOpen]);

  const handleDrawerToggle = (open) => (event) => {
    setOpen(open);
  };

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
    <Hidden lgUp implementation="css">
      <SwipeableDrawer
        container={container}
        variant="temporary"
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={open}
        onOpen={handleDrawerToggle(true)}
        onClose={handleDrawerToggle(false)}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <DrawerList />
      </SwipeableDrawer>
    </Hidden>
    <Hidden mdDown implementation="css">
      <Drawer
        variant="permanent"
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <DrawerList />
      </Drawer>
    </Hidden>
    </nav>
  )
}

export default DrawerComponent;

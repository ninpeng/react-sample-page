import { useState } from 'react';
import { Link as RouterLink, useRouteMatch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import HomeIcon from '@material-ui/icons/Home';
import DescriptionIcon from '@material-ui/icons/Description';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import HttpsIcon from '@material-ui/icons/Https';
import BuildIcon from '@material-ui/icons/Build';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import menu from 'json/menu.json';
import sampleMenu from 'json/sample-menu.json';
import pkg from '../../package.json';

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  nested: {
    paddingLeft: theme.spacing(4),
  }
}));

const DrawerListItem = ({ icon, nested=false, title, url, handleClick, expand=false, open, disabled=false }) => {
  const classes = useStyles();
  const match = useRouteMatch(url);

  return (
    <ListItem
      button
      className={nested ? classes.nested : null}
      component={(!expand && url) ? RouterLink : 'div'}
      to={url}
      selected={!disabled && !expand && match && match.isExact}
      onClick={handleClick}
      disabled={disabled}
    >
      { icon && <ListItemIcon>{icon}</ListItemIcon> }
      <ListItemText primary={title} />
      { expand && (open ? <ExpandLess /> : <ExpandMore />) }
    </ListItem>
  )
}

const DrawerList = () => {
  const classes = useStyles();
  const [sampleOpen, setSampleOpen] = useState(false);
  
  const handleClick = (e) => {
    setSampleOpen(state => !state);
  }

  return (
    <div className={classes.toolbar}>
      <ListItem>
        <ListItemText
          primary={'React-Sample-Page'}
          secondary={`v${pkg.version}`}
        />
      </ListItem>
      <Divider />
      <List>
        <DrawerListItem icon={<HomeIcon />} {...menu['home']} />
        <Divider />
        <DrawerListItem icon={<DescriptionIcon />} {...menu['sample']}
          handleClick={handleClick} expand open={sampleOpen} />
        <Collapse in={sampleOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            { Object.values(sampleMenu).map(menu =>
              <DrawerListItem key={menu.title} nested {...menu} /> )}
          </List>
        </Collapse>
        <DrawerListItem icon={<AirplanemodeActiveIcon />} {...menu['phaser']} />
        <DrawerListItem icon={<HttpsIcon />} {...menu['bitly']} />
        <DrawerListItem icon={<BuildIcon />} {...menu['roadmap']} />
      </List>
    </div>
  )
}

export default DrawerList;
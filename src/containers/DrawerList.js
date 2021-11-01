import { useState } from 'react';
import { Link as RouterLink, useRouteMatch } from 'react-router-dom';
import makeStyles from '@mui/styles/makeStyles';

import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import HttpsIcon from '@mui/icons-material/Https';
import BuildIcon from '@mui/icons-material/Build';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

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
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Link as RouterLink, useMatch } from 'react-router-dom';

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

const PREFIX = 'DrawerList';

const classes = {
  toolbar: `${PREFIX}-toolbar`,
  nested: `${PREFIX}-nested`,
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.toolbar}`]: theme.mixins.toolbar,

  [`& .${classes.nested}`]: {
    paddingLeft: theme.spacing(4),
  },
}));

const DrawerListItem = ({
  icon,
  nested = false,
  title,
  url,
  handleClick,
  expand = false,
  open,
  disabled = false,
}) => {
  const match = useMatch(url ?? '');

  return (
    <ListItem
      button
      className={nested ? classes.nested : null}
      component={!expand && url ? RouterLink : 'div'}
      to={url}
      selected={!disabled && !expand && match && match.pattern.end}
      onClick={handleClick}
      disabled={disabled}
    >
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      <ListItemText primary={title} />
      {expand && (open ? <ExpandLess /> : <ExpandMore />)}
    </ListItem>
  );
};

const DrawerList = () => {
  const [sampleOpen, setSampleOpen] = useState(false);

  const handleClick = (e) => {
    setSampleOpen((state) => !state);
  };

  return (
    <Root className={classes.toolbar}>
      <ListItem>
        <ListItemText primary={'React-Sample-Page'} secondary={`v${pkg.version}`} />
      </ListItem>
      <Divider />
      <List>
        <DrawerListItem icon={<HomeIcon />} {...menu['home']} />
        <Divider />
        <DrawerListItem
          icon={<DescriptionIcon />}
          {...menu['sample']}
          handleClick={handleClick}
          expand
          open={sampleOpen}
        />
        <Collapse in={sampleOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {Object.values(sampleMenu).map((menu) => (
              <DrawerListItem key={menu.title} nested {...menu} />
            ))}
          </List>
        </Collapse>
        <DrawerListItem icon={<AirplanemodeActiveIcon />} {...menu['phaser']} />
        <DrawerListItem icon={<HttpsIcon />} {...menu['bitly']} />
        <DrawerListItem icon={<BuildIcon />} {...menu['roadmap']} />
      </List>
    </Root>
  );
};

export default DrawerList;

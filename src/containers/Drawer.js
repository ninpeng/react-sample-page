import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import DrawerList from './DrawerList';

const drawerWidth = 200;

const useStyles = makeStyles({
  drawerPaper: {
    width: drawerWidth,
  }
});

const Drawer = ({ container, open, setOpen }) => {
  
  const classes = useStyles();
  const theme = useTheme();

  const handleDrawerToggle = (open) => (event) => {
    setOpen(open);
  };

  return (
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
  )
}

export default Drawer;

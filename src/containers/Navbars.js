import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';

import menu from 'json/menu.json';
import sampleMenu from 'json/sample-menu.json';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));

const Navbars = ({ setOpen }) => {
  const classes = useStyles();
  const location = useLocation();
  const { enqueueSnackbar } = useSnackbar();

  const findMenu = Object.values(menu).find(menu => location.pathname === menu.url);
  const findSampleMenu = Object.values(sampleMenu).find(menu => location.pathname.startsWith(menu.url));

  const onClickLogin = (e) => {
    enqueueSnackbar('로그인은 아직 안만들었어요', { variant: 'info' });
  }

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title} noWrap>
          {findMenu ? findMenu.title : findSampleMenu ? findSampleMenu.title : '' }
        </Typography>
        <Button color="inherit" onClick={onClickLogin}>Login</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbars;

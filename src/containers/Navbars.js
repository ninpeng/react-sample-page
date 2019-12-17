import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Switch from '@material-ui/core/Switch';

import MenuIcon from '@material-ui/icons/Menu';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GitHubIcon from '@material-ui/icons/GitHub';

import { useChangeDarkmode } from 'utils/CustomThemeProvider';

import menu from 'json/menu.json';
import sampleMenu from 'json/sample-menu.json';

const useStyles = makeStyles(theme => ({
  appBar: {
    [theme.breakpoints.up('lg')]: {
      width: 'calc(100% - 240px)',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  title: {
    flexGrow: 1,
  },
  themeSwitch: {
    width: 60,
    height: 40,
  },
}));

const Navbars = ({ setOpen }) => {
  const theme = useTheme();
  const classes = useStyles();
  const location = useLocation();
  const { enqueueSnackbar } = useSnackbar();
  const changeTheme = useChangeDarkmode();

  const findMenu = Object.values(menu).find(menu => location.pathname === menu.url);
  const findSampleMenu = Object.values(sampleMenu).find(menu => location.pathname.startsWith(menu.url));

  const handleChangeDarkmode = () => {
    const darkmode = theme.palette.type === 'dark' ? 'light' : 'dark';
    changeTheme({ darkmode });
  }

  const handleClickLogin = (e) => {
    enqueueSnackbar('로그인은 아직 안만들었어요', { variant: 'info' });
  }

  return (
    <AppBar className={classes.appBar} position="fixed">
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
        
        <Switch
          className={classes.themeSwitch}
          checked={theme.palette.type === 'dark'}
          onChange={handleChangeDarkmode}
          icon={<BrightnessHighIcon />}
          checkedIcon={<Brightness4Icon />}
        />

        <IconButton color="inherit" onClick={handleClickLogin}>
          <AccountCircleIcon />
        </IconButton>

        <IconButton color="inherit" onClick={() => window.open("https://github.com/ninpeng/react-sample-page")}>
          <GitHubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Navbars;

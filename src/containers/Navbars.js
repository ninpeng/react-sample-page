import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';

import MenuIcon from '@material-ui/icons/Menu';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import GitHubIcon from '@material-ui/icons/GitHub';

import { useChangeDarkmode } from 'utils/CustomThemeProvider';

import menu from 'json/menu.json';
import sampleMenu from 'json/sample-menu.json';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
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

  const onChangeDarkmode = () => {
    const darkmode = theme.palette.type === 'dark' ? 'light' : 'dark';
    changeTheme({ darkmode });
  }

  const onClickLogin = (e) => {
    enqueueSnackbar('로그인은 아직 안만들었어요', { variant: 'info' });
  }

  return (
    <AppBar color="default" position="fixed">
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

        { theme.palette.type === 'dark' ? <Brightness4Icon /> : <BrightnessHighIcon /> }
        <Switch
          checked={theme.palette.type === 'dark'}
          onChange={onChangeDarkmode}
        />
        
        <IconButton onClick={() => window.open("https://github.com/ninpeng/react-sample-page")}>
          <GitHubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Navbars;

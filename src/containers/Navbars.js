import { useLocation } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useTheme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Switch from '@mui/material/Switch';

import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GitHubIcon from '@mui/icons-material/GitHub';

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
    const darkmode = theme.palette.mode === 'dark' ? 'light' : 'dark';
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
          size="large">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title} noWrap>
          {findMenu ? findMenu.title : findSampleMenu ? findSampleMenu.title : '' }
        </Typography>
        
        <Switch
          className={classes.themeSwitch}
          checked={theme.palette.mode === 'dark'}
          onChange={handleChangeDarkmode}
          icon={<BrightnessHighIcon />}
          checkedIcon={<Brightness4Icon />}
        />

        <IconButton color="inherit" onClick={handleClickLogin} size="large">
          <AccountCircleIcon />
        </IconButton>

        <IconButton
          color="inherit"
          onClick={() => window.open("https://github.com/ninpeng/react-sample-page")}
          size="large">
          <GitHubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbars;

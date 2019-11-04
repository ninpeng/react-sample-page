import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import CloseIcon from '@material-ui/icons/Close';

import menu from './menu.json';
import sampleMenu from './sample-menu.json';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  snack: {
    backgroundColor: theme.palette.primary.main
  }
}));

const Navbars = ({ setOpen }) => {
  const classes = useStyles();
  const location = useLocation();
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const menuList = Object.values(menu).concat(Object.values(sampleMenu));
  const findMenu = menuList.find(menu => location.pathname.includes(menu.url));

  const onClickLogin = (e) => {
    setSnackbarOpen(true);
  }

  const onCloseSnackbar = () => {
    setSnackbarOpen(false);
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
          {findMenu && findMenu.title}
        </Typography>
        <Button color="inherit" onClick={onClickLogin}>Login</Button>
      </Toolbar>

      <Snackbar
        autoHideDuration={3000}
        open={snackbarOpen}
        onClose={onCloseSnackbar}
      >
        <SnackbarContent
          className={classes.snack}
          aria-describedby="client-snackbar"
          message={<span id="message-id">로그인은 아직 안만들었어요</span>}
          action={
            <IconButton key="close" aria-label="close" color="inherit" onClick={onCloseSnackbar}>
              <CloseIcon className={classes.icon} />
            </IconButton>
          }
        />
      </Snackbar>
    </AppBar>
  )
}

export default Navbars;

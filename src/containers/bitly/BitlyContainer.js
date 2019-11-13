import React, { useState, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import InfoIcon from '@material-ui/icons/Info';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    maxWidth: 800
  },
  textField: {
    paddingBottom: theme.spacing(2),
  },
  iconBox: {
    minWidth: 136,
  },
  iconButton: {
    padding: theme.spacing(1),
  },
}));

// 주소 변환 함수
const convertUrl = (url) => {
  const urls = url.split('bit.ly/');

  return urls.length === 2 ? `https://bitly.com/${urls[1]}` : '';
}

const BitlyContainer = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const [url, setUrl] = useState('');
  const [error, setError] = useState(false);
  const [helpText, setHelpText] = useState('');

  const convertedUrl = useMemo(() => convertUrl(url), [url]);

  const onChangeUrl = (e) => {
    const value = e.target.value;
    
    setUrl(value);
    setError(value ? value.split('bit.ly/').length !== 2 : false);
    setHelpText(value ? value.split('bit.ly/').length === 2 ? '' : '올바른 주소를 입력해 주세요.' : '');
  }

  const onClickCopy = () => {
    enqueueSnackbar('클립보드에 URL이 복사 되었습니다.', { variant: 'success' });
  }

  const onClickShortCut = (e) => {
    window.open(convertedUrl);
  }

  const onClickInfo = (e) => {
    window.open(`${convertedUrl}+`);
  }

  return (
    <Box align="center">
      <Paper className={classes.paper} elevation={8}>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              bit.ly 주소 변환
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField
              className={classes.textField}
              id="bitly-url"
              label="bit.ly 형식의 URL을 입력"
              value={url}
              onChange={onChangeUrl}
              error={error}
              helperText={helpText}
              fullWidth
            />
          </Grid>

          <Grid item sm={2}>
            <Typography variant="body1">
              변환된 URL
            </Typography>
          </Grid>
          <Grid item xs={12} sm>
            <OutlinedInput
              value={convertedUrl || 'https://bitly.com/'}
              fullWidth
              disabled
            />
          </Grid>
          <Grid className={classes.iconBox} container item justify="flex-end" sm={3}>
            <CopyToClipboard text={convertedUrl} onCopy={onClickCopy}>
              <IconButton color="primary" className={classes.iconButton} aria-label="copy" disabled={!convertedUrl}>
                <FileCopyIcon />
              </IconButton>
            </CopyToClipboard>
            
            <IconButton color="primary" className={classes.iconButton} aria-label="short-cut" onClick={onClickShortCut} disabled={!convertedUrl}>
              <OpenInNewIcon />
            </IconButton>
            
            <IconButton color="primary" className={classes.iconButton} aria-label="info" onClick={onClickInfo} disabled={!convertedUrl}>
              <InfoIcon />
            </IconButton>
          </Grid>

          <Grid item xs={12}>
            <Typography align="right" color="primary" variant="subtitle2">
              bit.ly 차단된 경우를 대비하여 만듬
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export default BitlyContainer;

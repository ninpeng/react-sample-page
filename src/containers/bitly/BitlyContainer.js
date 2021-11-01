import { useState, useMemo } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import InfoIcon from '@mui/icons-material/Info';

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

  const handleChangeUrl = (e) => {
    const value = e.target.value;
    
    setUrl(value);
    setError(value ? value.split('bit.ly/').length !== 2 : false);
    setHelpText(value ? value.split('bit.ly/').length === 2 ? '' : '올바른 주소를 입력해 주세요.' : '');
  }

  const handleCopyClick = () => {
    enqueueSnackbar('클립보드에 URL이 복사 되었습니다.', { variant: 'success' });
  }

  const handleClickShortCut = (e) => {
    window.open(convertedUrl);
  }

  const handleClickInfo = (e) => {
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
              onChange={handleChangeUrl}
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
          <Grid className={classes.iconBox} container item justifyContent="flex-end" sm={3}>
            <CopyToClipboard text={convertedUrl} onCopy={handleCopyClick}>
              <IconButton
                color="primary"
                className={classes.iconButton}
                aria-label="copy"
                disabled={!convertedUrl}
                size="large">
                <FileCopyIcon />
              </IconButton>
            </CopyToClipboard>
            
            <IconButton
              color="primary"
              className={classes.iconButton}
              aria-label="short-cut"
              onClick={handleClickShortCut}
              disabled={!convertedUrl}
              size="large">
              <OpenInNewIcon />
            </IconButton>
            
            <IconButton
              color="primary"
              className={classes.iconButton}
              aria-label="info"
              onClick={handleClickInfo}
              disabled={!convertedUrl}
              size="large">
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
  );
}

export default BitlyContainer;

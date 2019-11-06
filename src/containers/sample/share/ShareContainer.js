import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useSnackbar } from 'notistack';


import DefaultSampleContent from '../DefaultSampleContent';

const ShareContainer = () => {
  const { enqueueSnackbar } = useSnackbar();

  const share = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ url: window.location.origin, title: '주소 공유', text: '공유 테스트' });
        console.log('공유 완료');
      } catch (e) {
        enqueueSnackbar(`오류 발생 : ${e.message}`, { variant: 'error' });
      }
    } else {
      enqueueSnackbar('web share API를 지원하지 않는 브라우저 입니다.', { variant: 'warning' });
    }
  };

  return (
    <DefaultSampleContent title="Web Share API">
      <Grid>
        <Button variant="contained" color="primary" onClick={share}>공유하기 테스트</Button>
      </Grid>
    </DefaultSampleContent>
  )
}

export default ShareContainer;

import React from 'react';
import Button from '@material-ui/core/Button';
import DefaultSampleContent from '../DefaultSampleContent';

const ShareContainer = () => {
  const share = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ url: window.location.origin, title: '주소 공유', text: '공유 테스트' });
        console.log('공유 완료');
      } catch (e) {
        console.error(e.message);
      }
    } else {
      console.log('web share API 지원하지 않음');
    }
  };

  return (
    <DefaultSampleContent title="Web Share API">
      <Button variant="contained" color="primary" onClick={share}>공유하기 테스트</Button>
    </DefaultSampleContent>
  )
}

export default ShareContainer;

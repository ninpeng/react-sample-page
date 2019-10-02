import React from 'react';
import { Button, Container, Jumbotron } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const ShareContainer = () => {

  const location = useLocation();

  const share = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ url: `${process.env.PUBLIC_URL}/${location.pathname}`, title: '주소 공유', text: '공유 테스트' });
        console.log('공유 완료');
      } catch (e) {
        console.error(e.message);
      }
    } else {
      console.log('web share API 지원하지 않음');
    }
  };

  return (
    <Container>
      <Jumbotron>
        <h1 className="display-5">Web Share API</h1>
      </Jumbotron>
      <div>
        <Button variant="outline-primary"
          onClick={share}>공유하기</Button>
      </div>
    </Container>
  )
}

export default ShareContainer;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Button } from 'react-bootstrap';

const RematchContainer = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  
  return (
    <Container>
      <div>
        <h1>The count is: {count}</h1>
        <Button variant="outline-primary"
          onClick={()=>dispatch.count.increment(1)}>Add 1</Button>
        <Button variant="outline-secondary"
          onClick={()=>dispatch.count.incrementAsync(1)}
          style={{ margin: '.5em' }}>Add 1 Async</Button>
      </div>
    </Container>
  )
}

export default RematchContainer;
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

import DefaultSampleContent from '../DefaultSampleContent';
import AirDrop from './AirDrop';

const GsapContainer = () => {
  const [showAirplane, setShowAirplane] = useState(false);

  return (
    <DefaultSampleContent title="GSAP3 예제">
      <Button variant="contained" onClick={() => setShowAirplane((show)=>!show)}>비행기</Button>
      <AirDrop show={showAirplane} />
    </DefaultSampleContent>
  )
}

export default GsapContainer;

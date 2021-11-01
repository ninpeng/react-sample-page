import { useState } from 'react';
import Button from '@mui/material/Button';

import DefaultSampleContent from '../DefaultSampleContent';
import AirDrop from './AirDrop';

const GsapContainer = () => {
  const [showAirplane, setShowAirplane] = useState(false);

  return (
    <DefaultSampleContent title="GSAP3 Tween 예제">
      <Button variant="contained" onClick={() => setShowAirplane((show)=>!show)}>비행기</Button>
      <AirDrop show={showAirplane} />
    </DefaultSampleContent>
  )
}

export default GsapContainer;

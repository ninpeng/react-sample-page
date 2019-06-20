import React, {useEffect, useRef} from 'react';
import {TweenMax} from 'gsap';

import airplane from './image/airplane.svg';
import airplaneShadow from './image/airplane_shadow.svg';
import airplaneSmoke from './image/airplane_smoke.svg';
import gas from './image/GAS.png';

const gasArray = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800];

const basicStyles = {
  zIndex: 1000,
  position: 'absolute',
  visibility: 'hidden'
}

const styles = {
  left: -400,
  width: 300,
  position: 'absolute'
}

function Airdrop() {
  const imgRef = useRef(null);
  const gasRef = useRef([]);

  useEffect(() => {
    if (imgRef && imgRef.current) {
      TweenMax.to(imgRef.current, 5,
        { delay: 1.5, visibility: 'visible', x: window.innerWidth+500 });
    }

    if (gasRef && gasRef.current) {
      TweenMax.staggerTo(gasRef.current, 4, { delay: 1.9, visibility: 'visible' }, 0.14);
      TweenMax.staggerTo(gasRef.current, 4, { delay: 1.9, opacity: 0, rotation: 900, x: '-=250', y: window.innerHeight }, 0.14);
    }
  }, []);

  return (
    <div style={basicStyles}>
      <div style={styles} ref={imgRef}>
        <img src={airplaneShadow} x="-200px" width="100%" height="auto" alt="" style={{ top: '30px', position: 'absolute' }} />
        <img src={airplaneSmoke} width="100%" height="auto" alt="" style={{ left: '-80px', position: 'absolute' }} />
        <img src={airplane} width="100%" height="auto" alt="" style={{ position: 'absolute' }} />
      </div>
      <div>
      { gasArray.map((item, index) =>
        <img key={index} ref={gas=>gasRef.current[index]=gas} src={gas} width="30" height="30" alt="" style={{ left: item, top: 100, position: 'absolute' }} />) }
      </div>
    </div>
  )
}

export default Airdrop;

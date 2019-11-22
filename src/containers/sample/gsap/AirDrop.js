import React, { useEffect } from 'react';
import { gsap } from 'gsap';

import airplane from './image/airplane.svg';
import airplaneShadow from './image/airplane_shadow.svg';
import airplaneSmoke from './image/airplane_smoke.svg';
import gas from './image/GAS.png';

const basicStyles = {
  left: 0,
  top: 200,
  zIndex: 1300,
  position: 'fixed',
  visibility: 'hidden'
}

const styles = {
  width: 300,
}

const Gas = ({ left }) => {
  return (
    <img className="gsap-gas" src={gas} width="30" height="30" alt="" style={{ left: left, top: 100, position: 'absolute' }} />
  );
}

const Gases = () => {
  let gasArray = [];

  for (let i=0; i<window.innerWidth; i+=100) {
    gasArray.push(<Gas key={i} left={i} />);
  }

  return gasArray;
}

const Airdrop = ({ show }) => {

  useEffect(() => {
    if (show) {
      gsap.to(".gsap-airpalne",
        { duration: 4, visibility: 'visible', opacity: 0, x: window.innerWidth });

      gsap.to(".gsap-gas",
        { duration: 4, stagger: 0.17, visibility: 'visible', opacity: 0, rotation: 900, x: '-=250', y: window.innerHeight-400 });
    }
  }, [show]);

  return (
    <div style={basicStyles}>
      <div className="gsap-airpalne" style={styles}>
        <img src={airplaneShadow} width="100%" height="auto" alt="" style={{ top: '30px', position: 'absolute' }} />
        <img src={airplaneSmoke} width="100%" height="auto" alt="" style={{ left: '-80px', position: 'absolute' }} />
        <img src={airplane} width="100%" height="auto" alt="" style={{ position: 'absolute' }} />
      </div>
      <div>
        <Gases />
      </div>
    </div>
  )
}

export default Airdrop;

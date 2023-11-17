import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className='container'>
        <div className='logo-text' style={{ lineHeight: '1.188' }}>
        Legacy Retire
        </div>
        <div className='slogan-text'>Your Family‘s Future Secured.</div>
        <p className='quote'>"The poor plans for Saturday nights but the rich plan for 3 genrations."</p>
        <div className='features'>
        <div style={{ marginTop: '-100px',}}>
        {/* <CardStack /> */}
      </div>
       </div>
    </div>
  )
}

export default Hero
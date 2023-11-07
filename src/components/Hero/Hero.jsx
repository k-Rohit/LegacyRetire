import React from 'react';
import './Hero.css';
import CardStack from '../CardStack/CardStack';
import Grid from '@mui/material/Grid'; // Grid version 1



function Hero() {
  return (
    <div className='container'>
        <div className='logo-text' style={{ lineHeight: '1.188' }}>
        Legacy<br />
        Retire
        </div>
        <div className='features'>
        <div style={{ marginTop: '-100px',}}>
        <CardStack />
      </div>
       </div>
    </div>
  )
}

export default Hero
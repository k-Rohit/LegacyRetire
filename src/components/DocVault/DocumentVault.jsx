import React ,{ useEffect }from 'react';
import './DocumentVault.css';
import lottie from 'lottie-web';
import vaultAnim from '../../assets/vaultAnim.json'; 
import Button from '@mui/material/Button';
import {faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

function DocumentVault() {
    const navigate = useNavigate()
    useEffect(() => {
      // Load the Lottie animation
      const animationContainer = document.getElementById('vaultanim');
  
      if (animationContainer) {
          const anim = lottie.loadAnimation({
              container: animationContainer,
              renderer: 'svg',
              loop: true,
              autoplay: true,
              animationData: vaultAnim,
          });
      }
  }, []);

  return (
    <div className='vault-container'>
      <div className='video'>
      <div id='vaultanim' className='vaultanim'></div>
      </div>
      <div className='vault-text'>
        <p>Store Your </p>
        <p>Documents</p>
        <p>Safely.</p>
        <div className='vault-btn'>
          <Button
                      variant='outlined'
                      color='primary'
                      sx={{
                          borderRadius: '10px',
                          color: 'black',
                      }}
                      onClick = {() => navigate('bot')}
                  >
                      Store <FontAwesomeIcon icon={faArrowRight} />
                  </Button>
          </div>
      </div>
    </div>
  );
}

export default DocumentVault
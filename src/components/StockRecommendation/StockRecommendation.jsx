import React ,{ useEffect } from 'react'
import lottie from 'lottie-web';
import  stockAnim from '../../assets/stockAnim.json'; 
import Button from '@mui/material/Button';
import {faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import './StockRecommedation.css'

function StockRecommendation() {

    const navigate = useNavigate()
  useEffect(() => {
    // Load the Lottie animation
    const animationContainer = document.getElementById('stockanim');

    if (animationContainer) {
        const anim = lottie.loadAnimation({
            container: animationContainer,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: stockAnim, // Use the imported animationData
        });
    }
}, []);
  return (
    <div className='stock-container'>
    <div className='stock-text'>
      <p>Get</p>
      <p>Stock</p>
      <p>Recommendations.</p>
      <div className='stock-btn'>
        <Button
                    variant='outlined'
                    color='primary'
                    sx={{
                        // backgroundColor: '#38B6FF',
                        borderRadius: '10px',
                        color: 'white',
                    }}
                    onClick = {() => navigate('stock')}
                >
                
                    Get Recommendations<FontAwesomeIcon icon={faArrowRight} />
                </Button>
        </div>
    </div>
    <div id='stockanim' className='stockanim'></div>
  </div>
  )
}

export default StockRecommendation
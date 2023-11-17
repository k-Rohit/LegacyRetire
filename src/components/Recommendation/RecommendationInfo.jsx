import React, {useEffect} from 'react'
import './RecommendationInfo.css'
import lottie from 'lottie-web';
import animationData from '../../assets/AnimationFin.json'; 
import Button from '@mui/material/Button';
import {faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

function RecommendationInfo() {

    const navigate = useNavigate()

    useEffect(() => {
        // Load the Lottie animation
        const animationContainer = document.getElementById('animation-container-rec');

        if (animationContainer) {
            const anim = lottie.loadAnimation({
                container: animationContainer,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: animationData, // Use the imported animationData
            });
        }
    }, []);
    return (
        <div className='recommend-container'>
           
          <div className='container-text'>
            <p>Upload your documents</p>
            <p>and get analysis</p>
            <p>on the go.</p>
            <div className='ask-btn'>
            <Button
                        variant='outlined'
                        color='primary'
                        sx={{
                            // backgroundColor: '#38B6FF',
                            borderRadius: '8px',
                            color: 'black',
                        }}
                        onClick = {() => navigate('recommend')}
                    >
                    
                        Ask <FontAwesomeIcon icon={faArrowRight} />
                    </Button>
            </div>
          </div>
          <div id='animation-container-rec' className='animation-container-info'></div>
        </div>
      );
}

export default RecommendationInfo
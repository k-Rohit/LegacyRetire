import React ,{ useEffect }from 'react';
import './ChatBot.css';
import lottie from 'lottie-web';
import chatAnim from '../../assets/chatAnim.json'; 
import Button from '@mui/material/Button';
import {faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

function ChatBot() {
  const navigate = useNavigate()
  useEffect(() => {
    // Load the Lottie animation
    const animationContainer = document.getElementById('chatanim');

    if (animationContainer) {
        const anim = lottie.loadAnimation({
            container: animationContainer,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: chatAnim,
        });
    }
}, []);

    return (
      <div className='chatbot-container'>
        <div className='video'>
        <div id='chatanim' className='chatanim'></div>
        </div>
        <div className='chat-text'>
          <p>Your</p>
          <p>Personal</p>
          <p>Finance Assistant.</p>
          <div className='chat-btn'>
            <Button
                        variant='outlined'
                        color='primary'
                        sx={{
                            // backgroundColor: '#38B6FF',
                            borderRadius: '10px',
                            color: 'white',
                        }}
                        onClick = {() => navigate('bot')}
                    >
                        Chat <FontAwesomeIcon icon={faArrowRight} />
                    </Button>
            </div>
        </div>
      </div>
    );
  }
  
  export default ChatBot;

import React, { useEffect } from 'react';
import './Learn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import lottie from 'lottie-web';
import animationData from '../../assets/Animation.json'; // Replace with the correct path to your animation JSON

function Learn() {
    const navigate = useNavigate();

    const handleExploreClick = () => {
        navigate('/resource');
    };

    useEffect(() => {
        // Load the Lottie animation
        const animationContainer = document.getElementById('animation-container');

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
        <div className='main-container-learn'>
            <div>
                <div className='learn-text-container'>
                    <div className='learn-text'>
                        Learn
                    </div>
                </div>

                <div className='content-list'>
                    <ul>
                        <li><FontAwesomeIcon icon={faPen} /> Articles on financial planning, business management, and entrepreneurship</li>
                        <li><FontAwesomeIcon icon={faPen} /> Video tutorials for practical insights</li>
                        <li><FontAwesomeIcon icon={faPen} /> Interactive quizzes for self-assessment</li>
                        <li><FontAwesomeIcon icon={faPen} /> Engaging lessons on financial planning</li>
                        <li><FontAwesomeIcon icon={faPen} /> Comprehensive coverage of business management principles</li>
                        <li><FontAwesomeIcon icon={faPen} /> In-depth learning on entrepreneurship strategies</li>
                    </ul>
                </div>
                <div className='explore-btn'>
                    <Button
                        variant='outlined'
                        color='primary'
                        sx={{
                            // backgroundColor: '#38B6FF',
                            borderRadius: '5px',
                            color: 'black'
                        }}
                        onClick={handleExploreClick}
                    >
                        Explore <FontAwesomeIcon icon={faArrowRight} />
                    </Button>
                </div>
            </div>
            <div id='animation-container' className='animation-container'></div>
        </div>
    );
}

export default Learn;

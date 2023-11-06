import React from 'react'
import './Learn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import learnLogo from '../../assets/learnlogo.png';
import Button from '@mui/material/Button';

function Learn() {
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
                        variant="contained"
                        color="primary"
                        sx={{
                            backgroundColor: '#38B6FF',
                            borderRadius: '5px',
                        }}
                    >
                        Explore <FontAwesomeIcon icon={faArrowRight} />
                    </Button>

                </div>

            </div>
            <div className='image-container'>
                <img src={learnLogo} />
            </div>
        </div>
    )
}

export default Learn
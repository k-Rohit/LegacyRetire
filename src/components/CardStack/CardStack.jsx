import { motion } from 'framer-motion';
import React, { useState } from 'react';
import './CardStack.css'

const Card = ({title,content}) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hover: {
      scale: 1.1,
    },
    notHover: {
      scale: 1,
    },
  };

  return (
    <motion.div
      className={`card ${isHovered ? 'hovered' : ''}`}
      variants={cardVariants}
      whileHover="hover"
      whileTap="notHover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2>{title}</h2>
      {isHovered && (
        <motion.div className="card-content">
          <p>{content}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

const CardStack = () => {
    return (
        <div className='main-container'>
        <div className='first-line'>
            <div className='one'>
            <Card title="Multi-Generational Family Profiles"
            content="Users create family profiles, link members, and manage roles, using blockchain for secure decentralized identity systems, boosting data security and privacy."
            />
            </div>
            <div className='two'>
            <Card title='Document Security Vault'/>
            </div>
        </div>
        <div className='three'>
            <Card title='Personalised Recommendations'/>
        </div>
        <div className='first-line'>
            <div className='one'>
            <Card title="Retirement Planning and Tracking"/>
            </div>
            <div className='two'>
            <Card title='Education and Financial Literacy'/>
            </div>
        </div>
        </div>
    )
}

export default CardStack;

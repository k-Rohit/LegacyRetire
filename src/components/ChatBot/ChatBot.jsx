import React from 'react';
import './ChatBot.css';
import ReactPlayer from 'react-player';
import videoFile from '../../assets/bot1.mp4';



function ChatBot() {
    return (
      <div className='chatbot-container'>
        <div className='video'>
          <ReactPlayer
            url={videoFile} // Provide the URL of your video file
            style={{ width: '100px', height: '500px' }} 
            controls={false} // Show video controls
            playing={true} // Set to true to auto-play the video
            playsinline={true} // Set to true to enable inline playback on iOS devices
            muted={true} // Mute the video to enable autoplay
            volume={0} // Set the volume to 0
          />
        </div>
        <div className='chat-text'>
          <p>Your</p>
          <p>Personal</p>
          <p>Finance Assistant</p>
        </div>
      </div>
    );
  }
  
  export default ChatBot;

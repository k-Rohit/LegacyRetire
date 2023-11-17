import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';

const linkStyles = {
  textDecoration: 'none',  // Remove underline
  color: '#38B6FF',       // Set text color to #38B6FF
};

function NavBar() {
  return (
    <nav >
      <div className="navbar-container">
        <div className="logo">
          <Link to="/" className="link" style={linkStyles}>
            Home
          </Link>
        </div>
        <div className="learn">
          <Link to="/learn" className="link" style={linkStyles}>
            Learn
          </Link>
        </div>
        <div className="Chatbot">
          <Link to="/bot" className="link" style={linkStyles}>
            Chatbot
          </Link>
        </div>
        <div className="recommendation">
          <Link to="/recommend" className="link" style={linkStyles}>
            Recommendation
          </Link>
        </div>
        <div className="resource">
          <Link to="/resource" className="link" style={linkStyles}>
            Resource
          </Link>
        </div>
      </div>
    </nav>
    // <IconBreadcrumbs/>
  );
}


export default NavBar;


function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function IconBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          MUI
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Core
        </Link>
        <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="text.primary"
        >
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Breadcrumb
        </Typography>
      </Breadcrumbs>
    </div>
  );
}

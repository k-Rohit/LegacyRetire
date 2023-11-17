import './Resoruce.css';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Grid, Card, CardContent, Typography, CardMedia, IconButton } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';

const API_KEY = 'AIzaSyA1hU1R2sSNUP6Mx3fnkRiTza8qoGD-E_s';
const apiUrl = 'https://www.googleapis.com/youtube/v3/search';

function LabTabs() {
  const [value, setValue] = useState('1');
  const [videos, setVideos] = useState([]);

  const fetchVideos = async (searchQuery) => {
    try {
      const response = await fetch(
        `${apiUrl}?part=snippet&maxResults=12&q=${searchQuery}&key=${API_KEY}`
      );
      const data = await response.json();
      setVideos(data.items);
    } catch (error) {
      console.error('Error fetching data from YouTube API:', error);
    }
  };

  useEffect(() => {
    // Fetch videos for the default tab
    fetchVideos('How to do financial planning?');
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);

    // Fetch videos based on the selected tab
    if (newValue === '1') {
      fetchVideos('financial planning in english');
    } else if (newValue === '2') {
      fetchVideos('retirement planning');
    } else if (newValue === '3') {
      fetchVideos('how to work and earn money after retirement?');
    }
  };

  return (
    <div className='resource-container'>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              sx={{
                '& .MuiTab-root': {
                  fontFamily: 'Poppins, sans-serif',
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: '15rpx',
                },
              }}
            >
              <Tab label="Financial Planning" value="1" />
              <Tab label="Retirement Planning" value="2" />
              <Tab label="Entrepreneurship" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Grid container spacing={2}>
              {videos.map((video) => (
                <Grid item key={video.id.videoId} xs={12} sm={6} md={4} lg={3}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardMedia
                      component="img"
                      alt={video.snippet.title}
                      height="140"
                      image={video.snippet.thumbnails.medium.url}
                      style={{ cursor: 'pointer' }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="subtitle1" gutterBottom>
                        {video.snippet.title}
                      </Typography>
                      <IconButton
                        aria-label="play"
                        sx={{ marginLeft: 'auto' }}
                        onClick={() => window.open(`https://www.youtube.com/watch?v=${video.id.videoId}`)}
                      >
                        <YouTubeIcon />
                      </IconButton>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </TabPanel>
          <TabPanel value="2">
            <Grid container spacing={2}>
              {videos.map((video) => (
                <Grid item key={video.id.videoId} xs={12} sm={6} md={4} lg={3}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardMedia
                      component="img"
                      alt={video.snippet.title}
                      height="140"
                      image={video.snippet.thumbnails.medium.url}
                      style={{ cursor: 'pointer' }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="subtitle1" gutterBottom>
                        {video.snippet.title}
                      </Typography>
                      <IconButton
                        aria-label="play"
                        sx={{ marginLeft: 'auto' }}
                        onClick={() => window.open(`https://www.youtube.com/watch?v=${video.id.videoId}`)}
                      >
                        <YouTubeIcon />
                      </IconButton>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </TabPanel>
          <TabPanel value="3">
            <Grid container spacing={2}>
              {videos.map((video) => (
                <Grid item key={video.id.videoId} xs={12} sm={6} md={4} lg={3}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardMedia
                      component="img"
                      alt={video.snippet.title}
                      height="140"
                      image={video.snippet.thumbnails.medium.url}
                      style={{ cursor: 'pointer' }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="subtitle1" gutterBottom>
                        {video.snippet.title}
                      </Typography>
                      <IconButton
                        aria-label="play"
                        sx={{ marginLeft: 'auto' }}
                        onClick={() => window.open(`https://www.youtube.com/watch?v=${video.id.videoId}`)}
                      >
                        <YouTubeIcon />
                      </IconButton>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </TabPanel>
          {/* Similar modification for TabPanel "2" and "3" */}
        </TabContext>
      </Box>
    </div>
  );
}

export default LabTabs;

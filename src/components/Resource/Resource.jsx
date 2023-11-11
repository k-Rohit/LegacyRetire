import React from 'react'
import './Resoruce.css'
import ResourceCard from './ResourceCard';
import logoImage from '../../assets/logo.png'


import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example"
          
          sx={{
            '& .MuiTab-root': {
              fontFamily: 'Poppins, sans-serif',
              color: 'black',
              fontWeight : 'bold',
              fontSize : '15rpx'
            },
          }}
          >
            <Tab label="Financial Planning" value="1"/>
            <Tab label="Retirement Planning" value="2" />
            <Tab label="Enterprenuership" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
        {/* <ResourceCard title="Finance" logoImage={logoImage} content="Blog about finance" /> */}
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}

function Resource() {
    return (
        <div className='resource-container'>
            <div className='resource-text'>
                What do you want to learn today!
            </div>
            <div className='rcard-container'>
                {/* <div className='card-1'>
                    <ResourceCard title="Finance" logoImage={logoImage} content="Blog about finance" />
                </div>
                <div>
                    <ResourceCard title="Enterprenuership" logoImage={logoImage} content="Blog about business" />
                </div> */}
                <LabTabs/>
            </div>
        </div>
    )
}

export default Resource;
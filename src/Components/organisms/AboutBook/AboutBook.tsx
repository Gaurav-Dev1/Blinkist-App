import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { makeStyles } from '@mui/styles';
import { Constants } from '../../../Data/Constants';
import { Typography } from '@mui/material';

const useStyles = makeStyles({
    selectedTab: {
        color: '#03314B !important',
    },
    headingTypography: {
        fontfamily: 'Cera Pro',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '20.11px !important',
        marginLeft: '0px',
        textTransform: 'none'
    },
    tabsContentTypography: {
        lineHeight: "20.11px !important",
        fontSize: "16px !important",
        color: '#03314B !important',
        position: 'relative',
        marginLeft: '0px !important',
        fontFamily: 'Cera Pro'
    }
})

const AboutBookTab = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const styles = useStyles();
  
  return (
    <Box >
      <TabContext value={value}>
        <Box sx={{ borderBottom: '2px solid #E1ECFC', width: 600}}>
          <TabList 
          onChange={handleChange} 
          aria-label="lab API tabs example"
          textColor='primary'
          indicatorColor='primary'
          TabIndicatorProps={{
            style :{backgroundColor :'#2CE080'}
          }}
          >
            <Tab 
            classes = {{selected: styles.selectedTab}}
            label={<span className={styles.headingTypography}>Synopsis</span>} 
            value="1" 
            sx = {{
                width: '200px',
                alignItems: 'flex-start'
            }}
            />
            <Tab 
            classes = {{selected: styles.selectedTab}}
            label={<span className={styles.headingTypography}>Who is it for</span>} 
            value="2" 
            sx = {{
                width: '200px',
                alignItems: 'flex-start'
            }}
            />
            <Tab 
            classes = {{selected: styles.selectedTab}}
            label={<span className={styles.headingTypography}>About the Author</span>} 
            value="3" 
            sx = {{
                width: 200,
                alignItems: 'flex-start'
            }}
            />
          </TabList>
        </Box>
        <TabPanel value="1">
            <Box width={'600px'} height={'100px'}>
                <Typography  className='styles.tabsContentTypography'>{Constants.Tabs.Synopsis}</Typography>
            </Box>
        </TabPanel>
        <TabPanel value="2">
            <Box width={'600px'} height={'100px'}>
                <Typography  className='styles.tabsContentTypography'>{Constants.Tabs.WhoIsItFor}</Typography>
            </Box>
        </TabPanel>
        <TabPanel value="3">
            <Box width={'600px'} height={'100px'}>
                <Typography className='styles.tabsContentTypography'>{Constants.Tabs.AboutAuthor}</Typography>
            </Box>
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default AboutBookTab;

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CalendarBlock from './CalendarBlock';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style = {style.main}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: "", display: 'flex', height: 224, marginTop: "30px", backgroundColor: "rgb(21 25 30)",         borderRadius: "20px",
    }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        indicatorColor= "secondary"
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }} style = {style.box}
      >
        <Tab sx = {{color: "#656b7a"}} label="1" {...a11yProps(0)} />
        <Tab sx = {{color: "#656b7a"}} label="2" {...a11yProps(1)} />
        <Tab sx = {{color: "#656b7a"}} label="3" {...a11yProps(2)} />
        <Tab sx = {{color: "#656b7a"}} label="4" {...a11yProps(3)} />
        <Tab sx = {{color: "#656b7a"}} label="5" {...a11yProps(4)} />
        <Tab sx = {{color: "#656b7a"}} label="6" {...a11yProps(5)} />
        <Tab sx = {{color: "#656b7a"}} label="7" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <CalendarBlock/>
        <CalendarBlock/>
        <CalendarBlock/>
        <CalendarBlock/>

      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>
  );
}

const style = {
    main: {
        width: "90%",
        height: "295px",
        overflow: "scroll",
    },
    box: {
        width: "10%",
        backgroundColor: "rgb(21 25 30)",
        borderRadius: "20px",
    }
}
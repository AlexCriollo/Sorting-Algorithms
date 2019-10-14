import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import BubbleSort from '../algorithms/BubbleSort';
import SelectionSort from '../algorithms/SelectionSort';
import InsertionSort from '../algorithms/InsertionSort';
import MergeSort from '../algorithms/MergeSort';
import QuickSort from '../algorithms/QuickSort';

//Algorithms Tab panels navegator 
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: '15px',
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function AlgorithmTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Bubble Sort" {...a11yProps(0)} />
          <Tab label="Selection Sort" {...a11yProps(1)} />
          <Tab label="Insertion Sort" {...a11yProps(2)} />
          <Tab label="Merge Sort" {...a11yProps(3)} />
          <Tab label="Quick Sort" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <BubbleSort/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SelectionSort/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <InsertionSort/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <MergeSort/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <QuickSort/>
      </TabPanel>
    </div>
  );
};

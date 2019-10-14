import React, { useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Divider from '@material-ui/core/Divider';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import DataSetContext from '../../context/dataSet/datasetContext';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    paddingTop: '15px'
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    position: 'center',
    fontWeight: theme.typography.fontWeightRegular,
  },
  paper: {
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  },
}));

export default function Results({ results}) {

  const classes = useStyles();

  const datasetContext = useContext(DataSetContext);

  const { orderType } = datasetContext;

  const [dataOrderType] = useState(orderType);

  const [show, setShow] = useState([]);

  const [average, setAverage] = useState(0);

  const display = () => {

    setShow(results.times[0]);
  };

  const calcAverage = () => {

    let sum = results.times[0].reduce((a, b) => a + b, 0);
    setAverage(sum / results.times[0].length);
    console.log(average);
  };

  return (

    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>DataSet-Size: {results.arraySize} - {dataOrderType} Case : {results.id} Time-Results : {results.times[0].length} </Typography>
        
        
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          

          <Grid container spacing={3}>
          
          <Grid item xs={3}>
            <Paper className={classes.paper}>Average : {average.toFixed(4)}</Paper>
          </Grid>
          <Divider />
          {show.map(times =>
                  <Grid item xs={3}>
                    <Paper className={classes.paper}>{times.toFixed(4)}</Paper>
                  </Grid>)}
                  

          </Grid>
        

        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
        <ButtonGroup style={{marginLeft : '10px' }} variant="text" color="secondary" size="small" aria-label="small contained button group">
              <Button onClick={ () => calcAverage()}>
                Get Average
              </Button>
              <Button onClick={ () => display()}>
                Display Times
              </Button>
            </ButtonGroup>
        </ExpansionPanelActions>
      </ExpansionPanel>

    </div>
  );
}
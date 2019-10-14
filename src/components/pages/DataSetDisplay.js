import React, {useContext, useState, Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Spinner from '../layout/Spinner';
import DatasetContext from '../../context/dataSet/datasetContext';
import Paper from '@material-ui/core/Paper';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';

//CSS Style
const useStyles = makeStyles(theme => ({
    
    paper: {
      marginLeft: '15px',
      color: theme.palette.text.secondary,
    },
    roots: {
      display: 'inline',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 'fit',
      height: 137,
    }
  }));

const DataSetDisplay = () => {
    
    const classes = useStyles();

    const datasetContext = useContext(DatasetContext);
    const { dataSet, orderType } = datasetContext;

    const[display, setDisplay] = useState({
        on : false
    })

    const handleChange = name => event => {
        setDisplay({ ...display, [name]: event.target.checked });
      };

    return (
        <Paper className={classes.paper}>
            <div className={classes.roots}>
                <GridList cellHeight={5} className={classes.gridList}>
                    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                        <ListSubheader component="div">DataSet : {dataSet.length} {orderType} 
                             <Checkbox
                                checked={display.on}
                                onChange={handleChange('on')}
                                value="on"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                        /> Display</ListSubheader>
                    </GridListTile>
                    {display.on && <Fragment>{dataSet.map(num => 
                        <Grid item xs={4}>
                        <Paper 
                            style={{ height:'25px', paddingLeft: '5px'}}
                        >
                            {num}
                        </Paper>
                        </Grid>
                    )} </Fragment>}
                    
                </GridList>
            </div>
        </Paper>
    )
}

export default DataSetDisplay;
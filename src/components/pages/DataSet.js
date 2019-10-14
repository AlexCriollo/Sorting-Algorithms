import React, { useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import DatasetContext from '../../context/dataSet/datasetContext';
import DataSetDisplay from '../pages/DataSetDisplay';
import Options from './Options';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: '20px'
  },
  paper: {
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },

}));

export default function Dataset(){

  const classes = useStyles();

  const datasetContext = useContext(DatasetContext);

  const { setDataSet } = datasetContext;

  //dataset size
  const [values, setValues] = useState({
      size: ''
  });
  
  const handleChange = event => {
      setValues(oldValues => ({
        ...oldValues,
        [event.target.name]: event.target.value,
  }));
  };

  //dataset generator
  const generateDataSet = () => {

    let array = [];

    for(let i = 0; i < values.size ; i++){
      array.push(Math.floor(Math.random() * Math.floor(10000000)))
    };
    setDataSet(array);
  };

  return (
      <Grid container className={classes.root}>
          <Grid item xs={3} >
            
              <Paper className={classes.paper}>
                <div>
                  <form autoComplete="off">
                      <FormControl required className={classes.formControl}>
                          <InputLabel htmlFor="size-required">DataSet Size</InputLabel>
                          <Select
                              value={values.size}
                              onChange={handleChange}
                              name="size"
                              inputProps={{
                                  id: 'size-required',
                              }}
                              className={classes.selectEmpty}
                          >
                              <MenuItem value="">
                                  <em>None</em>
                              </MenuItem>
                              <MenuItem value={10000}>10k</MenuItem>
                              <MenuItem value={20000}>20k</MenuItem>
                              <MenuItem value={50000}>50k</MenuItem>
                              <MenuItem value={100000}>100k</MenuItem>
                              <MenuItem value={200000}>200k</MenuItem>
                          </Select>
                          <FormHelperText>Required</FormHelperText>
                      </FormControl>
                  </form>
                  <Button variant="contained" className={classes.button}
                      onClick={ () => generateDataSet()}>
                      Generate
                  </Button>
                  </div>      
              </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper style={{ marginLeft : '8px' , height: '135px'}} >
              <Options/>  
            </Paper>
          </Grid>
          <Grid item xs={6}>
              <DataSetDisplay/>
          </Grid>
        
      </Grid>
  )
}
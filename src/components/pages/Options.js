import React, { useContext, useState, setState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import DatasetContext from '../../context/dataSet/datasetContext';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  formControl: {
    marginLeft : '10px'
  },
}));

//Algorithm
let insertionSort = (inputArr) => {
  let length = inputArr.length;
  for (let i = 1; i < length; i++) {
      let key = inputArr[i];
      let j = i - 1;
      while (j >= 0 && inputArr[j] > key) {
          inputArr[j + 1] = inputArr[j];
          j = j - 1;
      }
      inputArr[j + 1] = key;
  }
  return inputArr;
};

export default function RadioButtonsGroup() {

  const classes = useStyles();
  const [value, setValue] = React.useState('random');

  const handleChange = event => {
    setValue(event.target.value);
  };

  const datasetContext = useContext(DatasetContext);
  const { dataSet, setOrderType } = datasetContext;

  const shuffle = (array) =>{
    return array.sort(() => Math.random() - 0.5);
  };

  //Set dataset  order list
  const setOrderList = () => {
    if( value === 'accending'){
      console.log('ordered acccending');
      setOrderType('accending numbers');
      insertionSort(dataSet);
      console.log(dataSet);
    };
    if( value === 'deccending'){
      console.log('ordered deccending');
      insertionSort(dataSet).reverse();
      setOrderType('deccending numbers');
      console.log(dataSet);
    };
    if( value === 'random'){
      console.log('random order');
      setOrderType('random numbers');
      shuffle(dataSet);
      console.log(dataSet);
    };
  };

  return (
    <Grid container spacing={0}>
      <Grid item xs={3}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">OrderList</FormLabel>
        <RadioGroup  aria-label="options" name="options" value={value} onChange={handleChange}>
          <FormControlLabel  value="accending" control={<Radio />} label="Accending" />
          <FormControlLabel  value="deccending" control={<Radio />} label="Deccending" />
          <FormControlLabel  value="random" control={<Radio />} label="Random" />
          
        </RadioGroup>
      </FormControl>
      </Grid>
      <Grid item xs={3} style={{ paddingLeft : '80px', paddingTop : '45px'}}>
      <Button size="small" variant="outlined" color="secondary" 
            className={classes.button}
            onClick = {() => setOrderList()}>
            Set-Order
          </Button>
      </Grid>
    </Grid>
  )
}

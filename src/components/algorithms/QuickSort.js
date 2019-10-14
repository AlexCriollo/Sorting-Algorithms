import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import DataSetContext from '../../context/dataSet/datasetContext';
import Results from './Results';
import DisplaySortedSet from './DisplaySortedSet';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
    button: {
      marginLeft: "5px"
    }
}));

let time = 0;
let dataSetCopy = [];

//Algorithm
//=====================================
let swap = (arr, i, j) => {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
};
let partition = (arr, low, high) => {
    let q = low, i;
    for (i = low; i < high; i++) {
        if (arr[i] < arr[high]) {
            swap(arr, i, q);
            q++;
        }
    }
    swap(arr, i, q);
    return q;
};
let quickSort = (arr, low, high) => {
    if (low < high) {
        let pivot = partition(arr, low, high);
        quickSort(arr, low, pivot - 1);
        quickSort(arr, pivot + 1, high);
        return arr;
    }
};
//https://medium.com/javascript-algorithms/javascript-algorithms-quicksort-beb3169c4d4

//=====================================
export default function QuickSort() {

    const classes = useStyles();

    const datasetContext = useContext(DataSetContext);

    //access globlal state
    //=====================================
    const { dataSet, setQuickTime } = datasetContext;

    //Copy random genarated DataSet
    dataSetCopy = [...dataSet];

    //Time results array state
    const [timeResults, setTimeResults] = useState([]);

    //Time results data state
    const [resultsData, setResultsData] = useState([]);

    //case
    const [count, setCount] = useState(1);

    //data object
    let data = {
        times : [],
        arraySize : 0,
        id : count
    };

    console.log('Dataset to be sorted: ');
    console.log(dataSetCopy);

    //record time
    const recordTime = () =>{
        
        console.log(' original dataSet state:');
        console.log(dataSet);

        let t0 = performance.now();
        //Sort random datasetCopy
        //=====================================
        let sorted = quickSort(dataSetCopy, 0, dataSetCopy.length - 1);
        let t1 = performance.now();
        //time
        time = t1-t0;
        //save time
        timeResults.push(time);
        time = 0;
        console.log('Sorted dataset: ');
        console.log(sorted);
        
        //Reset datasetCopy
        dataSetCopy = [...dataSet];
        //===================================== 
        setQuickTime(timeResults);
        console.log('Time results:');
        console.log(timeResults);
        
    };

    //Save Data
    const saveData = ()=>{

        //Record timesSesults  to global state
        //===================================== 
        setQuickTime(timeResults);
        data.times.push(timeResults);
        data.arraySize += dataSet.length;
        setCount(count + 1);
        
        resultsData.push(data);
        console.log(resultsData);

        //Reset timeResults State
        setTimeResults([]);

    };

    //Clear data
    const clearData = () =>{
        setResultsData([]);
        setTimeResults([]);
        setCount(1);
    };

    return (
        <div>
        <Paper className={classes.root}>
            <Typography>
                Quick Sort
            </Typography>
            <Button variant="contained" color="secondary" className=""
                onClick={ () => recordTime()}>
                Sort-DataSet
            </Button>
            <Button variant="contained" color="primary" className={classes.button}
                onClick={ () => saveData()}>
                SaveData
            </Button>
            <Button style={{marginLeft : '455px'}} variant="contained" color="secondary" 
                onClick={ () => clearData()}>
                Clear data
            </Button>
            <DisplaySortedSet results={timeResults}/>
            {resultsData.map((timesData)=> 
               <Results key={timesData.id} results={timesData}/> 
            )}
        </Paper>
        </div>
    );
};
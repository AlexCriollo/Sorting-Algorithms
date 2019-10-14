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
let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);

    return inputArr;
}; 
//https://medium.com/javascript-algorithms/javascript-algorithms-bubble-sort-3d27f285c3b2

//=====================================
export default function BubbleSort() {

    const classes = useStyles();

    const datasetContext = useContext(DataSetContext);

    //access globlal state
    //=====================================
    const { dataSet, setBubbleTime } = datasetContext;

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
        let sorted = bubbleSort(dataSetCopy);
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
        setBubbleTime(timeResults);
        console.log('Time results:');
        console.log(timeResults);
        
    };

    //Save Data
    const saveData = ()=>{

        //Record timesSesults  to global state
        //===================================== 
        setBubbleTime(timeResults);
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
                Bubble Sort
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
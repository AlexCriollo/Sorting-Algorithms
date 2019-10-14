import React, {useReducer} from 'react';
import DatasetConext from './datasetContext';
import DatasetReducer from './datasetReducer';
import {
    SET_DATASET,
    SET_BUBBLETIME,
    SET_SELECTIONTIME,
    SET_INSERTIONTIME,
    SET_MERGETIME,
    SET_QUICKTIME,
    SET_ORDERTYPE,
    SET_LOADING
}from '../type';

const DatasetState = props => {

    const initialState = {
        dataSet : [],
        bubbleSortResults : [],
        selectionSortResults : [],
        insertionSortResults : [],
        mergeSortResults : [],
        quickSortResults : [],
        orderType : 'random numbers',
        loading: false,
    };
    
    const [state, dispatch] = useReducer(DatasetReducer, initialState);

    //Set data set
    const setDataSet = (array) => {

        setLoading();
        console.log(array);

        dispatch({
            type: SET_DATASET,
            payload: array
        })
    };

    //Set bubble sort time results 
    const setBubbleTime = (timeData) => {

        setLoading();

        dispatch({
            type: SET_BUBBLETIME,
            payload: timeData
        })
    };

    //Set selection sort time results 
    const setSelectionTime = (timeData) => {

        setLoading();

        dispatch({
            type: SET_SELECTIONTIME,
            payload: timeData
        })
    };

    //Set insertion sort time results 
    const setInsertionTime = (timeData) => {

        setLoading();

        dispatch({
            type: SET_INSERTIONTIME,
            payload: timeData
        })
    };

    //Set merge sort time results 
    const setMergeTime = (timeData) => {

        setLoading();

        dispatch({
            type: SET_MERGETIME,
            payload: timeData
        })
    };

    //Set quick sort time results 
    const setQuickTime = (timeData) => {

        setLoading();

        dispatch({
            type: SET_QUICKTIME,
            payload: timeData
        })
    };
    
    //Set Order type
    const setOrderType = (type) => {

         console.log(type)
        dispatch({ 
            type : SET_ORDERTYPE,
            payload : type 
        });
    }

    //Set loading
    const setLoading = () => dispatch({ type : SET_LOADING });

    return <DatasetConext.Provider
        value = {{
            dataSet : state.dataSet,
            bubbleSortResults : state.bubbleSortResults,
            selectionSortResults : state.selectionSortResults,
            insertionSortResults : state.insertionSortResults,
            mergeSortResults : state.mergeSortResults,
            quickSortResults : state.quickSortResults,
            orderType : state.orderType,
            loading : state.loading,
            setDataSet,
            setBubbleTime,
            setSelectionTime,
            setInsertionTime,
            setMergeTime,
            setQuickTime,
            setOrderType,
            setLoading
        }}
    >
        {props.children}
    </DatasetConext.Provider>
}

export default DatasetState;
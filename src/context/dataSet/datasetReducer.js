import {
    SET_DATASET,
    SET_BUBBLETIME,
    SET_SELECTIONTIME,
    SET_INSERTIONTIME,
    SET_MERGETIME,
    SET_QUICKTIME,
    SET_ORDERTYPE,
    SET_LOADING
} from '../type';

export default(state, action) => {

    switch(action.type){

        case SET_DATASET:
            return {
                ...state,
                dataSet: action.payload,
                loading: false
            }

        case SET_BUBBLETIME:
            return {
                ...state,
                bubbleSortResults : action.payload,
                loading: false
            }

        case SET_SELECTIONTIME:
            return {
                ...state,
                selectionSortResults : action.payload,
                loading: false
            }

        case SET_INSERTIONTIME:
            return {
                ...state,
                insertionSortResults : action.payload,
                loading: false
            }

        case SET_MERGETIME:
            return {
                ...state,
                mergeSortResults : action.payload,
                loading: false
            }

        case SET_QUICKTIME:
            return {
                ...state,
                quickSortResults : action.payload,
                loading: false
            }

        case SET_ORDERTYPE:
            return{
                ...state,
                orderType: action.payload
            }

        case SET_LOADING:
            return{
                ...state,
                loading: true
            }

        default:
            return state;
    }
}
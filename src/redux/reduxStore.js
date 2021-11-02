import {combineReducers, createStore} from 'redux'
import statisticsReducer from './statisticsReducer'
import expensesReducer from './expensesReducer'

let reducers = combineReducers( {
    statisticsPage : statisticsReducer,
    expensesPage: expensesReducer,
})

let store = createStore(reducers);

export default store;
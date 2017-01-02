/**
 * Created by dam on 2016/12/28.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './Component/TodoApp'
import reducers from "./reducers";
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';

const combineReducer = combineReducers(reducers);
const store = createStore(combineReducer);

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('app')
);
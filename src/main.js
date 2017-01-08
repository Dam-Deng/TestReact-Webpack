/**
 * Created by dam on 2016/12/28.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './Component/TodoApp'
import reducers from "./reducers";
import {Router, Route, hashHistory, browserHistory, IndexRoute, Redirect, IndexRedirect} from "react-router";
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import About from "./Component/About";
import Home from "./Component/Home";

const combineReducer = combineReducers(reducers);
const store = createStore(combineReducer);

function redirectToRoot(nextState, replace){
    replace({pathname: '/'})
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/home" component={Home} onEnter={redirectToRoot}/>
            <Route path="/" component={TodoApp} >
                <IndexRoute component={Home}/>
                <Route path="/about/:id" component={About} />
            </Route>
            <Redirect from="/test/:id" to="/about/:id" />
        </Router>
    </Provider>,
    document.getElementById('app')
);
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Thunk from 'redux-thunk';
import reducers from './reducers/index.jsx';
import App from './components/App.jsx';
import Resume from './components/Resume/resume.jsx'
import Home from './components/Home/home.jsx'



ReactDOM.render(

<Resume />

  , document.getElementById('app')
);
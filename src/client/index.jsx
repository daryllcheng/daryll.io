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

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path='/' component={ App } >
        <IndexRoute component={ Home } />
        <Route path='resume' component={ Resume } />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('app')
);
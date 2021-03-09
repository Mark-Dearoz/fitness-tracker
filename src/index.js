import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals'
import {applyMiddleware, createStore, compose} from 'redux'
import allReducers from './reducers'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

const store = createStore(allReducers,compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f))

ReactDOM.render(
  <Provider store={store}>
     <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();

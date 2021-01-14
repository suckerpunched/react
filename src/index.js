import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import reportWebVitals from './reportWebVitals';
import App from './container/App/App';

import store from './store';

import './index.css';

const application = (
  <Provider store={store}>
    <HashRouter>
      <React.Suspense fallback={<div>IM A SPINNER</div>}>
        <App/>
      </React.Suspense>
    </HashRouter>
  </Provider>
);

ReactDOM.render(application, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
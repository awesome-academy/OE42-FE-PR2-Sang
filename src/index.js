import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n'
import store from './redux/store'
import { Provider } from 'react-redux';

ReactDOM.render(
  <Suspense fallback={(<div>Loading...</div>)}>
      <Provider store={store}>
          <React.StrictMode>
              <App />
          </React.StrictMode>
      </Provider>
  </Suspense>,
  document.getElementById('root')
);
reportWebVitals();

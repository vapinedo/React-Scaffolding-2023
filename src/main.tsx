import './index.css';
import React from 'react';
import App from './App.tsx';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import store from './core/redux/store.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)

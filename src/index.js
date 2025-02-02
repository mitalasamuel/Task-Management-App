import './index.css'; // Import Tailwind CSS
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the new client module
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import './index.css';
import { store } from './redux/store';
//create a root ..
const container = document.getElementById('root');
//Initial render
//* we no longer need to pass the container into render.
const root = createRoot(container);
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

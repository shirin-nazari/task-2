import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
//create a root ..
const container = document.getElementById('root');
//Initial render
//* we no longer need to pass the container into render.
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

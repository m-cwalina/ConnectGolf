// external modules
import React from 'react';
import ReactDOM from "react-dom/client";
import App from './app';
import 'stylesheets/pages/_teetime.scss';
import 'react-day-picker/dist/style.css';

// render an instance of the component in the DOM
const root = ReactDOM.createRoot(document.getElementById("root2"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

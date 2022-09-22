// external modules
import React from 'react';
import ReactDOM from "react-dom/client";
import App from './app';
import './react.scss';
// render an instance of the component in the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

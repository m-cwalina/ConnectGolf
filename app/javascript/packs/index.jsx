// external modules
import React from 'react';
import ReactDOM from "react-dom/client";
import App from './app';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import './react.scss';

const router = createBrowserRouter([
  {
    path: "/tee_times",
  },
]);

// render an instance of the component in the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>,
);

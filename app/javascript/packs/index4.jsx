import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "stylesheets/pages/_members.scss";
import App4 from './app4'

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <App4 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root4")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// external modules
import React from 'react';
import ReactDOM from "react-dom/client";
import ErrorPage from "../components/error_page";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import App3 from './app3'
import Friends from "../components/friend";
import "./react_friendships.scss";

const router = createBrowserRouter([
  {
    path: "/friendships",
    element: <App3/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "friends",
        element: <Friends />,
      },
    ],
  },
]);

// render an instance of the component in the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

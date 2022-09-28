import React from "react";
import ReactDOM from "react-dom/client";
import App2 from "./app2";
import ErrorPage from "../components/error_page";
import User from "../components/user";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./react_friendships.scss";

const router = createBrowserRouter([
  {
    path: "/users",
    element: <App2/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/users/:userId",
        element: <User />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

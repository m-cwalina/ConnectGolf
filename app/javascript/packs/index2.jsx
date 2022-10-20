import React from "react";
import ReactDOM from "react-dom/client";
import App2, { loader as app2Loader } from "./app2";
import ErrorPage from "../components/error_page";
import BlankPage from "../components/blankpage";
import User, {loader as userLoader, action as userAction} from "../components/user";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./react_members.scss";

const router = createBrowserRouter([
  {
    path: "/users",
    element: <App2/>,
    errorElement: <ErrorPage />,
    loader: app2Loader,
    children: [
      { index: true, element: <BlankPage /> },
      {
        path: "/users/:userId",
        element: <User />,
        loader: userLoader,
        action: userAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import Friendship from "../routes/friendship";
import ErrorPage from "../components/error_page";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./react_friendships.scss";

const router = createBrowserRouter([
  {
    path: "/friendships",
    element: <Friendship/>,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

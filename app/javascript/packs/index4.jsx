// external modules
import React from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BlankPage from "../components/errors-blanks/blankpage";
import Profile, {loader as profileLoader} from '../components/user-dashboard/profile'
import ErrorPage from "../components/errors-blanks/error_page";
import App4 from './app4'

const router = createBrowserRouter([
  {
    path: '/user',
    element: <App4 />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <BlankPage /> },
      {
        path: '/user/profile',
        element: <Profile />,
        loader: profileLoader
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById("root4")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

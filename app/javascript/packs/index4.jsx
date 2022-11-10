import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "../components/error_page";
import BlankPage from "../components/blankpage";
import Bookings from '../components/bookings';
import DailyBookings, {loader as dailyBookingsLoader } from '../components/daily_bookings';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import "stylesheets/pages/_members.scss";
import App4 from './app4'

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <App4 />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <BlankPage /> },
      {
        path: "/dashboard/bookings",
        element: <Bookings />,
        children: [
          { index: true, element: <BlankPage /> },
          {
            path: "/dashboard/bookings/daily",
            element: <DailyBookings/>,
            loader: dailyBookingsLoader
          }
        ]
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root4")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "../components/error_page";
import BlankPage from "../components/blankpage";
import Bookings from '../components/bookings';
import DailyBookings, {loader as dailyBookingsLoader } from '../components/daily_bookings';
import MonthlyBookings, { loader as monthlyBookingsLoader } from '../components/monthly_bookings';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
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
          },
          {
            path: '/dashboard/bookings/monthly',
            element: <MonthlyBookings/>,
            loader: monthlyBookingsLoader
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

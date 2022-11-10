import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "../components/error_page";
import BlankPage from "../components/blankpage";
import Bookings from '../components/bookings';
import ComingSoon from '../components/coming_soon';
import DailyBookings, {loader as dailyBookingsLoader } from '../components/daily_bookings';
import HourlyBookings, { loader as hourlyBookingsLoader } from '../components/hourly_bookings';
import WeeklyBookings, { loader as weeklyBookingsLoader } from '../components/weekly_bookings';
import MonthlyBookings, { loader as monthlyBookingsLoader } from '../components/monthly_bookings';
import YearlyBookings, { loader as yearlyBookingsLoader } from '../components/yearly_bookings';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import App4 from './app4'

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <App4 />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/dashboard/members',
        element: <ComingSoon />
      },
      {
        path: '/dashboard/teesheet',
        element: <ComingSoon />
      },
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
          },
          {
            path: '/dashboard/bookings/weekly',
            element: <WeeklyBookings />,
            loader: weeklyBookingsLoader
          },
          {
            path: '/dashboard/bookings/hourly',
            element: <HourlyBookings />,
            loader: hourlyBookingsLoader
          },
          {
            path: '/dashboard/bookings/yearly',
            element: <YearlyBookings />,
            loader: yearlyBookingsLoader
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

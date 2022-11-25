import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "../components/errors-blanks/error_page";
import BlankPage from "../components/errors-blanks/blankpage";
import Bookings from '../components/bookings/bookings';
import ComingSoon from '../components/errors-blanks/coming_soon';
import AdminBooking, {loader as adminBookingLoader, action as adminBookingAction} from '../components/teesheet/admin_booking';
import AdminBookingDelete, { loader as adminBookingDeleteLoader, action as adminBookingDeleteAction } from '../components/teesheet/admin_delete_booking';
import CheckInPopUp, {loader as popUpLoader, action as popUpAction} from '../components/teesheet/checkin_popup';
import DailyBookings, {loader as dailyBookingsLoader } from '../components/bookings/daily_bookings';
import HourlyBookings, { loader as hourlyBookingsLoader } from '../components/bookings/hourly_bookings';
import WeeklyBookings, { loader as weeklyBookingsLoader } from '../components/bookings/weekly_bookings';
import MonthlyBookings, { loader as monthlyBookingsLoader } from '../components/bookings/monthly_bookings';
import YearlyBookings, { loader as yearlyBookingsLoader } from '../components/bookings/yearly_bookings';
import TeeSheet, {loader as teeSheetLoader} from '../components/teesheet/teesheet';
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
        element: <TeeSheet />,
        loader: teeSheetLoader,
        children: [
          {
          path: '/dashboard/teesheet/:teetimeId',
          element: <CheckInPopUp />,
          loader: popUpLoader,
          action: popUpAction,
          },
          {
          path: '/dashboard/teesheet/:teetimeId/bookings/:bookingId',
          element: <AdminBookingDelete />,
          loader: adminBookingDeleteLoader,
          action: adminBookingDeleteAction
          },
          {
          path: '/dashboard/teesheet/:teetimeId/bookings/admin',
          element: <AdminBooking />,
          loader: adminBookingLoader,
          action: adminBookingAction
          }
        ]
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

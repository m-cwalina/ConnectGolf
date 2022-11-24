// external modules
import React from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserBooking, { loader as userBookingLoader, action as userBookingAction } from "../components/teetimes/user_booking"
import ErrorPage from "../components/errors-blanks/error_page";
import App from './app';
import 'stylesheets/pages/_teetime.scss';
import 'react-day-picker/dist/style.css';

const router = createBrowserRouter([
  {
    path: "/tee_times",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/tee_times/:teetimeId/bookings",
        element: <UserBooking />,
        loader: userBookingLoader,
        action: userBookingAction
      }

    ],
  },
]);


// render an instance of the component in the DOM
const root = ReactDOM.createRoot(document.getElementById("root2"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// external modules
import React from 'react';
import ReactDOM from "react-dom/client";
import ErrorPage from "../components/error_page";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import App3 from './app3'
import Friends, { loader as friendsLoader } from "../components/friends";
import ReqFriends, { loader as requestedFriendsLoader } from "../components/req_friends";
import PenFriends, { loader as pendingFriendsLoader } from "../components/pen_friends";
import "stylesheets/pages/_friendships.scss";

const router = createBrowserRouter([
  {
    path: "/friendships",
    element: <App3/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/friendships/friends",
        element: <Friends />,
        loader: friendsLoader,
      },
      {
        path: "/friendships/requested_friends",
        element: <ReqFriends />,
        loader: requestedFriendsLoader,
      },
      {
        path: "/friendships/pending_friends",
        element: <PenFriends />,
        loader: pendingFriendsLoader,
      },
    ],
  },
]);

// render an instance of the component in the DOM
const root = ReactDOM.createRoot(document.getElementById("root3"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

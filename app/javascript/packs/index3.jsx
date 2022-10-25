// external modules
import React from 'react';
import ReactDOM from "react-dom/client";
import ErrorPage from "../components/error_page";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import App3 from './app3'
import Friend, { loader as friendLoader } from '../components/friend';
import Friends, { loader as friendsLoader } from "../components/friends";
import ReqFriends, { loader as requestedFriendsLoader } from "../components/req_friends";
import ReqFriend, { loader as reqFriendLoader } from '../components/req_friend';
import PenFriends, { loader as pendingFriendsLoader } from "../components/pen_friends";
import PenFriend, { loader as penFriendLoader } from '../components/pen_friend';
import "stylesheets/pages/_friendships.scss";

const router = createBrowserRouter([
  {
    path: "/friendships",
    element: <App3/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/friendships/friends",
        element: <Friends/>,
        loader: friendsLoader,
        children: [
          {
            path: "/friendships/friends/:friendId",
            element: <Friend />,
            loader: friendLoader,
          }
        ]
      },
      {
        path: "/friendships/requested_friends",
        element: <ReqFriends />,
        loader: requestedFriendsLoader,
        children: [
          {
            path: "/friendships/requested_friends/:friendId",
            element: <ReqFriend />,
            loader: reqFriendLoader,
          }
        ]
      },
      {
        path: "/friendships/pending_friends",
        element: <PenFriends />,
        loader: pendingFriendsLoader,
        children: [
          {
            path: "/friendships/pending_friends/:friendId",
            element: <PenFriend />,
            loader: penFriendLoader,
          }
        ]
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

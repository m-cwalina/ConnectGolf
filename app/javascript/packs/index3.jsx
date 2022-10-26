// external modules
import React from 'react';
import ReactDOM from "react-dom/client";
import ErrorPage from "../components/error_page";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import App3 from './app3'
import BlankPage from "../components/blankpage";
import Friend, { loader as friendLoader } from '../components/friend';
import Friends, { loader as friendsLoader } from "../components/friends";
import ReqFriends, { loader as requestedFriendsLoader } from "../components/req_friends";
import ReqFriend, { loader as reqFriendLoader } from '../components/req_friend';
import PenFriends, { loader as pendingFriendsLoader } from "../components/pen_friends";
import PenFriend, { loader as penFriendLoader, action as penFriendAction } from '../components/pen_friend';

const router = createBrowserRouter([
  {
    path: "/friendships",
    element: <App3/>,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <BlankPage /> },
      {
        path: "/friendships/friends",
        element: <Friends/>,
        loader: friendsLoader,
        children: [
          { index: true, element: <BlankPage /> },
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
          { index: true, element: <BlankPage /> },
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
          { index: true, element: <BlankPage /> },
          {
            path: "/friendships/pending_friends/:friendId",
            element: <PenFriend />,
            loader: penFriendLoader,
            action: penFriendAction
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

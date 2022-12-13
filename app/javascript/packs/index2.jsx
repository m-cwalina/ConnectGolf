// external modules
import React from 'react';
import ReactDOM from "react-dom/client";
import ErrorPage from "../components/errors-blanks/error_page";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import App2 from './app2'
import BlankPage from "../components/errors-blanks/blankpage";
import Members, { loader as membersLoader } from "../components/friends/members";
import Member, { loader as memberLoader, action as memberAction } from "../components/friends/member";
import Friend, { loader as friendLoader } from '../components/friends/friend';
import Friends, { loader as friendsLoader } from "../components/friends/friends";
import ReqFriends, { loader as requestedFriendsLoader } from "../components/friends/req_friends";
import ReqFriend, { loader as reqFriendLoader } from '../components/friends/req_friend';
import PenFriends, { loader as pendingFriendsLoader } from "../components/friends/pen_friends";
import PenFriend, { loader as penFriendLoader, action as penFriendAction } from '../components/friends/pen_friend';

const router = createBrowserRouter([
  {
    path: "/friendships",
    element: <App2/>,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <BlankPage /> },
      {
        path: "/friendships/members",
        element: <Members/>,
        loader: membersLoader,
        children: [
          { index: true, element: <BlankPage /> },
          {
            path: "/friendships/members/:memberId",
            element: <Member />,
            loader: memberLoader,
            action: memberAction
          }
        ]
      },
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
const root = ReactDOM.createRoot(document.getElementById("root2"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

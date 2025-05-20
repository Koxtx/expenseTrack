import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Expenses from "./pages/expenses/Expenses";
import Register from "./pages/forms/Register";
import Login from "./pages/forms/Login";
import ErrorPage from "./pages/ErrorPage";
import Profile from "./pages/Profile/Profile";
import Overview from "./pages/Profile/pages/Overview";
import Data from "./pages/Profile/pages/Data";
import Details from "./pages/Details/Details";
import UserConnected from "./components/ProtectedRoutes/UserConnected";
import UserNotConnected from "./components/ProtectedRoutes/UserNotConnected";
import { rootLoader } from "./loaders/rootLoader";
import ForgotPassword from "./pages/forms/Password/ForgotPassword";
import ResetPassword from "./pages/forms/Password/ResetPassword";
import ChangePassword from "./pages/forms/Password/ChangePassword";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <App />,
    loader: rootLoader,
    children: [
      {
        path: "/",
        element: (
          <UserConnected>
            <Expenses />
          </UserConnected>
        ),
      },
      {
        path: "/register",
        element: (
          <UserNotConnected>
            <Register />
          </UserNotConnected>
        ),
      },
      {
        path: "/login",
        element: (
          <UserNotConnected>
            <Login />
          </UserNotConnected>
        ),
      },
      {
        path: "/forgot",
        element: (
          <UserNotConnected>
            <ForgotPassword />
          </UserNotConnected>
        ),
      },
      {
        path: "/resetPassword/:token",
        element: (
          <UserNotConnected>
            <ResetPassword />
          </UserNotConnected>
        ),
      },
      {
        path: "/change",
        element: (
          <UserConnected>
            <ChangePassword />
          </UserConnected>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <UserConnected>
            <Details />
          </UserConnected>
        ),
      },
      {
        path: "/profile",
        element: (
          <UserConnected>
            <Profile />
          </UserConnected>
        ),
        children: [
          {
            index: true,
            element: <Overview />,
          },
          {
            path: "data",
            element: <Data />,
          },
        ],
      },
    ],
  },
]);

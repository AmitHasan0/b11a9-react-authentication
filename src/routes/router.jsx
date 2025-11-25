import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import Profile from "../pages/Profile";

import HomeLayout from "../layout/HomeLayout";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import AuthLayout from "../layout/AuthLayout";
import Register from "../pages/Register";

import AppDetails from "../pages/AppDetails";
import Apps from "../pages/Apps";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../pages/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    loader: () => fetch("/apps.json"),
    hydrateFallbackElement: <Loading></Loading>,
    children: [
      {
        path: "",
        loader: () => fetch("/apps.json"),
        hydrateFallbackElement: <Loading></Loading>,
        element: <Home></Home>,
      },
      { path: "/profile", element: <Profile></Profile> },
      {
        path: "/appDetails/:id",
        loader: () => fetch("/apps.json"),
        hydrateFallbackElement: <Loading></Loading>,
        element: (
          <PrivateRoute>
            <AppDetails></AppDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/categories/allApps",
        loader: () => fetch("/apps.json"),
        hydrateFallbackElement: <Loading></Loading>,
        element: <Apps></Apps>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      { path: "/auth/login", element: <Login></Login> },
      { path: "/auth/register", element: <Register></Register> },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;

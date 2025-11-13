import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Categories from "../pages/Categories";
import HomeLayout from "../layout/HomeLayout";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    loader: () => fetch("/apps.json"),
    children: [
      { path: "", element: <Home></Home> },
      { path: "/profile", element: <Profile></Profile> },
      { path: "/categories", element: <Categories></Categories> },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;

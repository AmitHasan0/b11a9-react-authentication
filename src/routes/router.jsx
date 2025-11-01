import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [{ path: "", element: <Home></Home> }, { path: "/apps" }],
  },
]);

export default router;

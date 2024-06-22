
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home";
import Features from "../pages/Features";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/features",
          element: <Features></Features>,
        },
      ]
    },
  ]);

export default router;
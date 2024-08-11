import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPath from "../Components/Error/ErrorPath";
import Home from "../Home/Home";
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPath></ErrorPath>,
      children:([
        {
            path:'/',
            element:<Home></Home>

        }
      ])
    },
  ]);
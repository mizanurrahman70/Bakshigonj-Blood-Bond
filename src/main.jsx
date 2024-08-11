import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import Root from './Layout/Root.jsx'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { router } from './Routes/Router.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)

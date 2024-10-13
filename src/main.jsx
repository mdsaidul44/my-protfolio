// import { StrictMode } from 'react'
import * as React from "react";

import { createRoot } from 'react-dom/client'
import './index.css'
// import Home from './Home.jsx'
import {  RouterProvider} from "react-router-dom";
import router from './Router'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>,
)

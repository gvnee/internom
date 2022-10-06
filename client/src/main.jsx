import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/main.css'
import './routes/root'
import ErrorPage from './error-page';
import Root from './routes/root';
import LoginPage from './routes/loginPage';

import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: "login",
    element: <LoginPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
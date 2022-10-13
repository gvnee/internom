import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/main.css'
import App from "./app";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { AuthProvider } from './context/authProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
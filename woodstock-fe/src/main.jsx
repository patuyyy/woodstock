import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import './index.css';
import AboutPage from './pages/AboutPage.jsx';
import Login from './pages/Login.jsx';
import Marketplace from './pages/Marketplace.jsx';
import ProDetailPage from './pages/ProDetailPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import Register from './pages/Register.jsx';


// Create a root element
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "register",
    element: <Register/>
  },
  {
    path: "login",
    element: <Login/>
  },
  {
    path: "marketplace",
    element:<Marketplace/>
  },
  {
    path: "product/:id",
    element:<ProDetailPage/>
  },
  {
    path: "about",
    element:<AboutPage/>
  },
  {
    path: "profile",
    element: <ProfilePage/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

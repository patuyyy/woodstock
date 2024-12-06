import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import './index.css';
import Page404 from './pages/404Page.jsx';
import AboutPage from './pages/AboutPage.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import CartPage from './pages/CartPage.jsx';
import DetailsPage from './pages/DetailsPage.jsx';
import LandingMarketplace from './pages/LandingMarketplace.jsx';
import Login from './pages/Login.jsx';
import Marketplace from './pages/Marketplace.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
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
    path: "about",
    element:<AboutPage/>
  },
  {
    path: "profile",
    element: <ProfilePage/>
  },
  {
    path: "details/:id",
    element: <DetailsPage/>
  },
  {
    path: "admin",
    element: <AdminDashboard/>
  },
  {
    path: "cart",
    element: <CartPage/>
  },
  {
    path: "market",
    element: <LandingMarketplace/>
  },
  {
    path: "*",
    element: <Page404/>
  },
  {
    path: "portfolio",
    element: <PortfolioPage/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Marketplace from './pages/Marketplace.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import DetailsPage from './pages/DetailsPage.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import Page404 from './pages/404Page.jsx';
import CartPage from './pages/CartPage.jsx';
import LandingMarketplace from './pages/LandingMarketplace.jsx';
import OrdersPage from './pages/OrdersPage.jsx';
import AdminDashboardOrderPage from './pages/AdminDashboardOrderPage.jsx';
import AdminOrderDetail from './pages/AdminOrderDetail.jsx';


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
    path: "order",
    element: <OrdersPage/>
  },
  {
    path: "admin/order",
    element: <AdminDashboardOrderPage/>
  },
  {
    path: "AdminOrderDetail/:id",
    element: <AdminOrderDetail/>
  },
  {
    path: "*",
    element: <Page404/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

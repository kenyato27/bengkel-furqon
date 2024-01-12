import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Registerpage from "./Pages/register.jsx";
import Errorrute from "./Pages/errorrute.jsx";
import Loginpage from "./Pages/login.jsx";
import Productspage from "./Pages/Products.jsx";

const slash = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Errorrute />,
  },
  {
    path: "/Reg",
    element: <Registerpage />,
  },
  {
    path: "/Sign",
    element: <Loginpage />,
  },
  {
    path: "/Products",
    element: <Productspage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={slash} />
  </React.StrictMode>
);

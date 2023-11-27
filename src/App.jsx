import "./App.css";
import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/homePage.jsx";
import loginPage from "./pages/auth/loginPage.jsx";
import signupPage from "./pages/auth/signupPage.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Home,
      errorElement: "Not Found",
    },
    {
      path: "/auth/login",
      Component: loginPage,
      errorElement: "Not Found",
    },
    {
      path: "/auth/signup",
      Component: signupPage,
      errorElement: "Not Found",
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

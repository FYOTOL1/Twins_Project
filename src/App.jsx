import "./App.css";
import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import loginPage from "./pages/auth/loginPage.jsx";
import signupPage from "./pages/auth/signupPage.jsx";
import homePage from "./pages/user/homePage.jsx";
import groupsPage from "./pages/user/groupsPage.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: homePage,
      errorElement: "Not Found",
    },
    {
      path: "/groups",
      Component: groupsPage,
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

import "./App.css";
import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./pages/welcomePage.jsx";
import loginPage from "./pages/auth/loginPage.jsx";
import signupPage from "./pages/auth/signupPage.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Welcome,
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

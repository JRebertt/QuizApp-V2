import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { initializeApp } from "firebase/app";

import { SignIn } from "./pages/signIn";
import { config } from "./config/firebase.config";

import "./styles/global.css";
import { AuthRoutes } from "./components/AuthRoutes";
import { ContentTest } from "./pages/contentTest";

initializeApp(config.firebaseConfig);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/test",
    element: (
      <AuthRoutes>
        <ContentTest />
      </AuthRoutes>
    ),
  },
  {
    path: "/auth",
    element: <SignIn />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

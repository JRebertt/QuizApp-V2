import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { initializeApp } from "firebase/app";

import { config } from "./config/firebase.config";
import { router } from "./routes/router";

import "./styles/global.css";

initializeApp(config.firebaseConfig);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

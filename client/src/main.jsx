import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Service from "./components/Service.jsx";
import MySkills from "./components/MySkills.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Contact from "./components/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App element={<Home />} />,
  },
  {
    path: "/about",
    element: <App element={<About />} />,
  },
  {
    path: "/service",
    element: <App element={<Service />} />,
  },
  {
    path: "/skill",
    element: <App element={<MySkills />} />,
  },
  {
    path: "/portfolio",
    element: <App element={<Portfolio />} />,
  },
  {
    path: "/contact",
    element: <App element={<Contact />} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

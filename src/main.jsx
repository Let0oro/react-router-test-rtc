import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element: <App/>,
//     errorElement: <ErrorPage />,
//     children: [
//       {path: "/", element: <Home />},
//       {path: "about", element: <About />},
//       {path: "contact", element: <Contact />},
//     ]
//   }
// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

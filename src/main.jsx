import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page.jsx";
import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import Contact from "./routes/Contact.jsx";

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

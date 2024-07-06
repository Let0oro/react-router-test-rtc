import "./App.css";
import {
  Outlet,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import ErrorPage from "../error-page";

function App() {

  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>

      <Outlet />

  {/* Comentar Routes si se usa objeto router en main.jsx */}
      <Routes>
        <Route path="/" element={<Home  />}></Route>
        <Route path="/about" element={<About  />}></Route>
        <Route path="/contact" element={<Contact  />}></Route>
        <Route path="*" element={<ErrorPage  />}></Route>
      </Routes>
    </>
  );
}

export default App;

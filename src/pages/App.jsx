import "./App.css";
import {
  Outlet,
  NavLink,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import ErrorPage from "../error-page";
import { useMemo, useState } from "react";

const pageOpts = {
  home: {bgColor: "#ADD8E6", height: 10, text: 'Home-made page'},
  about: {bgColor: "#FFDAB9", height: 50, text: 'About page'},
  contact: {bgColor: "#98FF98", height: 80, text: 'Contact'},
}

function App() {
  const [pageOpt, setPageOpt] = useState('home');

  const location = useLocation();

  useMemo(() => setPageOpt(location.pathname.split('/')[1] || 'home'), [location])


  return (
    <>
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="contact/Juanma">Contact</NavLink>
      </nav>
    </header>

      <Outlet />

  {/* Comentar Routes si se usa objeto router en main.jsx */}
      <Routes>
        <Route path="/" element={<Home options={pageOpts[pageOpt]} />}></Route>
        <Route path="/about" element={<About options={pageOpts[pageOpt]} />}></Route>
        <Route path="/contact/:name" element={<Contact options={pageOpts[pageOpt]} />}></Route>
        <Route path="*" element={<ErrorPage  />}></Route>
      </Routes>
    </>
  );
}

export default App;

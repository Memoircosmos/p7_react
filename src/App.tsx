import React from "react";
import { BrowserRouter as Router,Routes,Route,NavLink } from "react-router-dom";
import logo from "./assets/images/kasalogo.png" ;
import { About } from "./pages/about/About";
import "./App.scss"
import kasafoot from "./assets/images/kasafoot.png";
import { Gallery } from "./pages/about/gallery/Gallery";
import { Error } from "./pages/about/Error/Error";

export const App:React.FC = ()=> {

  return (
    <>
  <Router>
    <header>
    <img src={logo} alt="logo de kasa" />
    <nav>
      <NavLink to='/' className={({isActive})=> isActive? 'active-link': ''}>
        Accueil
      </NavLink>
      <NavLink to='/about' className={({isActive})=> isActive? 'active-link': ''}>
        A Propos
      </NavLink>
    </nav>
    </header>
    <Routes>
      <Route path="/about" element = {<About />} />
      <Route path="/" element = {<Gallery />} />
      <Route path="/error" element = {<Error />} />
      <Route path="*" element = {<Error />} />
    </Routes>
  </Router>
  <footer>
    <img src={kasafoot} alt="logo kasa footer" />
    <p>© 2020 Kasa. All rights reserved</p>
  </footer>
    </>
  )
}


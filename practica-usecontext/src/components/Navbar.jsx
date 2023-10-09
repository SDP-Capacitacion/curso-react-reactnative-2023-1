import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./index.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <Link to="/">Rick & Morty App</Link>
        <div>
          <NavLink to="/episodes" className="text-black underline-none">
            Episodios
          </NavLink>
          <NavLink to="/location" className="text-black underline-none">
            Location
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

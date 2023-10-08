import React from "react";
import "./index.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <a href="/" className="text-black underline-none">
          Rick & Morty App
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

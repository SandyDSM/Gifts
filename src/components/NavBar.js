import React from "react";
import "../sass/custom.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import CartWidget from "./CartWidget";


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-light shadow-sm">
      
      <div className="container-fluid">
      <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      <div>
        <a className="navbar-brand" aria-current="page" href="#">
          <img
            src={require("../assets/img/logo_hor_celebra.png")}
            alt="Logo"
            height="50"
          ></img>
        </a>
      </div>
        
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <div className="navbar-nav">
            <a className="nav-link link-primary" href="#">
              Invitación
            </a>
            <a className="nav-link link-primary" href="#">
              Productos
            </a>
            <a className="nav-link link-primary" href="#">
              Momentos
            </a>
          </div>
        </div>
        <CartWidget/>
      </div>
      
    </nav>
  );
};

export default NavBar;

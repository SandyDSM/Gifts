import React from "react";
import '../sass/custom.css';
import "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" aria-current="page" href="#">
      <img
            src={require("../imgs/logo_hor_celebra.png")}
            alt="Logo"
            height="50"
          ></img>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link link-primary" href="#">Invitación</a>
          <a className="nav-link link-primary" href="#">Productos</a>
          <a className="nav-link link-primary" href="#">Momentos</a>
        </div>
      </div>
    </div>
  </nav>
  );
}

export default NavBar;

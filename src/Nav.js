import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src="https://khana-khazana.lu/assets/img/logo.png" alt="logo" />

      <img
        className="nav_avtar"
        src="https://lh3.googleusercontent.com/S30-4cx5rGMx2DRoSMq1h9qq7EcU9sf8y_w1yBWG4duf9xWpYF5TFovh7IkF6MXnvw"
        alt="logo"
      />
    </div>
  );
}

export default Nav;

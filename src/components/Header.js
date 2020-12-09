import React from "react";

import "./Header.css";
const Header = ({ h3, h1, p }) => {
  return (
    <div className="Header">
      <div className="row">
        <div className="col-md-5 headerLeft">
          <div className="logo">
            <img src="Images/Kids Galaxy Logo.svg" alt="Kids Galaxy Logo" />
          </div>
          <div className="title">
            <h3>{h3}</h3>
            <h1>{h1}</h1>
            <br />
            <br />
            <p>{p}</p>
            <a
              href="https://www.facebook.com/kidsgalaxy.co.in"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-facebook-square"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/kidsgalaxy/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/kidsgalaxy.co.in/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="col-md-7 headerRight">
          <img src="Images/plane.svg" alt="asc" />
        </div>
      </div>
    </div>
  );
};

export default Header;

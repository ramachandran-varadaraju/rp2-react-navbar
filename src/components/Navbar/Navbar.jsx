import React, { useState } from "react";
import { Button } from "../Button";
import { MenuItems } from "./MenuItems";

import "./Navbar.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked((prevState) => !prevState);
    console.log("Clicked");
  };

  return (
    <nav className="NavBarItems">
      <h1 className="navbar-logo">
        Hackwithrama <i className="fab fa-500px"></i>
      </h1>
      <div onClick={clickHandler} className="menu-icon">
        {/* <i className="fas fa-bars fa-2x"></i> */}
        <i className={`fas fa-1x ${clicked ? "fa-times" : "fa-bars"}`}></i>
      </div>
      <ul className={`${clicked ? "nav-links active" : "nav-links"}`}>
        {MenuItems.map((item) => (
          <li key={item.id}>
            <a className={item.cName} href={item.url}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      <Button>Sign up</Button>
    </nav>
  );
};

export default Navbar;

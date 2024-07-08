import React, { useState } from "react";
import "./NavbarStyle.css";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";

const Navbar = () => {
  const [mobIcons, setmobIcons] = useState(false);
  const [mobMenu, setmobMenu] = useState(true);
  const handleMobIcons = () => {
    setmobIcons(!mobIcons);
    setmobMenu(!mobMenu);
  };

  return (
    <>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Trippy</h1>
        <div className="menu-icons" onClick={handleMobIcons}>
          <i className={mobIcons ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={mobMenu ? "nav-menu " : "nav-menu active"}>
          {MenuItems.map((items, index) => {
            return (
              <li key={index}>
                <Link className={items.cName} to={items.url}>
                  <i className={items.iconClassName}></i>
                  {items.title}
                </Link>
              </li>
            );
          })}

       
            <Link to="/sign" className="signLink" >
              SignIn/SignUp
            </Link>
           
                 </ul>
      </nav>
    </>
  );
};
export default Navbar;

import { Fragment } from "react";
import "./Header.css";
import HeaderCartButton from "./HearderCartButton";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  
  return (
    <Fragment>
      <div className="header">
        <div className="navbutton">
          <NavLink to="/Home" className="navbutton__section"> HOME </NavLink>
          <NavLink to="/Store" className="navbutton__section"> STORE</NavLink>
          <NavLink to="/About" className="navbutton__section"> ABOUT</NavLink>
          <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;

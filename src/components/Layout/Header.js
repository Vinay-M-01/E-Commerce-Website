import { Fragment } from "react";
import "./Header.css";
import HeaderCartButton from "./HearderCartButton";

const Header = (props) => {
  
  return (
    <Fragment>
      <div className="header">
        <div className="navbutton">
          <button className="navbutton__section"> HOME </button>
          <button className="navbutton__section"> STORE</button>
          <button className="navbutton__section"> ABOUT</button>
          <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;

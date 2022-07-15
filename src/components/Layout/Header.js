import { Fragment } from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <Fragment>
      <div className="header">
        <div className="navbutton">
          <button className="navbutton__section"> HOME </button>
          <button className="navbutton__section"> STORE</button>
          <button className="navbutton__section"> ABOUT</button>
          <button className="cartbutton">
            Cart
            <span className="cartcount">0</span>
          </button>
          
        </div>
      </div>
    </Fragment>
  );
};

export default Header;

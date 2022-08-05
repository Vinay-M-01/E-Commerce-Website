import { Fragment, useContext } from "react";
import "./Header.css";
import HeaderCartButton from "./HearderCartButton";
import { NavLink, useHistory } from "react-router-dom";
import CartContext from "../store/cart-context";

const Header = (props) => {

  const cartCtx = useContext(CartContext)
  const history = useHistory()

  const logoutButtonHandler = () =>{
    localStorage.clear()
    history.replace('/Login')
    console.log('Logout succesfull')
    window.location.reload(false);
  }
  
  return (
    <Fragment>
      <div className="header">
        <div className="navbutton">
          <NavLink to="/Home" className="navbutton__section"> HOME </NavLink>
          <NavLink to="/Store" className="navbutton__section"> STORE</NavLink>
          <NavLink to="/About" className="navbutton__section"> ABOUT</NavLink>
          <NavLink to="/Contact" className="navbutton__section"> CONTACT</NavLink>
          {!cartCtx.isisLoggedIn && <NavLink to="/Login" className="navbutton__section">LOGIN</NavLink> }
          {cartCtx.isisLoggedIn && <NavLink to="/Login" className="navbutton__section" onClick={logoutButtonHandler}> LOGOUT </NavLink>}
          {cartCtx.isisLoggedIn && <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>}
        </div>
      </div>
    </Fragment>
  );
};

export default Header;

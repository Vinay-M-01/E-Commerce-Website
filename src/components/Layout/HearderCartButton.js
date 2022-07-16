
import { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../store/cart-context";

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext)

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + 1;
      }, 0);

  return (
    <button className={classes.cartbutton} onClick={props.onClick}>
      Cart
      <span className="cartcount">{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;


import { useContext } from "react";
import React from "react";
import Modal from "../UI/Modal";
import "./Cart.css";
import CartContext from "../store/cart-context";

// eslint-disable-next-line
const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

const Cart = (props) => {

  const cartCtx = useContext(CartContext)

  const cartItems = cartCtx.items.map((item) => (
    <div className="mainCartList">
      <img 
        src={item.imageUrl}
        alt="Nothing happens"
        className="cartImage"
      ></img>
      <div className="title-price-quantity">{item.title}</div>
      <div className="title-price-quantity">
        {item.price}
      </div>

      <div className="title-price-quantity">{item.quantity}</div>
      <button className="removeButton"> Remove</button>
    </div>
  ));

  return (
    <Modal>
      <button onClick={props.onClose} className="cartCloseButton">
        X
      </button>
      <div className="cartName">
        <h1>CART</h1>
      </div>
      <div className="mainCartList">
        <p className="para">ITEM</p>
        <p className="para">PRICE</p>
        <p className="para-quantity">QUANTITY</p>
      </div>
      <ul>{cartItems}</ul>
      <div className="totalcost">
        Total Cost : {cartCtx.items.reduce((accumulator, curItem)=>{return accumulator + curItem.quantity*curItem.price},0)} /-
      </div>
      <button> Order </button>
    </Modal>
  );
};

export default Cart;

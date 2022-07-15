import React from "react";
import Modal from "../UI/Modal";
import "./Cart.css";

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
  const cartItem = cartElements.map((element) => (
    <div className="mainCartList">
      <img 
        src={element.imageUrl}
        alt="Nothing happens"
        className="cartImage"
      ></img>
      <div className="title-price-quantity">{element.title}</div>
      <div className="title-price-quantity">
        {element.price}
      </div>

      <div className="title-price-quantity">{element.quantity}</div>
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
      <ul>{cartItem}</ul>

      <button> Order </button>
    </Modal>
  );
};

export default Cart;

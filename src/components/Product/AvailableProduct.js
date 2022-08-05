import "./AvailableProduct.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../store/cart-context";

const AvailableProduct = (props) => {
  const cartCtx = useContext(CartContext);

  const productList = props.productsArr.map((item) => (
    <div key={Math.random().toString()} className="mainList">
      <p className="itemTitle">{item.title}</p>
      <Link to={`/products/${item.imageUrl}`}>
        <img
          onClick={() =>
            props.productDetails({
              title: item.title,
              imageUrl: item.imageUrl,
              price: item.price,
            })
          }
          src={item.imageUrl}
          alt="Nothing happens"
          className="itemImage"
        ></img>
      </Link>
      <div>
        <div className="itemPrice">Rs: {item.price}</div>
        <button
          className="addToCart"
          onClick={() => {
            cartCtx.addItem({
              title: item.title,
              imageUrl: item.imageUrl,
              price: item.price,
              quantity: 1,
            });
          }}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  ));

  return (
    <div>
      <p className="itemDes">MUSIC</p>
      <ul className="unOrderedList">{productList}</ul>
    </div>
  );
};

export default AvailableProduct;

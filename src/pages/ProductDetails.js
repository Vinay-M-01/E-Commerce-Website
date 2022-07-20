import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useContext } from "react";
import CartContext from "../components/store/cart-context";

const ProductDetails = (props) => {
  const params = useParams();
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.quantity;
  }, 0);


  const productDetailsList = (
    <section className="container">
      <div className="leftsection">
        <p>Selected product : </p>
        <img
          src={props.passedProduct.imageUrl}
          alt={props.passedProduct.title}
          className="image"
          style={{ overflow: "hidden" }}
      onMouseOver={(e) => (e.currentTarget.style = { transform: "scale(1.25)", overflow: "hidden" })}
      onMouseOut={(e) => (e.currentTarget.style = { transform: "scale(1)", overflow: "hidden" })}
        />
        <h4 style={{ bottum: "0" }}>Quantity : {numberOfCartItems}</h4>
      </div>
      <div className="rightsection">
        <h1 style={{ textAlign: "center", color: "black", border:"1px solid black", backgroundColor:"#87ceeb", borderRadius:"10px" }}>
          {props.passedProduct.title}
        </h1>
        <h2> Reviews :</h2>
        <p>
          Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of
          sorrows, hates no prosecutors will unfold in the enduring of which
          were born in it? Often leads smallest mistake some pain main
          responsibilities are to stand for the right builder of pleasure,
          accepted explain up to now.
        </p>
        <p>
          The things we are accusing of these in the explication of the truth
          receives from the flattery of her will never be the trouble and they
          are refused to the pleasures and the pleasures of the pain, explain
          the treatment of excepturi of the blessed sufferings.
        </p>
        <p>
          I never said will unfold in him receives at another time he may please
          the one that those works, we are less than they, this refused to the
          pleasures of deleniti? Those are! Will unfold in times of pleasure,
          this pain will be a right enjoyed by
        </p>
    
          <h2>Product price : {props.passedProduct.price}/- </h2>
          
      

        <button
          className="addToCart"
          onClick={() => {
            cartCtx.addItem({
              title: props.passedProduct.title,
              imageUrl: props.passedProduct.imageUrl,
              price: props.passedProduct.price,
              quantity: 1,
            });
          }}
          style={{ textAlign: "center", marginRight: "360px" }}
        >
          ADD TO CART
        </button>
      </div>
    </section>
  );

  return (
    <div className="layout">
      {params.imageUrl}
      <ul>{productDetailsList}</ul>
    </div>
  );
};

export default ProductDetails;

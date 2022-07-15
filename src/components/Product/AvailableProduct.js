import "./AvailableProduct.css";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const AvailableProduct = (props) => {
  const productList = productsArr.map((product) => (
    <div className="mainList">
      <p className="itemTitle">{product.title}</p>
      <img src={product.imageUrl} alt='Nothing happens'></img>
      <div>
        <div className="itemPrice">Rs: {product.price}</div> 
        <button className="addToCart">ADD TO CART</button>
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

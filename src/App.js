import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import { useContext } from "react";
import About from "./pages/About";
import { Redirect, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageSummary from "./components/UI/PageSummary";
import AvailableProduct from "./components/Product/AvailableProduct";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import LoginPage from "./pages/LoginPage";
import CartContext from "./components/store/cart-context";

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

function App() {
  const cartCtx = useContext(CartContext);
  const [cartIsShown, setCartIsShown] = useState(false);
  const [isProduct, setIsProduct] = useState({});

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  function productDetails(productObj) {
    console.log("Button clicked ");
    setIsProduct(productObj);
  }

  return (
    <>
      <Header onShowCart={showCartHandler} />
      {cartIsShown && <Cart onClose={hideCartHandler}></Cart>}

      <Route path="/">
        <Redirect to="/Store" />
      </Route>

      <Route path="/Home">
        <Home />
      </Route>
     
      <Route path="/Login">
        <LoginPage />
      </Route>

      <Route path="/Store">
        <PageSummary />
        {cartCtx.isisLoggedIn && (<AvailableProduct
          productsArr={productsArr}
          productDetails={productDetails}
        />)}
        {!cartCtx.isisLoggedIn && <Redirect to='/Login'/>}
      </Route>

      <About />

      <Route path="/Contact">
        <Contact />
      </Route>

      <Route path="/products/:title">
        <ProductDetails passedProduct={isProduct} />
      </Route>

      <Footer />
    </>
  );
}

export default App;

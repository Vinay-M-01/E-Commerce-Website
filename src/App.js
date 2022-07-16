import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import AvailableProduct from "./components/Product/AvailableProduct";
import PageSummary from "./components/UI/PageSummary";
import Cart from "./components/Cart/Cart";
import {useState} from 'react'
import CartProvider from "./components/store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown((prevcartIsShown) => !prevcartIsShown);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}></Cart>}
      <Header onShowCart={showCartHandler}/>
      <PageSummary/>
      <AvailableProduct/>
      <Footer/>
    </CartProvider>
  );
}

export default App;

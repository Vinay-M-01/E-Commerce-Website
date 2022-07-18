import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import PageSummary from "./components/UI/PageSummary";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./components/store/CartProvider";
import About from './pages/About'

import Home from "./pages/Home";
import Store from "./pages/Store";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      {cartIsShown && <Cart onClose={hideCartHandler}></Cart>}
      <PageSummary />
      <Home/>
      <Store/>
      <About/>
      <Footer />
    </CartProvider>
  );
}

export default App;

import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import AvailableProduct from "./components/Product/AvailableProduct";
import PageSummary from "./components/UI/PageSummary";
import Cart from "./components/Cart/Cart";
import {useState} from 'react'
import CartProvider from "./components/store/CartProvider";
import {Route} from 'react-router-dom'
import About from "./pages/About";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true)
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div >
      <Route path="/Home">
    <CartProvider>
      
      {cartIsShown && <Cart onClose={hideCartHandler}></Cart>}
      <Header onShowCart={showCartHandler}/>
      <PageSummary/>
      <Footer/>
    </CartProvider>

    </Route>

    <Route path="/Store">
    <CartProvider>
      
      {cartIsShown && <Cart onClose={hideCartHandler}></Cart>}
      <Header onShowCart={showCartHandler}/>
      <PageSummary/>
      <AvailableProduct/>
      <Footer/>
      
    </CartProvider>
    </Route>

    <Route path="/About">
    <CartProvider>
      <Header onShowCart={showCartHandler}/>
      <PageSummary/>
      <About></About>
      <Footer/>
    </CartProvider>
    </Route>
    </div>
  );
}

export default App;

import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import AvailableProduct from "./components/Product/AvailableProduct";
import PageSummary from "./components/UI/PageSummary";
import Cart from "./components/Cart/Cart";
import {useState} from 'react'

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <PageSummary/>
      <AvailableProduct/>
      <Footer/>
    </div>
  );
}

export default App;

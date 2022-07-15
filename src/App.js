import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import AvailableProduct from "./components/Product/AvailableProduct";
import PageSummary from "./components/UI/PageSummary";

function App() {
  return (
    <div>
      <Header/>
      <PageSummary/>
      <AvailableProduct/>
      <Footer/>
    </div>
  );
}

export default App;

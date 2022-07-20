
import AvailableProduct from "../components/Product/AvailableProduct";
import PageSummary from "../components/UI/PageSummary";

const Store = (props) => {
  return (
    <>
      <PageSummary/>
      <AvailableProduct productsArr={props.productsArr}/>
    </>
  );
};

export default Store;


import { Route } from "react-router-dom";
import AvailableProduct from "../components/Product/AvailableProduct";

const Store = (props) => {
  return (
    <Route path="/Store">
      <AvailableProduct />
    </Route>
  );
};

export default Store;

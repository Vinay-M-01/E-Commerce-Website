import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
  };

  const cartReducer = (state, action) => {
    if (action.type === 'ADD_CART_ITEM') {
        const updatedItems = state.items.concat(action.item);
        return {
          items: updatedItems,
        };
      }
    return defaultCartState;
  }

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = item => {
        dispatchCartAction({type: 'ADD_CART_ITEM', item: item})
    }

    const removeItemFromCartHandler = id => {
        //HAVE TO CODE FOR REMOVE ITEM 
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }
    
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}
 
export default CartProvider;
import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
  };

  const cartReducer = (state, action) => {
    if (action.type === 'ADD_CART_ITEM') {

        const existingCartItemIndex = state.items.findIndex((item) => item.title === action.item.title);

        const existingCartrItem = state.items[existingCartItemIndex]
        let updatedItems;

        if(existingCartrItem){
            const updatedItem= {
                ...existingCartrItem,
                quantity: existingCartrItem.quantity + action.item.quantity
            }
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem;
        }else{
            updatedItems ={...action.item}
            updatedItems = state.items.concat(action.item);
        }
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
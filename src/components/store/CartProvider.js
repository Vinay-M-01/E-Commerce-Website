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
            updatedItems = state.items.concat(action.item);
        }
        return {
          items: updatedItems,
        };
      }

      if(action.type === 'REMOVE_CART_ITEM'){
        console.log('This remmove is working-Found')
        
        let updatedItems = state.items.filter( (item) => item.title !== action.item.title)
        return{
            items: updatedItems
        }
      }

      if(action.type === 'PURCHASE'){
        console.log('All Items Purchased')
      }

    return defaultCartState;
  }

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = item => {
        dispatchCartAction({type: 'ADD_CART_ITEM', item: item})
    }

    const removeItemFromCartHandler = item => {
        //HAVE TO CODE FOR REMOVE ITEM 
        
        dispatchCartAction({type: 'REMOVE_CART_ITEM', item:item})
    }

    const purchaseItemCartHandler = item => {
        dispatchCartAction({type: 'PURCHASE', item : item})
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        purchaseItem: purchaseItemCartHandler,
    }
    
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}
 
export default CartProvider;
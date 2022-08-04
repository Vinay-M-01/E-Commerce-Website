import { useEffect, useReducer, useState} from "react";
import CartContext from "./cart-context";
import { useHistory } from "react-router-dom";


const defaultCartState = {
  items: [],
};

const getEmailID = localStorage
.getItem("loggedEmail")

const cartReducer = (state, action) => {

 

  let identifier

  function check(data,title){
    outer: for (const [key, value] of Object.entries(data)) {
        for(const subVal of Object.values(value)){
            if(subVal===title){
                identifier = key;
                console.log(identifier)
                break outer;
            }
        }

      }
};

async function reqPATCH(id,quantityUpdater){
        
  const response = await fetch(`https://movies-app-d5ee6-default-rtdb.firebaseio.com/${getEmailID}/${id}.json`,
  {
      method:'PATCH',
      body:JSON.stringify({quantity:quantityUpdater+1})
      
  })
};

async function reqPATCHReduce(id,quantityUpdater){
        
  const response = await fetch(`https://movies-app-d5ee6-default-rtdb.firebaseio.com/${getEmailID}/${id}.json`,
  {
      method:'PATCH',
      body:JSON.stringify({quantity:quantityUpdater-1})
      
  })
};

  
  if (action.type === "ADD_CART_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.title === action.item.title
    );

    const existingCartrItem = state.items[existingCartItemIndex];
    let updatedItems;
    // console.log(state.items[existingCartItemIndex].quantity)
    //  let quantBack = 1;
    

    if (existingCartrItem) {
      const updatedItem = {
        ...existingCartrItem,
        quantity: existingCartrItem.quantity + action.item.quantity,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;

      // GET Request to firebase
      fetch(`https://movies-app-d5ee6-default-rtdb.firebaseio.com/${getEmailID}.json`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
         console.log(data)
         check(data, action.item.title)
         let quantBack = (state.items[existingCartItemIndex].quantity)
         reqPATCH(identifier, quantBack)
         
         

        // //  for(let key in data){
        // //   console.log(key)
        // //   for(let key2 in data[key]){
        // //     console.log(key2['title'].value)
        // //   }
        // //  }
        // const result = Object.values(data).map(inner => inner)
        // // let title1 =JSON.stringify(result).toString()
        // console.log(result)
        // const result2 = result.map(item => item.title).map(itm => itm)
        // console.log(result2)
        // // if(action.item.title === result2[0]){
        // //   return console.log('Its matching title')
        // // }else{
        // //   console.log('Its not mactching ')
        // // }

        // switch(action.item.title){
        //   case result2[0]: console.log(Object.keys(data)[0])
        //   console.log(result2[0])
        //   fetch(`https://movies-app-d5ee6-default-rtdb.firebaseio.com/${getEmailID}/${Object.keys(data)[0]}.json`,{
        //     method: 'PATCH',
        //     body:JSON.stringify({quantity: action.item.quantity + action.item.quantity})
        //   })
          
        //   break;

        //   case result2[1]: console.log(result2[1])
        //   fetch(`https://movies-app-d5ee6-default-rtdb.firebaseio.com/${getEmailID}/${Object.keys(data)[1]}.json`,{
        //     method: 'PATCH',
        //     body:JSON.stringify({quantity: action.item.quantity + 1})
        //   })
        //   break;

        //   case result2[2]: console.log(result2[2])
        //   fetch(`https://movies-app-d5ee6-default-rtdb.firebaseio.com/${getEmailID}/${Object.keys(data)[2]}.json`,{
        //     method: 'PATCH',
        //     body:JSON.stringify({quantity: action.item.quantity + 1})
        //   })
        //   break;

        //   case result2[3]: console.log(result2[3])
        //   fetch(`https://movies-app-d5ee6-default-rtdb.firebaseio.com/${getEmailID}/${Object.keys(data)[3]}.json`,{
        //     method: 'PATCH',
        //     body:JSON.stringify({quantity: action.item.quantity + 1})
        //   })
        //   break;

        //   default: console.log('Its none of the Above')
        // }


        })
          
    } else {
      updatedItems = state.items.concat(action.item);

      // POSTING data to firebase 
      fetch(
        `https://movies-app-d5ee6-default-rtdb.firebaseio.com/${getEmailID}.json`,
        {
          method: "POST",
          body: JSON.stringify({
            title: action.item.title,
            imageUrl: action.item.imageUrl,
            price: action.item.price,
            quantity: action.item.quantity,
          }),
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log('post data')
          console.log(data.name);
        
        });
    }
    console.log(updatedItems)
    return {
      items: updatedItems,
    };
  }

  if(action.type === "REDUCE_ITEM_BY_ONE"){
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.title === action.item.title
    );

    const existingCartrItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartrItem.quantity > 1){
      const updatedItem = {
        ...existingCartrItem,
        quantity: existingCartrItem.quantity - action.item.quantity,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;

       // GET Request to firebase
      fetch(`https://movies-app-d5ee6-default-rtdb.firebaseio.com/${getEmailID}.json`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
      console.log(data)
      check(data, action.item.title)
      let quantBack = (state.items[existingCartItemIndex].quantity)
      reqPATCHReduce(identifier, quantBack)
      })

    }else{
      updatedItems = state.items.filter(
        (item) => item.title !== action.item.title
      );

      fetch(
        `https://movies-app-d5ee6-default-rtdb.firebaseio.com/${getEmailID}.json`,
        {
          method: "PUT",
          body: JSON.stringify(updatedItems),
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log('post data')
          console.log(data.name);
        
        });
    }
    return {
      items: updatedItems,
    };
  }

  if (action.type === "REMOVE_CART_ITEM") {
    console.log("This remmove is found Working");
    

    let updatedItems = state.items.filter(
      (item) => item.title !== action.item.title
    );
    fetch(
      `https://movies-app-d5ee6-default-rtdb.firebaseio.com/${getEmailID}.json`,
      {
        method: "PUT",
        body: JSON.stringify(updatedItems),
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log('post data')
        console.log(data.name);
      
      });
    
    return {
      items: updatedItems,
    };
  }

  if (action.type === "PURCHASE") {
    console.log("All Items Purchased");
  }

  if(action.type === "RELOAD"){
    console.log(' RELOAD button is working ')

    let initialData =[]
      fetch(`https://movies-app-d5ee6-default-rtdb.firebaseio.com/${getEmailID}.json`)
      .then((response) => {
        if(response.ok){
          return response.json()
        }
      }).then((data) => {

        if(data.length === 0){
          return initialData
        }else{
          for(let vals of Object.values(data)){
            initialData.push(vals)
          }
          
        }
        // console.log(initialData)
        return initialData
      });
      console.log(initialData)
      return{
        items: initialData,
      }
      
  }


//   if(data.length===0){
//     return [];
// }
// else{
//     for(const vals of Object.values(data)){
//         initialData.push(vals);
// }
// console.log(initialData)
// return {
//   items:initialData
// }

// }

  return defaultCartState;
};

/*---------------------- CART PROVIDER function starts here--------------------------------*/ 

const CartProvider = (props) => {
//   const [isItems, setISItems]=useState([])

//   async function reqGET(){
//     const response = await fetch(`https://movies-app-d5ee6-default-rtdb.firebaseio.com/${getEmailID}.json`)
//     if(response.ok){
//     const data = await response.json()
//     return data;
//     }
//     else{
//         return [];
//     }
// };
  
//   async function getInitialData(){
//     let initialData = [];
//     let response  = await reqGET(); 
//     if(response.length===0){
//         return [];
//     }
//     else{
//         for(const vals of Object.values(response)){
//             initialData.push(vals);
//     }
//     console.log(initialData)
//     setISItems(initialData)
    
// }}

// useEffect(()=>{getInitialData()},[])

  console.log('----------------------------------------------');
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  useEffect(() => {dispatchCartAction({type: "RELOAD",})},[])
  

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_CART_ITEM", item: item });
  };
  
  const ReduceItemHandler = (item) => {
    dispatchCartAction({ type:"REDUCE_ITEM_BY_ONE", item: item})
  }

  const removeItemFromCartHandler = (item) => {
    //HAVE TO CODE FOR REMOVE ITEM

    dispatchCartAction({ type: "REMOVE_CART_ITEM", item: item });
  };

  const purchaseItemCartHandler = (item) => {
    dispatchCartAction({ type: "PURCHASE", item: item });
  };

  const histroy = useHistory();
  let [token, setcartitems] = useState(localStorage.getItem("token"));

  const checkStatus = !!token;

  const addItemToCartHandler1 = (token1) => {
    setcartitems(token1);
  };
  const logoutHandler = () => {
    setcartitems(null);
    histroy.replace("/auth");
    localStorage.removeItem("token");
  };

  const cartContext = {
    items: cartState.items,
    // items: isItems,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    reduceItemByOne: ReduceItemHandler,
    removeItem: removeItemFromCartHandler,
    purchaseItem: purchaseItemCartHandler,
    items01: token,
    isisLoggedIn: checkStatus,
    logIn: addItemToCartHandler1,
    logOut: logoutHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

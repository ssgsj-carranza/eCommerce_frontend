
//declare states that will be used
//reducer takes in state and action to perform operations on the state
export const initialState = {
    shoppingcart:[],
    user: null
};

export const shoppingCartTotal = (shoppingcart) =>
    shoppingcart?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {
    switch (action.type) {
        case "SET_USER": 
            return {
                ...state,
                user: action.user
            }
        case "ADD_TO_SHOPPINGCART":
            return {
                ...state, 
                shoppingcart: [...state.shoppingcart, action.item]
            };
        case 'REMOVE_FROM_SHOPPINGCART':
            let newShoppingCart  = [...state.shoppingcart];
            const index = state.shoppingcart.findIndex((cartItem) => cartItem.id === action.id);
            if(index >= 0) {
                //item exist in the basket, remove it
                newShoppingCart.splice(index, 1) 
            } else {
                console.warn (
                    `Can't remove product{id: ${action.id}} as it is not in the shopping cart`
                );
            }
            return{
                ...state,
                shoppingcart: newShoppingCart
            };
        default:
            return state;
    }
};
export default reducer
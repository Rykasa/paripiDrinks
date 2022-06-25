export interface Cocktail{
  idDrink: string;
  strDrink: string;
  price?: string;
  strDrinkThumb: string;
  amount?: number;
}

export enum Actions{
  LOADING = 'LOADING',
  DISPLAY_ITEMS = 'DISPLAY_ITEMS',
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  GET_TOTAL = 'GET_TOTAL',
}

interface ActionType{
  type: Actions;
  payload?: any;
}

export interface StateType{
  isLoading: boolean;
  amount: number;
  total: number;
  cocktails: Cocktail[];
  cart: Cocktail[];
}

export function reducer(state: StateType, action: ActionType){
  const { type, payload } = action
  switch (type){
    case Actions.DISPLAY_ITEMS:
      return {
        ...state,
        cocktails: payload, isLoading: false,
      }
    case Actions.LOADING:
      return {
        ...state,
        isLoading: true,
      }
    case Actions.ADD_ITEM_TO_CART:
      return {
        ...state,
        cart: [...state.cart, payload]
      }
    case Actions.GET_TOTAL:
      let { total, amount}  = state.cart.reduce((cartTotal, cartItem) =>{
        const { price, amount } = cartItem
        if(price && amount){
          const parsedPrice = parseFloat(price)
          const itemTotal = parsedPrice * amount

          cartTotal.total += itemTotal
          cartTotal.amount += amount
          return cartTotal
        }
        return cartTotal
      }, { total: 0, amount: 0 })
      total = parseFloat(total.toFixed(2))
      return {
        ...state,
        total,
        amount,
      }
    default:
      throw new Error('no match')
  }
}
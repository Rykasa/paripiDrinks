interface Cocktail{
  idDrink: string;
  strDrink: string;
  price?: string;
  strDrinkThumb: string;
  amount?: number;
}

export enum Actions{
  LOADING = 'LOADING',
  DISPLAY_ITEMS = 'DISPLAY_ITEMS',
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART'
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
    default:
      throw new Error('no match')
  }
}
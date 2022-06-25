import { createContext, ReactNode, useEffect, useReducer } from "react";
import { Actions, Cocktail, reducer, StateType } from "../utils/reducer";
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

interface CartContextProviderProps{
  children: ReactNode;
}

interface CartContextData{
  state: StateType
  addItemToCart: (item: Cocktail) => void
  getTotal: () => void
}

export const CartContext = createContext({} as CartContextData)

const initialState: StateType = {
  isLoading: false,
  amount: 0,
  total: 0,
  cocktails: [],
  cart: [],
}

export function CartContextProvider({children}: CartContextProviderProps){
  const [state, dispatch] = useReducer(reducer, initialState)

    function addItemToCart(item: Cocktail){
      dispatch({ type: Actions.ADD_ITEM_TO_CART, payload: item })
    }

    function getTotal(){
      dispatch({ type: Actions.GET_TOTAL })
    }

    async function getAllCocktails(){
      try{
        dispatch({ type: Actions.LOADING })
        const response = await fetch(url)
        const data = await response.json()
        const { drinks } = data
        dispatch({ type: Actions.DISPLAY_ITEMS, payload: drinks })
      }catch(error){
        console.log(error)
      }
    }

  useEffect(() =>{
    getAllCocktails()
  }, [])

  return(
    <CartContext.Provider value={{
      state,
      addItemToCart,
      getTotal
    }}>
      {children}
    </CartContext.Provider>
  )
}
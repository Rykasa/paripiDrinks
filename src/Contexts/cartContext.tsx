import { createContext, ReactNode, useEffect, useReducer } from "react";
import { Actions, reducer, StateType } from "../utils/reducer";
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

interface CartContextProviderProps{
  children: ReactNode;
}

interface CartContextData{
  state: StateType
}

export const CartContext = createContext({} as CartContextData)

const initialState: StateType = {
  isLoading: false,
  amount: 0,
  total: 0,
  cocktails: []
}

export function CartContextProvider({children}: CartContextProviderProps){
  const [state, dispatch] = useReducer(reducer, initialState)

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
      state
    }}>
      {children}
    </CartContext.Provider>
  )
}
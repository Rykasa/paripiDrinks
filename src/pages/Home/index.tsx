import { useEffect } from "react"
import { Cocktail } from "../../components/Cocktail"
import { Loading } from "../../components/Loading"
import { useCart } from "../../hooks/useCartContext"
import * as C from './styles'
export function Home(){
  const { state, getTotal } = useCart()

  useEffect(() =>{
    if(state){
      getTotal()
    }
  }, [state?.cart])

  return(
    <C.Container>
      <C.Main>
        <C.MainCenter className="center">
          <C.Heading>Let's <strong>party</strong></C.Heading>
          <C.SubHeading>All your favorite cocktails</C.SubHeading>
          <C.CocktailsDiv className="cocktails-container">
            {state?.isLoading && <Loading />}
            {state?.cocktails.length > 0 && !state.isLoading && (
              state.cocktails.map((cocktail) =>{
                const { idDrink, strDrink, strDrinkThumb } = cocktail
                return(
                  <Cocktail key={idDrink} item={ {idDrink, strDrink, strDrinkThumb} } />
                )
              })
            )}
            {state?.haveFailed && !state?.isLoading && (
              <C.ErrorMessage>Something went wrong. Please try Later.</C.ErrorMessage>
            )}
          </C.CocktailsDiv>
        </C.MainCenter>
      </C.Main>
    </C.Container>
  )
}
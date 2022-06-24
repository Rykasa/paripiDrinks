import { useEffect, useState } from "react"
import { Cocktail } from "../../components/Cocktail"
import * as C from './styles'
//www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
export function Home(){
  const [list, setList] = useState([])
  async function getAllCocktails(){
    try{
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      const { drinks } = data
      setList(drinks)
    }catch(error){
      console.log(error)
    }
  }
  useEffect(() =>{
    getAllCocktails()
  }, [])
  return(
    <C.Container>
      <C.Main>
        <C.MainCenter className="center">
          <C.Heading>Let's <strong>party</strong></C.Heading>
          <C.SubHeading>All your favorite cocktails</C.SubHeading>
          <C.CocktailsDiv className="cocktails-container">
              {list.map((item) =>{
                const { idDrink, strDrink, strDrinkThumb } = item
                return(
                  <Cocktail key={idDrink} item={ {idDrink, strDrink, strDrinkThumb} } />
                )
              })}
          </C.CocktailsDiv>
        </C.MainCenter>
      </C.Main>
    </C.Container>
  )
}
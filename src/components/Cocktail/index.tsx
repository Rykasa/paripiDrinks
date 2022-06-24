import * as C from './styles'
import { FaShoppingBag, FaShoppingCart } from 'react-icons/fa'

interface CocktailProps{
  item: {
    idDrink: string;
    strDrink: string; 
    strDrinkThumb: string;
  }
}

export function Cocktail({ item }: CocktailProps){
  const { idDrink: id, strDrink: title, strDrinkThumb: url } = item
  return(
    <C.Container>
      <C.ImageWrap>
        <C.IconWrap>
          <FaShoppingCart className="cart-icon" />
        </C.IconWrap>
        <C.Image src={url} alt={title} />
      </C.ImageWrap>
      <C.InfoDiv className="info">
        <C.Title>{title}</C.Title>
        <C.Price>$ 25</C.Price>
      </C.InfoDiv>
    </C.Container>
  )
}
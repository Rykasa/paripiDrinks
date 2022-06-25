import { Minus, Plus, X } from 'phosphor-react'
import { useCart } from '../../hooks/useCartContext';
import { Cocktail } from '../../utils/reducer'
import * as C from './styles'

interface CartItemProps{
  item: Cocktail;
}

export function CartItem({ item }: CartItemProps){
  const { 
    idDrink: id, 
    strDrink: title, 
    strDrinkThumb: url, 
    amount, 
    price 
  } = item

  const { removeItemFromCart, changeItemAmount } = useCart()

  return(
    <C.Item>
      <C.ImageWrap>
        <C.Image src={url} alt={title} />
      </C.ImageWrap>
      <C.ItemInfo>
        <C.Title>{title}</C.Title>
        <C.Amount>{amount}</C.Amount>
        <C.Price>$ {price}</C.Price>
      </C.ItemInfo>
      <C.ButtonsWrap>
        <C.RemoveButton
          type="button"
          onClick={() => removeItemFromCart(id)}
        >
          <X />
        </C.RemoveButton>
        <C.IncreaseButton
          type="button"
          onClick={() => changeItemAmount(id, 'increase')}
        >
          <Plus />
        </C.IncreaseButton>
        <C.DecreaseButton
          type="button"
          onClick={() => changeItemAmount(id, 'decrease')}
        >
          <Minus />
        </C.DecreaseButton>
      </C.ButtonsWrap>
    </C.Item>
  )
}
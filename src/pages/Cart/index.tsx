import { useEffect } from 'react'
import { CartItem } from '../../components/CartItem'
import { useCart } from '../../hooks/useCartContext'
import * as C from './styles'

export function Cart(){
  const { state, getTotal } = useCart()

  return(
    <C.Container>
      <C.Main>
        <C.MainCenter>
          <C.Heading>Your Bag</C.Heading>
          <C.List>
            {state?.cart.map((item) =>{
              const { idDrink } = item
              return(
                <CartItem key={idDrink} item={item} />
              )
            })}
          </C.List>
          <C.InfoDiv>
            <C.InfoTitle>Total</C.InfoTitle>
            {state ? (
              <C.InfoTotal><span>$</span> {state.total}</C.InfoTotal>
            ) : (
              <C.InfoTotal><span>$</span> 0</C.InfoTotal>
            )}
          </C.InfoDiv>
          <C.Button>proceed to payment</C.Button>
        </C.MainCenter>
      </C.Main>
    </C.Container>
  )
}
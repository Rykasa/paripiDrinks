import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartItem } from '../../components/CartItem'
import { useCart } from '../../hooks/useCartContext'
import * as C from './styles'

export function Cart(){
  const { state, getTotal } = useCart()
  const navigate = useNavigate()

  useEffect(() =>{
    if(state){
      getTotal()
    }
  }, [state?.cart])

  function handleClick(){
    if(state.cart.length < 1){
      return
    }else{
      navigate('/')
    }
  }

  return(
    <C.Container>
      <C.Main>
        <C.MainCenter>
          <C.Heading>Your Bag</C.Heading>
          <C.List>
            {state?.cart.length > 0 ? (
              state.cart.map((item) =>{
                const { idDrink } = item
                return(
                  <CartItem key={idDrink} item={item} />
                )
              })
            ) : (
              <C.EmptyTitle>Empty list</C.EmptyTitle>
            )}
          </C.List>
          <C.InfoDiv>
            <C.InfoTitle>Total</C.InfoTitle>
            {state ? (
              <C.InfoTotal><span>$</span> {state.total}</C.InfoTotal>
            ) : (
              <C.InfoTotal><span>$</span> 0</C.InfoTotal>
            )}
          </C.InfoDiv>
          <C.Button
            type="button"
            onClick={handleClick}
            disabled={state?.cart.length < 1}
          >
            proceed to payment</C.Button>
        </C.MainCenter>
      </C.Main>
    </C.Container>
  )
}
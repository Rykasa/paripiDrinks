import { CartItem } from '../../components/CartItem'
import * as C from './styles'

export function Cart(){
  return(
    <C.Container>
      <C.Main>
        <C.MainCenter>
          <C.Heading>Your Bag</C.Heading>
          <C.List>
            <CartItem />
            <CartItem />
          </C.List>
          <C.InfoDiv>
            <C.InfoTitle>Total</C.InfoTitle>
            <C.InfoTotal><span>$</span> 45.24</C.InfoTotal>
          </C.InfoDiv>
          <C.Button>proceed to payment</C.Button>
        </C.MainCenter>
      </C.Main>
    </C.Container>
  )
}
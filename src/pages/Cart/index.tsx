import { Minus, Plus, PlusCircle, X } from 'phosphor-react'
import * as C from './styles'

export function Cart(){
  return(
    <C.Container>
      <C.Main>
        <C.MainCenter>
          <C.Heading>Your Bag</C.Heading>
          <C.List>
            <C.Item>
              <C.ImageWrap>
                <C.Image src="" alt="" />
              </C.ImageWrap>
              <C.ItemInfo>
                <C.Title>item 1</C.Title>
                <C.Amount>2</C.Amount>
                <C.Price>$ 17.32</C.Price>
              </C.ItemInfo>
              <C.ButtonsWrap>
                <C.CloseButton>
                  <X />
                </C.CloseButton>
                <C.IncreaseButton>
                  <Plus />
                </C.IncreaseButton>
                <C.DecreaseButton>
                  <Minus />
                </C.DecreaseButton>
              </C.ButtonsWrap>
            </C.Item>
            <C.Item>item 2</C.Item>
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
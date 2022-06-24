import { Minus, Plus, X } from 'phosphor-react'
import * as C from './styles'

export function CartItem(){
  return(
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
  )
}
import { FaCcMastercard, FaCcVisa } from 'react-icons/fa'
import * as C from './styles'

export function CreditCard(){
  return(
    <C.container>
      <C.Logo>
        <FaCcMastercard />
      </C.Logo>
      <C.Number>1111 1111 1111 1111</C.Number>
      <C.InfoDiv>
        <C.Holder>Kaguya</C.Holder>
        <C.ExpiryDate>05/23</C.ExpiryDate>
      </C.InfoDiv>
    </C.container>
  )
}
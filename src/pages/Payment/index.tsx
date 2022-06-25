import { Plus } from "phosphor-react";
import { CreditCard } from "../../components/CreditCard";
import * as C from './styles'

export function Payment(){
  return(
    <C.Container>
      <C.Heading>Payment</C.Heading>
      <C.Center>
        <C.Title>saved cards</C.Title>
        <C.CardWrapper>
          <CreditCard />
        </C.CardWrapper>
        <C.AddButton>
          new card
          <Plus />
        </C.AddButton>
        <C.PayButton>Pay</C.PayButton>
      </C.Center>
    </C.Container>
  )
}
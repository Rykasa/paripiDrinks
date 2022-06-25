import { useEffect, useMemo } from 'react';
import { FaCcMastercard, FaCcVisa } from 'react-icons/fa'
import { Card } from '../../utils/reducer'
import * as C from './styles'

interface creditCardProps{
  item: Card;
}

const CARDS = {
  visa: '^4',
  mastercard: '^5[1-5]', //first digit 5 , 2nd digit from 1-5 ..
  discover: '^6011',
  unionpay: '^62',
};

export function CreditCard({ item }: creditCardProps){
  const { cardNumber, cardholder, cvv, month, year, logo } = item

   const cardType = (cardNumber: string) => {
    const number = cardNumber;
    let re;
    for (const [card, pattern] of Object.entries(CARDS)) {
      re = new RegExp(pattern);
      if (number.match(re) != null) {
        console.log(card)
        return card;
      }
    }

    return 'visa'; // default type
  };

  const useCardType = useMemo(() => {
    return cardType(cardNumber);
  }, [cardNumber]);

  console.log(useCardType)

  return(
    <C.container>
      <C.Logo>
        <FaCcMastercard />
      </C.Logo>
      <C.Number>{cardNumber}</C.Number>
      <C.InfoDiv>
        <C.Holder>{cardholder}</C.Holder>
        <C.ExpiryDate>{month && month + '/'}{year.slice(2, 4)}</C.ExpiryDate>
      </C.InfoDiv>
    </C.container>
  )
}
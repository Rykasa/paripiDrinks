import { ReactNode, useEffect, useState } from 'react';
import { FaCcAmex, FaCcDinersClub, FaCcDiscover, FaCcJcb, FaCcMastercard, FaCcVisa } from 'react-icons/fa'
import { useCart } from '../../hooks/useCartContext';
import { Card } from '../../utils/reducer'
import * as C from './styles'

interface creditCardProps{
  item: Card;
  id?: number;
}

const CARDS = {
  visa: '^4',
  mastercard: '^5[1-5]',
  discover: '^6011|65',
  unionpay: '^62',
  dinersClub: '^3[6|8]',
  jcb: '^35',
  amex: '^34|37',
};

type cardtype = {
  type: string
  icon: ReactNode
}

const CardIcon: cardtype[] = [
  {
    type: 'visa',
    icon: <FaCcVisa />
  },
  {
    type: 'mastercard',
    icon: <FaCcMastercard />
  },
  {
    type: 'dinersClub',
    icon: <FaCcDinersClub />
  },
  {
    type: 'discover',
    icon: <FaCcDiscover />
  },
  {
    type: 'jcb',
    icon: <FaCcJcb />
  },
  {
    type: 'amex',
    icon: <FaCcAmex />
  },
]

export function CreditCard({ item, id }: creditCardProps){
  const { cardNumber, cardholder, cvv, month, year, isSelected } = item
  const [especificCardType, setEspecificCardType] = useState('')
  const { selectCard, state } = useCart()

   function checkCardType(cardNumber: string){
    let re
    for (const [card, pattern] of Object.entries(CARDS)) {
      re = new RegExp(pattern);
      if (cardNumber.match(re) != null) {
        return card;
      }
    }
    return 'visa'; // default type
  };

  useEffect(() => {
   setEspecificCardType(checkCardType(cardNumber));
  }, [cardNumber]);

  const especificIcon = CardIcon.filter((item) => item.type === especificCardType)

  return(
    <C.container onClick={() => selectCard(id!)} isSelected={isSelected}>
      <C.Logo>
        {especificIcon[0]?.icon}
      </C.Logo>
      <C.Number>
        {cardNumber.split('', 4).slice(0, 4).join('') + ' ' + cardNumber.split('', 8).slice(4, 8).join('') + ' ' + cardNumber.split('', 12).slice(8, 12).join('') + ' ' + cardNumber.split('', 16).slice(12, 16).join('') }
      </C.Number>
      <C.InfoDiv>
        <C.Holder>{cardholder.toLowerCase().split(' ').splice(0, 2).join(' ')}</C.Holder>
        <C.ExpiryDate>{month && month + '/'}{year.slice(2, 4)}</C.ExpiryDate>
      </C.InfoDiv>
    </C.container>
  )
}
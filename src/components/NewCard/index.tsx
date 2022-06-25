import { X } from 'phosphor-react';
import { useState } from 'react';
import { useCart } from '../../hooks/useCartContext';
import { CreditCard } from '../CreditCard'
import * as C from './styles'

const monthsArray = Array.from({ length: 12 }, (x, i) =>{
  const month = i + 1;
  return month <= 9 ? '0' + month : month
})
const currentYear = new Date().getFullYear()
const yearsArray = Array.from({ length: 12 }, (x, i) => currentYear + i)

export function NewCard(){
  const { toggleModal } = useCart()

  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [cvv ,setCvv] = useState('')

  return(
    <C.Container>
      <C.Center>
        <C.CloseButton
          type="button"
          onClick={toggleModal}
        >
          <X />
        </C.CloseButton>
        <C.Card>
          <CreditCard item={{ cardNumber: number, cardholder: name, month, year, cvv }} />
          
        </C.Card>
        <C.CardInfo>
          <C.Form>
            <C.Label htmlFor="card-number-field">
              <C.LabelTitle>card number</C.LabelTitle>
              <C.Input 
                type="text" 
                name="card-number-field" 
                maxLength={16}
                value={number}
                pattern='/^a/'
                onChange={e => setNumber(e.target.value)}
              />
            </C.Label>
            <C.Label htmlFor="cardholder-field">
              <C.LabelTitle>Cardholder name</C.LabelTitle>
              <C.Input 
                type="text" 
                name="cardholder-field" 
                maxLength={25}
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </C.Label>
            <C.DateInfo>
              <C.Label htmlFor="expiry-date-field">
                <C.LabelTitle>expiry date <span>(MM/YY)</span></C.LabelTitle>
                <C.ExpiryDateWrap>
                  <C.Select 
                    name="expiry-date-field"
                    value={month}
                    onChange={e => setMonth(e.target.value)}
                  >
                    <option value="" disabled>Month</option>
                    {monthsArray.map((value, index) =>{
                      return(
                        <option key={index} value={value}>
                          {value}
                        </option>
                      )
                    })}
                  </C.Select>
                  <C.Select 
                    name="expiry-date-year"
                    value={year}
                    onChange={e => setYear(e.target.value)}
                  >
                    <option value="" disabled>Year</option>
                    {yearsArray.map((value, index) => {
                      return(
                        <option key={index} value={value}>
                          {value}
                        </option>
                      )
                    })}
                  </C.Select>
                </C.ExpiryDateWrap>
              </C.Label>
              <C.Label htmlFor="cvv-field">
                <C.LabelTitle>CVV</C.LabelTitle>
                <C.Input type="password" name="cvv-field" autoComplete='off' maxLength={3} />
              </C.Label>
            </C.DateInfo>
            <C.Button type="button">Done</C.Button>
          </C.Form>
        </C.CardInfo>
      </C.Center>
    </C.Container>
  )
}
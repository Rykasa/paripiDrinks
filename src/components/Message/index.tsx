import { CheckCircle } from 'phosphor-react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCartContext'
import * as C from './styles'

export function Message(){
  const { hideMessage } = useCart()
  const navigate = useNavigate()

  useEffect(() =>{
    const timeout = setTimeout(() =>{
      hideMessage()
      navigate('/')
    }, 3000)
    return () => clearTimeout(timeout)
  }, [])

  return(
    <C.Container>
      <C.center>
        <C.Content>
          <C.Title>Payment</C.Title>
          <C.IconWrap>
            <CheckCircle />
          </C.IconWrap>
          <C.Title>Successful</C.Title>
        </C.Content>
      </C.center>
    </C.Container>
  )
}
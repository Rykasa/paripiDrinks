import { CheckCircle } from 'phosphor-react'
import { useEffect } from 'react'
import { useCart } from '../../hooks/useCartContext'
import * as C from './styles'

export function Message(){
  const { showMessage, state, hideMessage } = useCart()

  useEffect(() =>{
    const timeout = setTimeout(() =>{
      hideMessage()
    }, 3000)
    return () => clearTimeout(timeout)
  }, [])

  return(
    <C.Container>
      <C.center>
        <C.Content>
          <C.Title>transação</C.Title>
          <C.IconWrap>
            <CheckCircle />
          </C.IconWrap>
          <C.Title>sucessful</C.Title>
        </C.Content>
      </C.center>
    </C.Container>
  )
}
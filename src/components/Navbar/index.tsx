import { BagSimple } from 'phosphor-react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCartContext'
import * as C from './styles'

export function Navbar(){
  const navigate = useNavigate()
  const { state } = useCart()
  
  function handleClick(){
    navigate('/cart')
  }

  return(
    <C.Nav>
      <C.NavCenter>
        <Link to="/">
          <C.Logo><span>Paripi</span>Drinks</C.Logo>
        </Link>
        <C.Button 
          type="button"
          onClick={handleClick}
        >
          {state ? (
            <span>{state.amount}</span>
          ) : (
            <span>0</span>
          )}
          <BagSimple size={30} />
        </C.Button>
      </C.NavCenter>
    </C.Nav>
  )
}
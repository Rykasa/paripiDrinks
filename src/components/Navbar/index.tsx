import { BagSimple } from 'phosphor-react'
import { Link, useNavigate } from 'react-router-dom'
import * as C from './styles'

export function Navbar(){
  const navigate = useNavigate()

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
          <span>12</span>
          <BagSimple size={30} />
        </C.Button>
      </C.NavCenter>
    </C.Nav>
  )
}
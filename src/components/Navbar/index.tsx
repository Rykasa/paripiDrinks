import { BagSimple } from 'phosphor-react'
import * as C from './styles'

export function Navbar(){
  return(
    <C.Nav>
      <C.NavCenter>
        <C.Logo><span>Paripi</span>Drinks</C.Logo>
        <C.Button>
          <span>12</span>
          <BagSimple size={30} />
        </C.Button>
      </C.NavCenter>
    </C.Nav>
  )
}
import { useCart } from '../../hooks/useCartContext'
import * as C from './styles'

export function ErrorMessage(){
  const { state } = useCart()
  return(
    <C.Error>
      {state?.errorAlert.messageError}
    </C.Error>
  )
}
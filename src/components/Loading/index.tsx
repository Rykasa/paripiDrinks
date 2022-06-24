import * as C from './styles'

export function Loading(){
  return(
    <C.Container>
      <C.Loader></C.Loader>
      <C.Loader></C.Loader>
      <C.Loader></C.Loader>
    </C.Container>
  )
}
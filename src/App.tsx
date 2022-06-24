import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Order } from './pages/Order'

export function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home /> }  />
      </Routes>
    </BrowserRouter>
  )
}
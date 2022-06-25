import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Cart } from './pages/Cart'
import { Home } from './pages/Home'
import { Order } from './pages/Order'
import { Payment } from './pages/Payment'

export function App(){
  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home /> }  />
        <Route path='/cart' element={<Cart />} />
        <Route path='/payment' element={<Payment />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Order } from './pages/Order'

export function App(){
  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home /> }  />
      </Routes>
    </BrowserRouter>
  )
}
import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import { CartContextProvider } from './Contexts/cartContext'
import { GlobalStyles } from './styles/global'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartContextProvider>
      <GlobalStyles />
      <App />
    </CartContextProvider>
  </React.StrictMode>
)

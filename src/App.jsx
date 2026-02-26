import React from 'react'
import './App.css'
import Cart from './components/Cart'

function App() {
  return (
    <div className='Parents'>
      <Cart user='Mj' age={26} img="https://t3.ftcdn.net/jpg/02/38/98/18/360_F_238981836_FMFYp2asxr8PiaGLiowUk6yElg3B0tp5.jpg"/>
      <Cart user='Ap' age={27} img="https://img.freepik.com/premium-vector/ap-signature-letter-love-logo-with-circle-letter-ap-ap-signature-icon-vector-icon-valentine_930804-5542.jpg"/>
      <Cart user='APMJ' age={29} img="https://www.shutterstock.com/shutterstock/photos/1590211525/display_1500/stock-vector-m-love-j-letter-logo-or-symbol-template-design-1590211525.jpg"/>
     </div>
  )
}

export default App

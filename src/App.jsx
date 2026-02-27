import React from 'react'
import './App.css'
import Cart from './components/Cart'

function App() {
  return (
    <div className='Parents'>
      <Cart brand='Amazon' date="5 day ago" designation="UX/UI Designer" time="Part-Time" exprence="Seiner" price={120} city="Mumbia" img="https://t3.ftcdn.net/jpg/02/38/98/18/360_F_238981836_FMFYp2asxr8PiaGLiowUk6yElg3B0tp5.jpg"/>
      <Cart brand='Google' date="30 day ago" designation="Graphic Designer" time="Part-Time" exprence="Seiner" price={150} city="Kochi" img="https://img.freepik.com/premium-vector/ap-signature-letter-love-logo-with-circle-letter-ap-ap-signature-icon-vector-icon-valentine_930804-5542.jpg"/>
      <Cart brand='Dribble' date="15 day ago" designation="Motion Designer" time="Part-Time" exprence="Seiner" price={75} city="Chennai" img="https://www.shutterstock.com/shutterstock/photos/1590211525/display_1500/stock-vector-m-love-j-letter-logo-or-symbol-template-design-1590211525.jpg"/>
     </div>
  )
}

export default App

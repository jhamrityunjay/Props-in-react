import React from 'react'
import Cart from './Cart';

const Card = () => {
    
    const jobs = [
  {
    brand: "Amazon",
    date: "5 day ago",
    designation: "UX/UI Designer",
    time: "Part-Time",
    exprence: "Senior",
    price: 120,
    city: "Mumbai",
    img: "https://t3.ftcdn.net/jpg/02/38/98/18/360_F_238981836_FMFYp2asxr8PiaGLiowUk6yElg3B0tp5.jpg"
  },
  {
    brand: "Google",
    date: "30 day ago",
    designation: "Graphic Designer",
    time: "Part-Time",
    exprence: "Senior",
    price: 150,
    city: "Kochi",
    img: "https://img.freepik.com/premium-vector/ap-signature-letter-love-logo-with-circle-letter-ap-ap-signature-icon-vector-icon-valentine_930804-5542.jpg"
  },
  {
    brand: "Dribble",
    date: "15 day ago",
    designation: "Motion Designer",
    time: "Part-Time",
    exprence: "Senior",
    price: 75,
    city: "Chennai",
    img: "https://www.shutterstock.com/shutterstock/photos/1590211525/display_1500/stock-vector-m-love-j-letter-logo-or-symbol-template-design-1590211525.jpg"
  }
];

  return (
<>
    { jobs.map(function(elem,idx){
        
        return <div key={idx}>
         <Cart brand={elem.brand} date={elem.date} designation={elem.designation} time={elem.time} exprence={elem.exprence} price={elem.price} city={elem.city} img={elem.img} />
         </div>
    })
     
    }
  </>
  )
}

export default Card

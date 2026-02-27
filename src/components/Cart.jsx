import React from 'react'

const Cart = (props) => {
 
  return (
    <>
    <div className='Card' >
     <div className='Top-Part' >
      <img src={props.img} alt="" />
      <p>Save</p>
     </div>

     <div className="mid-part">
      <h2>{props.brand} <span>{props.date}</span> 
        </h2>
      <h1> {props.designation} </h1>
      <div className='mid-part-button'>
       <button>{props.time}</button>
       <button>{props.exprence}</button>
      </div>
     </div>
      <hr />
     <div className="bottom-part">
      <div className='bottom-part-para'>
        <h2>${props.price} /hr</h2>
        <p>{props.city} India</p>
      </div>
      <div className='bottom-part-button'>
         <button>Apply Now</button>
      </div>
     </div>
</div>
     </>
  )
}

export default Cart

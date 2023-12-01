import React from 'react'
import { useState } from 'react'

function Starter() {
    const [starter, setStarter] = useState([
        {
          id:1,
          item: "Chicken Chimichuri",
          price: "₱109",
        
        },
        {
          id:2,
          item: "Chicken Fingers",
          price: "₱109",
        },
        {
          id:3,
          item: "Nachos",
          price: "₱129",
        },
        {
          id:4,
          item: "Quesadilla",
          price: "₱129",
        },
        {
          id:1,
          item: "Mojos",
          price: "₱109",
        },
        {
          id:1,
          item: "French Fries",
          price: "₱79",
        },
      ])
  return (
    <div>
        <>
        <div className="text-center font-serif text-4xl text-yellow-600 py-5">
            <p className="">Starter</p>
          </div>
          {starter.map((starter)=>(
          <>
          <div className="text-start py-2 px-2 text-white grid grid-cols-2 gap-2">
             <div className="text-start">
              <p>{starter.item}</p>
             </div>
             <div className="text-center">
              <p>{starter.price}</p>
             </div>             
            </div>
            </>
            ))}
    </>
    </div>
  )
}

export default Starter
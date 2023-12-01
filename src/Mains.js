import React from 'react'
import { useState } from 'react'
function Mains() {
    const [mains,setMains] = useState([
        {
            id:1,
            item:"Caramelized Spamsilog",
            price:"₱99"
        },
        {
            id:2,
            item:"Cheesy Bacsilog",
            price:"₱99"
        },
        {
            id:3,
            item:"Buttermilk Chicken",
            price:"₱109"
        },
        {
            id:4,
            item:"Chicken Parmigiana",
            price:"₱159"
        },
        {
            id:5,
            item:"Pork Tonkatsu",
            price:"₱159"
        },
        {
            id:6,
            item:"Beef Yakiniku",
            price:"₱159"
        },
    ])
  return (
    <div>
        <div className="text-center font-serif text-4xl text-yellow-600 py-5">
    <p>Mains</p>
  </div>
  {mains.map((mains)=>(
  <div className="text-start py-2 px-2 text-white grid grid-cols-2 gap-2">
     <div className="text-start">
     <p>{mains.item}</p>
     </div>
     <div className="text-center">
     <p>{mains.price}</p>
     </div>
     
    </div>
    ))}
    </div>
    
  )
}

export default Mains
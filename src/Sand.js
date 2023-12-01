import React from 'react'
import { useState } from 'react'

function Sand() {
    const [sw, setSw] = useState([
        {
            id:1,
            item:"Alamat's Burger",
            price:"₱139"
        },
        {
            id:2,
            item:"Bacon Omelette",
            price:"₱89"
        },
        {
            id:3,
            item:"Chicken Ceasar Wrap",
            price:"₱119"
        },
        {
            id:4,
            item:"Marvin's Chicken Burger",
            price:"₱129"
        },
    ])
  return (
    <div>
        <div className="text-center font-serif text-4xl text-yellow-600  py-5">
            <p>Sandwich</p>
          </div>
        {sw.map((sw)=> (
        <>
         
          <div className="text-start py-2 px-2 text-white grid grid-cols-2 gap-2">
             <div className="text-start">
             <p>{sw.item}</p>
             
             </div>
             <div className="text-center">
             <p>{sw.price}</p>
             
             </div>
             
            </div>
            </>
            ))}
    </div>
  )
}

export default Sand
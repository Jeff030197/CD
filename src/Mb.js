import React from 'react'
import { useState } from 'react'

function Mb() {
    const[mb,setMb] = useState([
        {
            id:1,
            item:"Strawberry Frappe",
            grande:"₱145",
            venti:"₱160",
        },
        {
            id:2,
            item:"Oreo Overload",
            grande:"₱145",
            venti:"₱160",
        },
        {
            id:3,
            item:"Matcha Frappe",
            grande:"₱145",
            venti:"₱160",
        },
        {
            id:4,
            item:"Triple Chocolate",
            grande:"₱155",
            venti:"₱170",
        },
        {
            id:5,
            item:"Kitkat Overload",
            grande:"₱155",
            venti:"₱170",
        },
    ])
  return (
    <div>
      <div className="text-center font-serif text-4xl text-yellow-600 py-5 ">
            <p>Frappe</p>
          </div>
          <div>
            <p className="text-center font-serif text-2xl text-yellow-600 py-5">Milk Based</p>
            <div className=" grid grid-cols-3 gap-2 text-center text-white font-serif ">
              <div></div>
              <div>Grande</div>
              <div>Venti</div>
            </div>
           {mb.map((mb)=>(
            <div className=" grid grid-cols-3 gap-2 text-center text-white font-serif py-3 ">
            <div className='text-start px-2'>{mb.item}</div>
            <div>{mb.grande}</div>
            <div>{mb.venti}</div>
            </div>
            ))}
           
          </div>
    </div>
  )
}

export default Mb
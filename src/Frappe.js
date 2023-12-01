import React from 'react'
import { useState } from 'react'

function Frappe() {
    const [frap, setFrap] = useState([
        {
            id:1,
            item:"Caramel Freeze",
            grande:"₱145",
            venti:"₱160",
        },
        {
            id:2,
            item:"Mocha Frappe",
            grande:"₱145",
            venti:"₱160",
        },
        {
            id:3,
            item:"Double Mocha Frappe",
            grande:"₱145",
            venti:"₱160",
        },
        {
            id:4,
            item:"Mochaccino",
            grande:"₱155",
            venti:"₱170",
        },
        {
            id:5,
            item:"Java Chips",
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
            <p className="text-center font-serif text-2xl text-yellow-600 py-5">Coffee Based</p>
            <div className=" grid grid-cols-3 gap-2 text-center text-white font-serif ">
              <div></div>
              <div>Grande</div>
              <div>Venti</div>
            </div>
            {frap.map((frap)=>(
            <div className=" grid grid-cols-3 gap-2 text-center text-white font-serif py-3 ">
            <div className='text-start px-2'>{frap.item}</div>
            <div>{frap.grande}</div>
            <div>{frap.venti}</div>
            </div>
            ))}
          </div>
    </div>
  )
}

export default Frappe
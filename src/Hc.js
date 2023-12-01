import React from 'react'
import { useState } from 'react'


function Hc() {
    const [hc, setHc] = useState([
        {
            id:1,
            item:"Americano",
            short:"₱80",
            tall:"₱95",
        },
        {
            id:2,
            item:"Cappuccino",
            short:"₱90",
            tall:"₱110",
        },
        {
            id:3,
            item:"Caramel Macchiato",
            short:"₱120",
            tall:"₱140",
        },
        {
            id:4,
            item:"Cafe Mocha",
            short:"₱130",
            tall:"₱150",
        },
        {
            id:5,
            item:"Double Mocha",
            short:"₱130",
            tall:"₱150",
        },
        {
            id:6,
            item:"Mochadusk",
            short:"₱130",
            tall:"₱150",
        },
    ])
  return (
    <div>
          <div>
            <p className="text-center font-serif text-4xl text-yellow-600 py-5 ">Hot Coffee</p>
            <div className=" grid grid-cols-3 gap-2 text-center text-white font-serif ">
              <div></div>
              <div>Short</div>
              <div>Tall</div>
            </div>
           {hc.map((hc)=>(
            <div className=" grid grid-cols-3 gap-2 text-center text-white font-serif py-3 ">
            <div className='text-start px-2'>{hc.item}</div>
            <div>{hc.short}</div>
            <div>{hc.tall}</div>
            </div>
           ))}
           
          </div>
    </div>
  )
}

export default Hc
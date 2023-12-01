import React from 'react'
import { useState } from 'react'

function Ic() {
    const [ic, setIc] = useState([
        {
            id:1,
            item:"Americano",
            grande:"₱80",
            venti:"₱95"
        },
        {
            id:2,
            item:"Café Latte",
            grande:"₱85",
            venti:"₱100"
        },
        {
            id:3,
            item:"Dirty Horchata",
            grande:"₱100",
            venti:"₱120"
        },
        {
            id:4,
            item:"Vanilla Latte",
            grande:"₱100",
            venti:"₱120"
        },
        {
            id:5,
            item:"Salted Caramel",
            grande:"₱100",
            venti:"₱120"
        },
        {
            id:6,
            item:"Spanish Latte",
            grande:"₱120",
            venti:"₱140"
        },
        {
            id:7,
            item:"Caramel Macchiato",
            grande:"₱120",
            venti:"₱140"
        },
        {
            id:5,
            item:"Cafe Mocha",
            grande:"₱130",
            venti:"₱150"
        },
        {
            id:5,
            item:"White Cafe Mocha",
            grande:"₱130",
            venti:"₱150"
        },
        {
            id:5,
            item:"Double Mocha",
            grande:"₱130",
            venti:"₱150"
        },
        {
            id:5,
            item:"Mochadusk",
            grande:"₱130",
            venti:"₱150"
        },

    ])
  return (
    <div> 
    <div>
    <p className="text-center font-serif text-4xl text-yellow-600 py-5 ">Iced Coffee</p>
    <div className="grid grid-cols-3 gap-2 text-center text-white font-serif py-5 ">
      <div></div>
      <div>Grande</div>
      <div>Venti</div>
    </div>
    {ic.map((ic)=>(
    <div className="grid grid-cols-3 gap-10 text-center text-white font-serif py-2">
      <div className='text-start'>{ic.item}</div>
      <div>{ic.grande}</div>
      <div>{ic.venti}</div>
    </div>
    ))}
  </div>
  </div>
  )
}

export default Ic
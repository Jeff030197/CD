import React from 'react'
import { useState } from 'react'

function Nc() {
  const [nc, setNc] = useState([
    {
        id:1,
        item:"Strawberry Horchata",
        grande:"₱100",
        venti:"₱120",
    },
    {
        id:2,
        item:"Mango Fizz",
        grande:"₱120",
        venti:"₱140",
    },
    {
        id:3,
        item:"Sunrise (Pineapple)",
        grande:"₱120",
        venti:"₱140",
    },
    {
        id:4,
        item:"Cahaya (Orange)",
        grande:"₱120",
        venti:"₱140",
    },
    {
        id:5,
        item:"Classic Lemonade",
        grande:"₱110",
        venti:"₱130",
    },
    {
        id:6,
        item:"Ocean Blue",
        grande:"₱110",
        venti:"₱130",
    },
    {
        id:7,
        item:"Matcha",
        grande:"₱120",
        venti:"₱140",
    },
    {
        id:8,
        item:"Chocolate Milk",
        grande:"₱100",
        venti:"₱120",
    },
    {
        id:9,
        item:"Strawberry Milk",
        grande:"₱100",
        venti:"₱120",
    },
    {
        id:10,
        item:"White Chocolate",
        grande:"₱100",
        venti:"₱120",
    },
])
  return (
    <div>
            <p className="text-center font-serif text-4xl text-yellow-600 py-5 ">Non Coffee</p>
              <div className="grid grid-cols-3 gap-2 text-center text-white font-serif py-5">
                <div></div>
                <div>Grande</div>
                <div>Venti</div>
              </div>
              {nc.map((nc)=>(
              <div className=" grid grid-cols-3 gap-2 text-center text-white font-serif py-3 ">                       
            <div className='text-start px-2'> {nc.item}</div>
            <div>{nc.grande}</div>
            <div>{nc.venti}</div>
            </div>
            ))}
    </div>
  )
}

export default Nc
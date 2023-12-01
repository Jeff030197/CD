import {useState} from 'react'

function Ao() {
    const [ao, setAo] = useState([
        {
            id: 1,
            item: "Espresso Shot",
            price: "₱30",
          },
          {
            id: 2,
            item: "Milk",
            price: "₱30",
          },
          {
            id: 3,
            item: "Whipped Cream",
            price: "₱30",
          },
          {
            id: 4,
            item: "Syrup Pump",
            price: "₱30",
          },
          {
            id: 5,
            item: "Chocolate Drizzle",
            price: "₱30",
          },
          {
            id: 6,
            item: "Caramel Drizzle",
            price: "₱30",
          },
    ])
  return (
    <div>
      <div className="text-center font-serif text-4xl text-yellow-600  py-5">
        <p>Add-Ons</p>
      </div>
      {ao.map((ao)=> (
        <>
          <div className="text-start py-2 px-2 text-white grid grid-cols-2 gap-2 font-serif">
            <div className="text-start">
              <p>{ao.item}</p>
            </div>
            <div className="text-center font-serif">
              <p>{ao.price}</p>
            </div>
          </div>
        </>
        ))}
    
    </div>
  )
}

export default Ao
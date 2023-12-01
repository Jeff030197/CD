import React from "react";
import { useState } from "react";

function Pasta() {
  const [pasta, setPasta] = useState([
    {
      id: 1,
      item: "Creamy Carbonara",
      price: "₱129",
    },
    {
      id: 2,
      item: "Tuna Pesto",
      price: "₱149",
    },
    {
      id: 3,
      item: "Meaty Meat Balls",
      price: "₱149",
    },
    {
      id: 4,
      item: "Cajun Chicken Alfredo",
      price: "₱149",
    },
  ]);
  return (
    <div>
      <div className="text-center font-serif text-4xl text-yellow-600  py-5">
        <p>Pasta</p>
      </div>
      {pasta.map((pasta) => (
        <>
          <div className="text-start py-2 px-2 text-white grid grid-cols-2 gap-2 font-serif">
            <div className="text-start">
              <p>{pasta.item}</p>
            </div>
            <div className="text-center font-serif">
              <p>{pasta.price}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default Pasta;

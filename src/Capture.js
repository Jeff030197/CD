import React, { useState, } from "react";
import w1 from "./assets/images/w1.jpg";
import w2 from "./assets/images/w2.jpg";
import w3 from "./assets/images/w3.jpg"
import w4 from "./assets/images/w4.jpg"
import w5 from "./assets/images/w5.jpg"
import w6 from "./assets/images/w6.jpg"
import w7 from "./assets/images/w7.jpg"
import w8 from "./assets/images/w8.jpg"
import w9 from "./assets/images/w9.jpg"
import w10 from "./assets/images/w10.jpg"
import w14 from "./assets/images/w14.jpg"
import w15 from "./assets/images/w15.jpg"
import w16 from "./assets/images/w16.jpg"
import w17 from "./assets/images/w17.jpg"
import w18 from "./assets/images/w18.jpg"
import w19 from "./assets/images/w19.jpg"
import w20 from "./assets/images/w20.jpg"
import w113 from "./assets/images/w113.jpg"
import w21 from "./assets/images/w21.jpg"
import w22 from "./assets/images/22.jpg"
import w23 from "./assets/images/w23.jpg"
import "./Capture.css";
import { Link } from "react-router-dom";


function Capture() {
  const [displayText, setDisplayText] = useState("Are you ready to see magic?");
  const [showImages, setShowImages] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => {
    setClickCount(prevCount => prevCount + 1);

    if (clickCount === 1) {
      setDisplayText("");
      setShowImages(true);
    } else if (displayText === "Are you ready to see magic?") {
      setDisplayText("At Coffe Dusk, we uphold the belief that each moment deserves to be cherished.");
    }
  };

  return (
    <>
    <div className="text-center text-4xl py-5 font-serif ">
        {displayText}
      </div>

      
      <div className="flex justify-center gap-5 ">
      

        {clickCount < 2 && (
          <>
          <button
            id="btn"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleButtonClick}
          >
            Let's Go
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"><Link to ={"/"}>Home</Link> </button>
          
          </>
        )}
        {showImages && (
      <div class="grid grid-cols-3 gap-2 image-grid ">
      <div class="transition hover:-translate-y-1 hover:scale-110 duration-300 fade-in-image fade-out">
        <img src={w1}/>
      </div>
      <div class="transition hover:-translate-y-1 hover:scale-110 duration-300 fade-in-image fade-out">
        <img src={w2}/>
      </div>
      <div class="transition hover:-translate-y-1 hover:scale-110 duration-300 fade-in-image fade-out">
        <img src={w3}/>
      </div>
      <div class="col-span-2 transition hover:-translate-y-1 hover:scale-110 duration-300 fade-in-image fade-out">
        <img src={w4}/>
      </div>
      <div class="flex justify-center items-center h-full transition hover:-translate-y-1 hover:scale-110 duration-300 fade-in-image fade-out">
        <img src={w5} class="object-cover h-full w-full" />
      </div>
      <div class="flex justify-center items-center h-full transition hover:-translate-y-1 hover:scale-110 duration-300 fade-in-image fade-out">
        <img src={w6} class="object-cover h-full w-full" />
      </div>
      <div class="col-span-2 transition hover:-translate-y-1 hover:scale-110 duration-300 fade-in-image fade-out">
        <img src={w7}/>
      </div>
      <div class="transition hover:-translate-y-1 hover:scale-110 duration-300 fade-in-image fade-out">
        <img src={w8}/>
      </div>
      <div class="flex justify-center items-center h-full transition hover:-translate-y-1 hover:scale-110 duration-300 fade-in-image fade-out">
        <img src={w9} class="object-cover h-full w-full"/>
      </div>
      <div class="flex justify-center items-center h-full transition hover:-translate-y-1 hover:scale-110 duration-300 fade-in-image fade-out">
        <img src={w10} class="object-cover h-full w-full"/>
      </div>
      <div class="col-span-2 transition hover:-translate-y-1 hover:scale-110 duration-300 fade-in-image fade-out">
        <img src={w113}/>
      </div>
      <div class="flex justify-center items-center h-full transition hover:-translate-y-1 hover:scale-110 duration-300 fade-in-image fade-out">
        <img src={w14} class="object-cover h-full w-full" />
      </div>
      <div class="flex justify-center items-center h-full transition hover:-translate-y-1 hover:scale-110 duration-300 fade-in-image fade-out">
        <img src={w15} class="object-cover h-full w-full" />
      </div>
      <div class="col-span-2 transition hover:-translate-y-1 hover:scale-110 duration-300 fade-in-image fade-out">
        <img src={w16}/>
      </div>
      <div class="flex justify-center items-center h-full transition hover:-translate-y-1 hover:scale-110 duration-300 fade-in-image fade-out">
        <img src={w17} class="object-cover h-full w-full"/>
      </div>
      <div class="transition hover:-translate-y-1 hover:scale-110 duration-300 fade-in-image fade-out">
        <img src={w18}/>
      </div>
      <div class="flex justify-center items-center h-full transition hover:-translate-y-1 hover:scale-110 duration-300 fade-in-image fade-out">
        <img src={w19} class="object-cover h-full w-full"/>
      </div>
      <div class="col-span-2 transition hover:-translate-y-1 hover:scale-110 duration-300 fade-in-image fade-out">
        <img src={w20}/>
      </div>
      <div class="flex justify-center items-center h-full transition hover:-translate-y-1 hover:scale-110 duration-300 fade-in-image fade-out">
        <img src={w23} class="object-cover h-full w-full" />
      </div>
      <div class="flex justify-center items-center h-full transition hover:-translate-y-1 hover:scale-110 duration-300 fade-in-image fade-out">
        <img src={w22} class="object-cover h-full w-full" />
      </div>
      <div class="col-span-2 transition hover:-translate-y-1 hover:scale-110 duration-300 fade-in-image fade-out">
        <img src={w21}/>
      </div>
      <div/>
      <div className="flex justify-center py-5 ">
        <button className="bg-blue-500 py-2 px-2 rounded-lg hover:bg-blue-700"><Link to ={"/"}>Home</Link> </button>
      </div>
    
    </div>
    
     
        )}
        
      </div>
      

    </>
  );
}

export default Capture;

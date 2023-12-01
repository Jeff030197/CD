import React from "react";
import { Link } from "react-router-dom";
import Sand from "./Sand";
import Starter from "./Starter";
import Pasta from "./Pasta";
import Mains from "./Mains";
import Frappe from "./Frappe";
import Mb from "./Mb";
import Ic from "./Ic";
import Nc from "./Nc";
import Hc from "./Hc";
import Ao from './Ao'
import Logo from "./assets/images/Logo.png"


function Menu() {

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div className=" justify-center flex">
          <p><Link to={"/"}><img src={Logo} alt="logo" /></Link></p>
         
        </div>
        <div>
          <div className="text-yellow-600 text-center mt-5 py-6 bg-neutral-900 text-5xl font-serif ">
            <div className="py-5">
            <p>MENU</p>
            </div>
          </div>
          
        </div>

        <div className="text-center py-5 text-4xl font-serif flex justify-center">
          <p className="py-5">Where Twilight Meets Your Mug </p>
        </div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 font-serif py-2">
        <div className="bg-neutral-900 py-5">
          <Starter/>
            <Sand/>           
        </div>      
        <div className="bg-neutral-900 py-5 font-serif">
        <Pasta/>
        <Mains/>           
        </div>
        <div className="bg-neutral-900 py-5 font-serif">
          <Frappe/>            
        </div>
        <div className="bg-neutral-900 py-5 font-serif">
        <Mb/> 
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 font-serif py-5">
      <div className="bg-neutral-900 py-5 ">
        <Ic/>
      </div>
      <div className="bg-neutral-900 py-5 ">
        <Nc/>
        </div>
        <div className="bg-neutral-900 py-5 ">
          <Hc/>
          <Ao/>
        </div>
      </div>
    </div>
  );
}

export default Menu;

import logo from './assets/images/coffee-house-logo.png';
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-yellow-50 max-w-screen-2xl mx-auto py-14" id="contact">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-screen-xl mx-auto text-brown-700">
    
      <div className="md:order-2 md:col-span-1 flex justify-center">
        <div className="max-w-md text-center">
          <h3 className="font-medium font-serif text-sm md:text-lg mb-2">Store Hours</h3>
          <p className="text-xs md:text-sm">11:00AM to 8:00PM</p>
        </div>
      </div>

      
      <div className="md:col-span-1 flex flex-col items-center md:flex-row md:items-start md:order-3">
        <div className="max-w-md text-center mb-2 md:mb-0">
          <h3 className="font-medium font-serif text-sm md:text-lg mb-2">Contact Us</h3>
          <p className="text-xs md:text-sm mb-2">0997-241-5589</p>
          <p className="text-xs md:text-sm">
            6 Hay Juliano St. Brgy. Sta. Veronica Guimba (Beside Guimba Municipal Hall. Near Landbank)
          </p>
          <div className="md:ml-4 flex justify-center gap-3 py-2">
          <a href= "https://www.instagram.com/coffeeduskofficial?fbclid=IwAR0XzyzKH8jpoEDOeOlQlr_8Kt5XJUjM1P7xV401ezX5K9EApANoqqU3lpI"><FaInstagram className="text-2xl md:text-3xl mb-2 md:mb-0" /></a>
          <a href = "https://www.facebook.com/coffeeduskofficial"><FaFacebook className="text-2xl md:text-3xl" /></a>
        </div>
        </div>
        
      </div>

   
      <div className="md:order-1 md:col-span-1 flex justify-center">
        <div className="max-w-xs text-center">
          <img src={logo} alt="Coffee House logo" className="w-32 h-auto mx-auto" />
          <p className="text-xs md:text-sm mt-3">Your Happy Place.</p>
        </div>
      </div>
    </div>
  </div>
  );
}

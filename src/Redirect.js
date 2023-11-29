import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Wec from "./assets/images/wec.jpg";
import Wec1 from "./assets/images/wec2.jpg";

function Redirect() {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const observer2 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (imageRef1.current) {
      observer1.observe(imageRef1.current);
    }
    if (imageRef2.current) {
      observer2.observe(imageRef2.current);
    }

    return () => {
      if (imageRef1.current) {
        observer1.unobserve(imageRef1.current);
      }
      if (imageRef2.current) {
        observer2.unobserve(imageRef2.current);
      }
    };
  }, []);

  const imageStyle1 = {
    opacity: isVisible ? 1 : 0,
    transition: "opacity 2s ease-in-out" // Adjust the duration and easing as needed
  };

  const imageStyle2 = {
    opacity: isVisible ? 1 : 0,
    transition: "opacity 2s ease-in-out 0.5s" // Adjust the duration, easing, and delay as needed
  };

  return (
    <>
      <div className="py-5">
        <p className="text-center font-serif text-4xl">
          We Capture Every Moment
        </p>
      </div>
      <div className="justify-center py-5 rounded-lg grid grid-cols-2 gap-4">
        <div className="flex justify-end" style={imageStyle1}>
          <img
            src={Wec1}
            className="object-cover h-72 w-72"
            alt="Wec1"
            ref={imageRef1}
          />
        </div>
        <div className="flex justify-start" style={imageStyle2}>
          <img
            src={Wec}
            className="object-cover h-72 w-72"
            alt="Wec"
            ref={imageRef2}
          />
        </div>
      </div>
      <div className="flex justify-center py-5">
        <button className="bg-blue-600 rounded-lg py-2 px-2 text-white font-serif hover:bg-blue-700">
          <Link to={"/Special"}>Have a look</Link>
        </button>
      </div>
    </>
  );
}

export default Redirect;

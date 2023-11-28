import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import * as React from "react";
import Home from "./home";


export default function App() {

	
  return (
	
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
      </Routes>
     
    </>
  );
}

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import * as React from "react";
import Home from "./home";
import Capture from "./Capture"

export default function App() {

	
  return (
	
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Special" element = {<Capture/>}/>
      </Routes>
     
    </>
  );
}

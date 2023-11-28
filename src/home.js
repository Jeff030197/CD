import React from 'react'
import { useState } from 'react';
import Header from './Header'
import Sidebar from './Sidebar';
import About from './About';
import Feature from './Feature';
import ImageSlider from './ImageSlider';
import Footer from './Footer';
import Cx from './Cx';

function Home() {
    const navigation = [
		
		{ name: 'About us', href: '#about' },
		{ name: 'Menu', href: '/menu' },
		{ name: 'Contact us', href: '#contact' }
	]
    
   
    const [sidebarShowing, setSidebarShowing] = useState(false);
    
  return (
    <>
    <Header navigation={navigation} show={setSidebarShowing} />
    <Sidebar navigation={navigation} isShowing={sidebarShowing} show={setSidebarShowing} />
	<About />
    <Feature />
	<ImageSlider />
  <Cx/>
	<Footer />
    </>
  )
}

export default Home
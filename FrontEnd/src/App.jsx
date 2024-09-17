import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import Event from "./pages/Event";
import "./App.css";
import Donation from './pages/Donation'
import Home from './pages/Home' 


function App() {

  return (
 
  <>
      {/* <Navbar/>
      <Event/>
      <Donation/> */}
      {/* <Footer/> */}
      <Home/>

  </>
    

  )

}

export default App;

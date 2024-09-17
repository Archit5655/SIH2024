import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import Home from './pages/home'
import Event from "./pages/Event";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import DonationForm from './pages/Donation'


function App() {
  const [count, setCount] = useState(0);

  return (
 
  <>
      {/* <Navbar/>
      <Home/> */}
      {/* <Event/> */}
      <DonationForm/>
      {/* <Footer/> */}
      

  </>
    

  )

}

export default App;

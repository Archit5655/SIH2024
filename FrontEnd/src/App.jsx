
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import Home from './pages/home'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Event from "./pages/Event";
import "./App.css";


function App() {
  const [count, setCount] = useState(0);

  return (
 
  <>
      <Navbar/>
      <Home/>
      <Event/>
      <Footer/>

  </>
    

  )

}

export default App;

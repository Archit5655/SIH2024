import { useState } from 'react'
import './App.css'
<<<<<<< HEAD
import Testimonial from "./pages/testimonial"
=======
import Navbar from './components/Navbar'
import Footer from './components/footer'
import Home from './pages/home'
import Event from "./pages/Event";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";

>>>>>>> fb0bcb8f060b12b6affb790513413e83cbac8667

function App() {
  const [count, setCount] = useState(0);

  return (
 
  <>
      <Navbar/>
      <Home/>
      {/* <Event/> */}
      <Footer/>

<<<<<<< HEAD

      <h1 className='  text-xl'>GearUp</h1>
      <Testimonial/>
     
    </div>
=======
  </>
    
>>>>>>> fb0bcb8f060b12b6affb790513413e83cbac8667

  )

}

export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Testimonial from "./pages/testimonial"

function App() {
  const [count, setCount] = useState(0)

  return (
  
  <div className=''>


      <h1 className='  text-xl'>GearUp</h1>
      <Testimonial/>
     
    </div>

  )
}

export default App;

import React from 'react'
import './Home.css'
import ImageSlider from '../components/ImageSlider';
import Slider from '../components/AlumniSlider';

const Home = () => {
  return (
    <>
    <div className="container">

<div className="event-photos">
  <ImageSlider/>
</div>

<div className="login-signup">
  <br />
<p>Join Us</p>

<button class="connect-button" onclick="window.location.href='https://www.facebook.com/'" >CONNECT WITH FACEBOOK</button>

<button class="connect-button" onclick="window.location.href='https://www.google.com/'" >CONNECT WITH GOOGLE</button>

<button class="connect-button" onclick="window.location.href='https://www.linkedin.com/'" >CONNECT WITH LINKEDIN</button>

<div class="or">OR</div>

<input type="email" placeholder="Enter your Email..." class="email-input"/>

<button class="submit-button">Submit</button>
</div>

</div>
<div className="alumnis">
  <Slider/>
</div>
    
    </>
    
  )
}

export default Home;
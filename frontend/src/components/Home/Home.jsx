import React from 'react';
import heroimage from "../../assets/heroimage.jpg";
import "./Home.css";
function Home() {
  return (
  <>
    <div className='hero'>
        <div className='hero-content'>
            <div className='hero-heading'>Build a founation<br/>
                 for a life time <br/>
                 of learning</div>
            <div className='hero-desc'>Admissions open</div>
            <div className='hero-button'>Enroll Now</div>
        </div>
        <div className='hero-image' >
            <img src={heroimage} className='hero-img'></img>
        </div>
    </div>
  </>
    
  )
}

export default Home
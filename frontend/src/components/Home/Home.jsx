import React from 'react';
import heroimage from "../../assets/heroimage.jpg";
import "./Home.css";
function Home() {
  return (
  <>
    <div className='hero'>

        <div className='hero-content'>
            <div className='hero-heading'>Build a 
              <br/>founation<br/>
                 for a life time <br/>
                 of learning</div>
            <div className='hero-desc'>Admissions open</div>
            <div className='hero-button'>Enroll Now</div>
        </div>

        <div className='hero-image' >
            <img src={heroimage} className='hero-img'></img>
        </div>

    </div>
    <div>
    <div className='home2'>

        <div className='home2-image' >
            <img src={heroimage} className='home2-img'></img>
        </div>

        <div className='home2-content'>
            <div className='home2-heading'>Why Early <br/>Education Matters</div>
            <div className='home2-desc'>Every child is born with a sense of curiosity and wonder. Nurturing these early passions helps shape confident, capable individuals. At KinderKlay, we create a supportive environment where young minds flourish, laying the groundwork for a bright and promising future.</div>
        </div>
    </div>
    </div>
    <div>
    <div className='home3'>
        <div className='home3-content'>
            <div className='home3-heading'>What We Offer</div>
            <div className='home3-desc'>The KinderKlay’s mission is to provide affordable, high-quality early education and childcare services for working families to ensure every child.</div>
        </div>
    </div>
    </div>
  </>

    
  )
}

export default Home
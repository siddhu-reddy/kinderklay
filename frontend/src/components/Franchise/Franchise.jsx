import React from 'react';
import "./Franchise.css";
import item7 from "../../assets/01.png";
import item8 from "../../assets/02.png";
import item9 from "../../assets/03.png";
import item10 from "../../assets/04.png";

function Franchise() {
  return (
    <div className='main-div'>
      <div className="container1">
        <div className='h1-left'>
          <div className='h1-heading'><h1 className=''>Join Our Play School Franchise for a Thriving Legacy</h1>
          </div>
          <div className='h1-desc'>Early childhood development is a critical period for a child's foundational brain growth, yet its potential and market remain largely untapped, even as millions of Indian parents strive to provide quality preschool education for their children..</div>
        </div>
        
        <div className="right-div">
          <div className="new-form-container">
            <h2 className="new-form-title">Enquire Now</h2>
            <form className="new-enquiry-form">
              <input type="text" placeholder="Your Name*" required />
              <input type="email" placeholder="Email*" required />
              <input type="tel" placeholder="Mobile*" required />
              <input type="text" placeholder="Pin Code*" required />
              <input type="text" placeholder="City*" required />
              <input type="text" placeholder="Location*" required />
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div className='home4'>
          <div className='home4-content'>
              <div className='home4-heading'>Our Pre-school Programs</div>
              <div className='home4-desc'>With age-appropriate stimulation, and the right balance of learning and fun, we encourage their curiosity and fuel their creative side.</div>
              <div className='home4-items'>
                  <div className='home4-item'>
                      <div className='h4-item-img'><img src={item7}></img></div>
                      <div className='h4-item-heading'>PlayGround</div>
                      <div className='h4-item-age'>(1.5-3 years)</div>
                      <div className='h4-item-desc'>Discovery and exploration, language development, new-age skills, and shaping scientific mindset.</div>
                  </div>
                  <div className='home4-item'>
                      <div className='h4-item-img'><img src={item8}></img></div>
                      <div className='h4-item-heading'>Nursery</div>
                      <div className='h4-item-age'>(3-4 years)</div>
                      <div className='h4-item-desc'>Discovery and exploration, language development, new-age skills, and shaping scientific mindset.</div>
                  </div>
                  <div className='home4-item'>
                      <div className='h4-item-img'><img src={item9}></img></div>
                      <div className='h4-item-heading'>junior K.G</div>
                      <div className='h4-item-age'>(4-5 years)</div>
                      <div className='h4-item-desc'>Discovery and exploration, language development, new-age skills, and shaping scientific mindset.</div>
                  </div>
                  <div className='home4-item'>
                      <div className='h4-item-img'><img src={item10}></img></div>
                      <div className='h4-item-heading'>Senior K.G</div>
                      <div className='h4-item-age'>(5-6 years)</div>
                      <div className='h4-item-desc'>Discovery and exploration, language development, new-age skills, and shaping scientific mindset.</div>
                  </div>
              </div>
          </div>
      </div>
    </div>
    
  );
}

export default Franchise;

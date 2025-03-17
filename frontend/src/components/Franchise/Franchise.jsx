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
          <div className='h1-heading'><h1 className=''>All About Play School <br/>Admission at <span className='kinder'>KINDER</span><span className='klay'>KLAY</span><br/> PRE SCHOOLS</h1>
          </div>
          <div className='h1-desc'>Searching for the perfect play school for your child? At KINDERKLAY, our thoughtfully designed programs and interactive learning environments nurture your child’s cognitive, physical, social, emotional, and language skills, setting a strong foundation for lifelong success. With countless satisfied parents and thousands of joyful children, our journey begins with a simple admission form. At KINDERKLAY, we don’t just prepare children for school; we prepare them for life.</div>
        </div>
        
        <div className="right-div">
          <div className="new-form-container">
            <h2 className="new-form-title">Enquire Now</h2>
            <form className="new-enquiry-form">
              <select name="program" id="program">
                <option value="" disabled selected hidden>Select a Program</option>
                <option value="Nursery">Nursery</option>
                <option value="PlayGround">PlayGround</option>
                <option value="junior K.G">junior K.G</option>
                <option value="Senior K.G">Senior K.G</option>
              </select>
              <input type="text" placeholder="Student's Name*" required />
              <input type="text" placeholder="Parent's Name*" required />
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

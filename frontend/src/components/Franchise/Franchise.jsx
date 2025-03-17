import React from 'react';
import "./Franchise.css";

function Franchise() {
  return (
    <div className='main-div'>
      <div className="container">
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
    </div>
  );
}

export default Franchise;

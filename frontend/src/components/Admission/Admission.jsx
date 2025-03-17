import React from 'react';
import backgroundpic from '../../assets/backgroundpic.jpg';
import "./Admission.css";

function Admission() {
  return (
    <div className='main-div'>
      <div className="container">
        <div className="left-div">
          <div className="inner-div">
            <h1 className='right-text'>All About Play School Admission at <span className='kinder'>KINDER</span><span className='klay'>KLAY</span> PRE SCHOOLS</h1>
          </div>
          <div className="inner-div">
            <p className='para'>Searching for the perfect play school for your child? At <strong>KINDERKLAY</strong>, our thoughtfully designed programs and interactive learning environments nurture your child’s <strong>cognitive, physical, social, emotional, and language skills</strong>, setting a strong foundation for lifelong <strong>success</strong>. With countless satisfied <strong>parents</strong> and thousands of joyful <strong>children</strong>, our journey begins with a simple <strong>admission form</strong>. At <strong>KINDERKLAY</strong>, we don’t just prepare children for school; we prepare them for life.</p>
          </div>
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

export default Admission;

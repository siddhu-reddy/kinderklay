import React from 'react';
import AdmissionImage from '../../assets/Admission.jpeg';
import backgroundpic from '../../assets/backgroundpic.jpg';
import "./Admission.css";

function Admission() {
  return (
    <div className='a'>
      <div className="container">
        <div className="left-div">
          <div className="inner-div">
            <h1 className='c'>All About Play School Admission at <span className='d'>KINDER</span><span className='e'>KLAY</span> PRE SCHOOLS</h1>
          </div>
          <div className="inner-div">
            <p className='f'>Searching for the perfect play school for your child? At <strong>KINDERKLAY</strong>, our thoughtfully designed programs and interactive learning environments nurture your child’s <strong>cognitive, physical, social, emotional, and language skills</strong>, setting a strong foundation for lifelong <strong>success</strong>. With countless satisfied <strong>parents</strong> and thousands of joyful <strong>children</strong>, our journey begins with a simple <strong>admission form</strong>. At <strong>KINDERKLAY</strong>, we don’t just prepare children for school; we prepare them for life.</p>
          </div>
        </div>
        <div className="right-div">
          <div className="new-form-container">
            <h2 className="new-form-title">Enquire Now</h2>
            <form className="new-enquiry-form">
              <input type="text" placeholder="Name*" required />
              <input type="text" placeholder="Parent's Name*" required />
              <input type="email" placeholder="Email*" required />
              <input type="tel" placeholder="Mobile*" required />
              <input type="text" placeholder="Pin Code*" required />
              <input type="text" placeholder="State/District*" required />
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

import React from 'react';
import AdmissionImage from '../../assets/Admission.jpeg';
import "./Admission.css";

function Admission() {
  return (
    <div className='a'>
      <div className="container">
        <div className="left-div">
          <div className="inner-div">
            <h2 className='b'>Give Your Child the Best Start with India’s Leading Play School</h2>
          </div>
          <div className="inner-div">
            <h1 className='c'>All About Play School Admission at <span className='d'>KINDER</span><span className='e'>KLAY</span> PRE SCHOOLS</h1>
          </div>
          <div className="inner-div">
            <p className='f'>Searching for the perfect play school for your child? At <strong>KINDERKLAY</strong>, our thoughtfully designed programs and interactive learning environments nurture your child’s <strong>cognitive, physical, social, emotional, and language skills</strong>, setting a strong foundation for lifelong <strong>success</strong>. With countless satisfied <strong>parents</strong> and thousands of joyful <strong>children</strong>, our journey begins with a simple <strong>admission form</strong>. Choosing <strong>KINDERKLAY</strong> means giving your <strong>child the best start in life!</strong> <strong>Admissions</strong> are now open. Enroll <strong>today</strong> and be a part of our trusted legacy of excellence and experience.</p>
          </div>
        </div>
       <div className="right-div">
          <form className="admission-form">
            <h3 className="form-title">Enroll in Our Preschool Today and Kickstart Your Child’s Learning Journey</h3>
            <input type="text" placeholder="Student's Name" required />
            <input type="text" placeholder="Parent's Name" required />
            <input type="email" placeholder="Email ID" required />
            <select>
              <option value="">Admission for</option>
              <option value="PlayGroup">Play Group</option>
              <option value="Nursery">Nursery</option>
              <option value="KG">Kindergarden</option>
            </select>
            <select>
              <option value="">Select Branch</option>
              <option value="State1">Kothapet</option>
              <option value="State2">Nagole</option>
              <option value="State2">Badangpet</option>
            </select>
            <select>
              <option value="">Select City</option>
              <option value="City1">Hyderabad</option>
            </select>
            <input type="tel" placeholder="Mobile Number" required />
            <input type="text" placeholder="Address" required />
            <div className="button-container">
              <button type="submit" className="submit-button">Submit</button>
            </div>
          </form>
        </div>

      </div>

    </div>
  );
}

export default Admission;

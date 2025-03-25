import React from 'react';
import item7 from "../../assets/01.png";
import item8 from "../../assets/02.png";
import item9 from "../../assets/03.png";
import item10 from "../../assets/04.png";
import paintpic from "../../assets/paint.png";
import piantcenter from "../../assets/paintcenter.png";
import ballpic from "../../assets/ball.png";
import specialp from "../../assets/special.png";
import musicpic from "../../assets/music.png";
import librarypic from "../../assets/library.png";
import sandplaypic from "../../assets/sandplay.png";
import storypic from "../../assets/story.png";
import waterplaypic from "../../assets/waterplay.png";
import "./Admission.css";

function Admission() {
  return (
      <div className='main-div'>
        <div className="container1">
          <div className='h1-left'>
            <div className='h1-heading'><h1 className=''>All About Play School <br/>Admission at <span className='kinder'>Kinder</span><span className='klay'>Klay</span><br/> PRE SCHOOLS</h1>
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


        <div className="activity-div">
          <h2 className="activity-heading">Our Activities</h2>
          <div className="activity-grid">
            <div className="activity-item">
              <div className="icon-circle">
                <img src={paintpic} alt="Painting Icon" />
              </div>
              <div>
                <h3 className="activity-title">Painting</h3>
                <p className="activity-desc">Children learn to paint, and enjoy it</p>
              </div>
            </div>
            
            <div className="activity-item">
              <div className="icon-circle">
                <img src={piantcenter} alt="Painting Icon" />
              </div>
              <div>
                <h3 className="activity-title">Puppet Centre</h3>
                <p className="activity-desc">What you don’t have at home</p>
              </div>
            </div>
  
            <div className="activity-item">
              <div className="icon-circle">
                <img src={ballpic} alt="Painting Icon" />
              </div>
              <div>
                <h3 className="activity-title">Table/Floor Toys</h3>
                <p className="activity-desc">What kind of toys your kid prefer?</p>
              </div>
            </div>
  
            <div className="activity-item">
              <div className="icon-circle">
                <img src={specialp} alt="Painting Icon" />
              </div>
              <div>
                <h3 className="activity-title">Special Projects</h3>
                <p className="activity-desc">Our secret area education ways</p>
              </div>
            </div>
  
            <div className="activity-item">
              <div className="icon-circle">
                <img src={musicpic} alt="Painting Icon" />
              </div>
              <div>
                <h3 className="activity-title">Music & Singing</h3>
                <p className="activity-desc">Everybody loves child’s singing</p>
              </div>
            </div>
  
            <div className="activity-item">
              <div className="icon-circle">
                <img src={librarypic} alt="Painting Icon" />
              </div>
              <div>
                <h3 className="activity-title">Library Reading</h3>
                <p className="activity-desc">How many stories our teacher knows?</p>
              </div>
            </div>
  
            <div className="activity-item">
              <div className="icon-circle">
                <img src={sandplaypic} alt="Painting Icon" />
              </div>
              <div>
                <h3 className="activity-title">Sand Play</h3>
                <p className="activity-desc">All year round we enjoy sand</p>
              </div>
            </div>
  
            <div className="activity-item">
              <div className="icon-circle">
                <img src={storypic} alt="Painting Icon" />
              </div>
              <div>
                <h3 className="activity-title">Storytime</h3>
                <p className="activity-desc">Where learning is serious fun</p>
              </div>
            </div>
  
            <div className="activity-item">
              <div className="icon-circle">
                <img src={waterplaypic} alt="Painting Icon" />
              </div>
              <div>
                <h3 className="activity-title">Water Play</h3>
                <p className="activity-desc">Imagine various water activities</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
    );
}

export default Admission;

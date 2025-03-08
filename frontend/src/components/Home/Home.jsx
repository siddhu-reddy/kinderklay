import React from 'react';
import heroimage from "../../assets/heroimage.jpg";
import home2image from "../../assets/bike-.png";
import wave1 from "../../assets/wave1.png";
import wave2 from "../../assets/wave2.png";
import item1 from "../../assets/color-palette.png"
import item2 from "../../assets/puzzle.png"
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
            <img src={home2image} className='home2-img'></img>
        </div>

        <div className='home2-content'>
            <div className='home2-heading'>Why Early <br/>Education Matters</div>
            <div className='home2-desc'>Every child is born with a sense of curiosity and wonder. Nurturing these early passions helps shape confident, capable individuals. At KinderKlay, we create a supportive environment where young minds flourish, laying the groundwork for a bright and promising future.</div>
        </div>
    </div>
    </div>
    <div>
    <div className='home3'>
        <img src={wave1} className='home3-img'></img>
        <div className='home3-content'>
            <div className='home3-heading'>What We Offer</div>
            <div className='home3-desc'>The KinderKlay’s mission is to provide affordable, high-quality early education and childcare services for working families to ensure every child.</div>
            <div className='home3-items'>
                <div className='home3-item'>
                    <img src={item1} className='item-img'></img>
                    <div className='item-content'>
                        <div className='item-heading'>Art Classes</div>
                        <div className='item-desc'>Encouraging creativity through painting, drawing, and crafts, helping kids express themselves and build confidence.</div>
                    </div>
                </div>
                <div className='home3-item'>
                    <img src={item2} className='item-img'></img>
                    <div className='item-content'>
                        <div className='item-heading'>Special Education</div>
                        <div className='item-desc'>Personalized learning support for children with diverse needs, ensuring every child thrives.</div>
                    </div>
                </div>
                <div className='home3-item'>
                    <img src={item1} className='item-img'></img>
                    <div className='item-content'>
                        <div className='item-heading'>Activity Rooms</div>
                        <div className='item-desc'>Fun-filled spaces with interactive toys and games to enhance teamwork, creativity, and learning.</div>
                    </div>
                </div>
                <div className='home3-item'>
                    <img src={item1} className='item-img'></img>
                    <div className='item-content'>
                        <div className='item-heading'>Languages</div>
                        <div className='item-desc'>Introducing new languages through songs and stories, making learning fun and engaging.</div>
                    </div>
                </div>
                <div className='home3-item'>
                    <img src={item1} className='item-img'></img>
                    <div className='item-content'>
                        <div className='item-heading'>Birthday Party</div>
                        <div className='item-desc'>Themed celebrations with fun activities and decorations for a memorable birthday experience.</div>
                    </div>
                </div>
                <div className='home3-item'>
                    <img src={item1} className='item-img'></img>
                    <div className='item-content'>
                        <div className='item-heading'>Healthy Food</div>
                        <div className='item-desc'>Nutritious, balanced meals made from fresh ingredients to keep kids healthy and energized.</div>
                    </div>
                </div>
                

            </div>
        </div>
        <img src={wave2} className='home3-img'></img>
    </div>
    </div>
  </>

    
  )
}

export default Home
import React from 'react';
import heroimage from "../../assets/heroimage.jpg";
import home2image from "../../assets/bike-.png";
import item1 from "../../assets/color-palette.png";
import item2 from "../../assets/puzzle.png";
import item3 from "../../assets/toys.png";
import item4 from "../../assets/languages.png";
import item5 from "../../assets/balloons.png";
import item6 from "../../assets/vegetable.png";
import item7 from "../../assets/01.png";
import item8 from "../../assets/02.png";
import item9 from "../../assets/03.png";
import item10 from "../../assets/04.png";
import "./Home.css";
function Home() {
  return (
  <>


    <div className='hero'>
        <div className='hero-content'>
            <div className='hero-heading'>
                your kids can learn
                while having fun
            </div>
            <div className='hero-tag'>
                checkout our new learning methods
            </div>
            <div className='hero-desc'>
            Discover a fun and engaging way for your child to learn and grow. At KinderKlay, we make learning exciting through creative play and hands-on activities!
            </div>
            <div className='hero-button'>
                <button className='button'>Enroll Now</button>
            </div>
            
        </div>
    </div>


    <div className='home1'>
        <div className='home1-content'>
            <div className='home1-heading'>Why Choose<br/>
            KindeKlay Preschool?</div>
            <div className='home1-desc'>KinderKlay Preschool is your experienced trusted partner in providing exceptional early education for your child. Here's why KinderKlay stands out as the preferred choice for parents seeking the best for their little ones</div>
            
        </div>

        <div className='home1-image' >
            <img src={heroimage} className='home1-img'></img>
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
            <div className='home3-content'>
                <div className='home3-heading'>What We Offer</div>
                <div className='home3-desc'>The KinderKlay’s mission is to provide affordable, high-quality early education and childcare services for working families to ensure every child.</div>
                <div className='home3-items'>
                    <div className='home3-item'>
                        <img src={item1} className='h3-item-img'></img>
                        <div className='h3-item-content'>
                            <div className='h3-item-heading'>Art Classes</div>
                            <div className='h3-item-desc'>Encouraging creativity through painting, drawing, and crafts, helping kids express themselves and build confidence.</div>
                        </div>
                    </div>
                    <div className='home3-item'>
                        <img src={item2} className='h3-item-img'></img>
                        <div className='h3-item-content'>
                            <div className='h3-item-heading'>Special Education</div>
                            <div className='h3-item-desc'>Personalized learning support for children with diverse needs, ensuring every child thrives.</div>
                        </div>
                    </div>
                    <div className='home3-item'>
                        <img src={item3} className='h3-item-img'></img>
                        <div className='h3-item-content'>
                            <div className='h3-item-heading'>Activity Rooms</div>
                            <div className='h3-item-desc'>Fun-filled spaces with interactive toys and games to enhance teamwork, creativity, and learning.</div>
                        </div>
                    </div>
                    <div className='home3-item'>
                        <img src={item4} className='h3-item-img'></img>
                        <div className='h3-item-content'>
                            <div className='h3-item-heading'>Languages</div>
                            <div className='h3-item-desc'>Introducing new languages through songs and stories, making learning fun and engaging.</div>
                        </div>
                    </div>
                    <div className='home3-item'>
                        <img src={item5} className='h3-item-img'></img>
                        <div className='h3-item-content'>
                            <div className='h3-item-heading'>Birthday Party</div>
                            <div className='h3-item-desc'>Themed celebrations with fun activities and decorations for a memorable birthday experience.</div>
                        </div>
                    </div>
                    <div className='home3-item'>
                        <img src={item6} className='h3-item-img'></img>
                        <div className='h3-item-content'>
                            <div className='h3-item-heading'>Healthy Food</div>
                            <div className='h3-item-desc'>Nutritious, balanced meals made from fresh ingredients to keep kids healthy and energized.</div>
                        </div>
                    </div>
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
  </>

    
  )
}

export default Home;
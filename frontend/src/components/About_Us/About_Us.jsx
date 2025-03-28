import React, { useState, useEffect } from "react";
import "./About_Us.css";
import Parents from "../parents/parents";
import logo from "../../assets/kinderpic.jpeg";
import bg1 from "../../assets/carosal5.png";
import bg2 from "../../assets/carosal2.jpg";
import bg3 from "../../assets/carosal3.jpg";
import paintpic from "../../assets/paint.png";
import piantcenter from "../../assets/paintcenter.png";
import ballpic from "../../assets/ball.png";
import specialp from "../../assets/special.png";
import musicpic from "../../assets/music.png";
import librarypic from "../../assets/library.png";
import sandplaypic from "../../assets/sandplay.png";
import storypic from "../../assets/story.png";
import waterplaypic from "../../assets/waterplay.png";
import missionpic from "../../assets/missionrightpic.png";
import missionleftpic from "../../assets/missionleftpic.png";

const backgroundImages = [bg1, bg2, bg3];

export default function AboutUs() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="about-container">
        {/* Left - Image */}
        <div className="image-container">
          <img src={logo} alt="KinderKlay Logo" className="logo" />
        </div>

        {/* Right - Content */}
        <div className="content-container">
          <h2 className="heading">
            <span className="highlightpink">Welcome</span> <br />
            <span className="highlightyellow">To KinderKlay</span>
          </h2>

          <p className="description">
            Look into the eyes of a young child and see the sparkle and wonder.
            Develop these passions and watch the adult bloom into someone special.
            At KinderKlay Center, we work every day to build the foundations for amazing futures.
          </p>
        </div>
      </div>

      {/* Background Image Carousel */}
      <div
        className="mid-div"
        style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
      >
        <div className="overlay">
          <p className="carousel-subtext"><h3>WE BRING UP SUPERMEN</h3></p>
          <h1 className="carousel-text">Give Your Kid The Best</h1>
          <h1 className="carousel-text">Possible Start!</h1>
        </div>
      </div>
      <div class="mission-div">
        <div class="mission-left">
          <h2>Our Mission for kinderklay</h2>
          <p>The Mission of <strong>OurKids</strong> Kinderklay is to provide a safe,
            loving, environment in which the young child can
            be nurtured spiritually, emotionally, intellectually, socially,
            and physically. We pledge to work in partnership with the
            home and the School to meet the total needs of the child.
            We will strive to glorify God before our students and
            their families as a witness to our community.</p>
        </div>
        <div class="mission-right">
          <img src={missionpic} alt="missionpic" className="missionpic" />
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
              <p>Children learn to paint, and enjoy it</p>
            </div>
          </div>

          <div className="activity-item">
            <div className="icon-circle">
              <img src={piantcenter} alt="Painting Icon" />
            </div>
            <div>
              <h3 className="activity-title">Puppet Centre</h3>
              <p>What you don’t have at home</p>
            </div>
          </div>

          <div className="activity-item">
            <div className="icon-circle">
              <img src={ballpic} alt="Painting Icon" />
            </div>
            <div>
              <h3 className="activity-title">Table/Floor Toys</h3>
              <p>What kind of toys your kid prefer?</p>
            </div>
          </div>

          <div className="activity-item">
            <div className="icon-circle">
              <img src={specialp} alt="Painting Icon" />
            </div>
            <div>
              <h3 className="activity-title">Special Projects</h3>
              <p>Our secret area education ways</p>
            </div>
          </div>

          <div className="activity-item">
            <div className="icon-circle">
              <img src={musicpic} alt="Painting Icon" />
            </div>
            <div>
              <h3 className="activity-title">Music & Singing</h3>
              <p>Everybody loves child’s singing</p>
            </div>
          </div>

          <div className="activity-item">
            <div className="icon-circle">
              <img src={librarypic} alt="Painting Icon" />
            </div>
            <div>
              <h3 className="activity-title">Library Reading</h3>
              <p>How many stories our teacher knows?</p>
            </div>
          </div>

          <div className="activity-item">
            <div className="icon-circle">
              <img src={sandplaypic} alt="Painting Icon" />
            </div>
            <div>
              <h3 className="activity-title">Sand Play</h3>
              <p>All year round we enjoy sand</p>
            </div>
          </div>

          <div className="activity-item">
            <div className="icon-circle">
              <img src={storypic} alt="Painting Icon" />
            </div>
            <div>
              <h3 className="activity-title">Storytime</h3>
              <p>Where learning is serious fun</p>
            </div>
          </div>

          <div className="activity-item">
            <div className="icon-circle">
              <img src={waterplaypic} alt="Painting Icon" />
            </div>
            <div>
              <h3 className="activity-title">Water Play</h3>
              <p>Imagine various water activities</p>
            </div>
          </div>
        </div>
      </div>
      <Parents />
    </div>
  );
}

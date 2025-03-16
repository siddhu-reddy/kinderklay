import React, { useState, useEffect } from "react";
import "./About_Us.css";
import logo from "../../assets/kinderpic.jpeg";
import bg1 from "../../assets/carosal1.jpg";
import bg2 from "../../assets/carosal2.jpg";
import bg3 from "../../assets/carosal3.jpg";

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
        <div className="first-div"></div>
      </div>
    </div>
  );
}

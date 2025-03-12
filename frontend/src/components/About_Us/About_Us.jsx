import React from "react";
import "./About_Us.css"; // Import CSS for styling
import logo from "../../assets/kinderpic.jpeg";
import science from "../../assets/sciencepic.jpeg";
import music from "../../assets/musicpic.jpeg";
import paint from "../../assets/paintpic.jpeg";
import yoga from "../../assets/yogapic.jpeg";
import event from "../../assets/eventpic.jpeg";
import aboutbackpic from "../../assets/aboutbackpic.png";

export default function About_Us() {
  return (
    <div>
      <div className="about-container">
      {/* Left - Image */}
      <div className="image-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Right - Content */}
      <div className="content-container">
        {/* Styled Heading */}
        <h2 className="heading">
          <span className="highlightpink">Welcome</span> <br />
          <span className="highlightyellow">To KinderKlay</span>
        </h2>

        {/* Description */}
        <p className="description">
          Look into the eyes of a young child and see the sparkle and wonder.
          Develop these passions and watch the adult bloom into someone special.
          At Kinderklay Center, we work every day to build the foundations for amazing futures.
        </p>
      </div>
    </div>
    <div className="mid-div">
      {/* First Div */}
      <div className="first-div"><h1 className="highlightpink">Our Classes</h1></div>

      {/* Second Div */}
      <div className="second-div"><p className="description">The Kinderkaly's mission is to provide affordable, high-quality early education and child, Daycare services for working families to ensure every child.</p></div>

      {/* Third Div - Contains 5 side-by-side divs */}
      <div className="third-div">
        <div className="box">
          <div className="box-image">
            <img src={science} alt="icon" className="icon" />
          </div>
          <div className="box-text">Science</div>
        </div>
        <div className="box">
          <div className="box-image">
            <img src={music} alt="icon" className="icon" />
          </div>
          <div className="box-text">Music</div>
        </div>
        <div className="box">
          <div className="box-image">
            <img src={paint} alt="icon" className="icon" />
          </div>
          <div className="box-text">Painting</div>
        </div>
        <div className="box">
          <div className="box-image">
            <img src={yoga} alt="icon" className="icon" />
          </div>
          <div className="box-text">Yoga</div>
        </div>
        <div className="box">
          <div className="box-image">
            <img src={event} alt="icon" className="icon" />
          </div>
          <div className="box-text">Events</div>
        </div>
      </div>
    </div>
    </div>
  );
}

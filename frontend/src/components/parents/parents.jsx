import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Parents.css";
import reviewPic1 from "../../assets/carosal2.jpg"; 
import reviewPic2 from "../../assets/carosal3.jpg";
import reviewPic3 from "../../assets/carosal2.jpg";

const reviews = [
  {
    image: reviewPic1,
    name: "Mallamma",
    role: "Mother",
    text: "We really like the kindergarten. A wonderful director. We are also very pleased with the teaching and educational part...",
  },
  {
    image: reviewPic2,
    name: "MallaReddy",
    role: "Father",
    text: "A great place for kids to learn and grow! The staff is very caring, and the environment is safe and fun.",
  },
  {
    image: reviewPic3,
    name: "Pullamma",
    role: "Mother",
    text: "My child loves coming here every day. So many activities and great attention to children's needs!",
  },
];

export default function Parents() {
  return (
    <div className="review-section">
      <h2 className="review-heading">What Parents Say</h2>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        loop={true}
        className="review-carousel"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index} className="review-slide">
            <div className="review-content">
              <img src={review.image} alt={review.name} className="review-image" />
              <div className="review-text-container">
                <p className="review-text">“{review.text}”</p>
                <h3 className="review-name">{review.name}</h3>
                <p className="review-role">{review.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

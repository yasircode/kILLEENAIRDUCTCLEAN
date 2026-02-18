import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './GoogleReviews.css';

const reviews = [
  { id: 1, name: "Rk Speak", date: "5 September 2025", text: "Affordable, reliable, and very detailed duct cleaning service.", initial: "Rk", color: "#689f38" },
  { id: 2, name: "Devon Paul", date: "5 September 2025", text: "Fast service, professional staff, breathing much easier now.", initial: "D", color: "#00897b" },
  { id: 3, name: "Julian Lopez", date: "5 September 2025", text: "Great team, removed dust and improved my home's air quality.", img: "https://i.pravatar.cc/100?u=3" },
  { id: 4, name: "Sarah Miller", date: "10 October 2025", text: "Excellent customer service and very thorough work.", initial: "S", color: "#e91e63" },
  { id: 5, name: "James Wilson", date: "12 October 2025", text: "Highly recommend for anyone needing HVAC cleaning.", initial: "J", color: "#3f51b5" },
  { id: 6, name: "Maria Garcia", date: "15 October 2025", text: "They were on time and left everything spotless!", initial: "M", color: "#ff9800" },
];

const GoogleReviews = () => {
  return (
    <section className="reviews-section">
      <h2 className="reviews-main-title">GOOGLE REVIEWS</h2>
      
      <div className="reviews-container">
        {/* Left Profile Sidebar */}
        <div className="business-sidebar">
          <div className="business-logo">
             <img src="/logo.png" alt="Logo" /> {/* Replace with your logo path */}
          </div>
          <div className="business-info">
            <h3>America Air Duct Cleaning Services</h3>
            <div className="stars">★★★★★</div>
            <p>378 Google reviews</p>
            <button className="write-review-btn">Write a review</button>
          </div>
        </div>

        {/* Right Slider */}
        <div className="slider-wrapper">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            breakpoints={{
              768: { slidesPerView: 2 },
              1100: { slidesPerView: 3 },
            }}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="review-card">
                  <div className="review-header">
                    <div className="user-profile">
                      {review.img ? (
                        <img src={review.img} alt={review.name} />
                      ) : (
                        <div className="user-initial" style={{ backgroundColor: review.color }}>
                          {review.initial}
                        </div>
                      )}
                      <div className="user-details">
                        <h4>{review.name}</h4>
                        <span>{review.date}</span>
                      </div>
                    </div>
                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Color_Icon.svg" alt="Google" />
                  </div>
                  <div className="review-stars">
                    ★★★★★ <span className="verified-check">✔</span>
                  </div>
                  <p className="review-text">{review.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
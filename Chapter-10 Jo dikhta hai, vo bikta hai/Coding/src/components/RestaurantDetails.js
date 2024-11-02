import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurantDetail from "../../utils/useRestaurantDetail";
import Shimmer from "./Shimmer";

const RestaurantDetails = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { city, name: restaurantName } = useParams();
  const { restroDetail, error } = useRestaurantDetail(decodeURIComponent(city), decodeURIComponent(restaurantName));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrev = (IMAGES) => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + IMAGES.length) % IMAGES.length);
  };

  const handleNext = (IMAGES) => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!restroDetail) {
    return <Shimmer />;
  }

  let { IMAGES, RATING } = restroDetail.entities || {};
  IMAGES = IMAGES ? Object.values(IMAGES) : [];
  const { CUISINES } = restroDetail.page_data?.sections?.SECTION_RES_HEADER_DETAILS || {};
  const { name, rating, timing } = restroDetail.page_data?.sections?.SECTION_BASIC_INFO || {};

  return (
    <div className="container">
      <div className="carousel-wrapper">
        <div className="carousel">
          <button
            className="carousel-arrow left"
            onClick={() => handlePrev(IMAGES)}
            aria-label="Previous Image"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            className="carousel-arrow right"
            onClick={() => handleNext(IMAGES)}
            aria-label="Next Image"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
          <div className="carousel-content">
            {IMAGES.map((img, index) => (
              <img
                src={img.url || defaultImageUrl}
                key={index}
                alt={name}
                className={`carousel-image ${index === currentIndex ? "visible" : "hidden"}`}
              />
            ))}
          </div>
        </div>
        <div className="details">
          <h1 className="restaurant-name">{name}</h1>
          <p className="restaurant-timing">{timing?.text}</p>
          <div className="actions">
            <button className="action-button">Direction</button>
            <button className="action-button">Bookmark</button>
            <button className="action-button">Share</button>
          </div>
          <div className="ratings">
            <span className="rating" style={{ background: `#${rating?.rating_color}` }}>
              {rating?.rating_text}★
            </span>
          </div>
          <div className="cuisines-container">
            <h4 className="cuisines-title">Cuisines</h4>
            {CUISINES &&
              CUISINES.map((cuisine, index) => (
                <span key={index} className="cuisine-item">
                  {cuisine.name}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;

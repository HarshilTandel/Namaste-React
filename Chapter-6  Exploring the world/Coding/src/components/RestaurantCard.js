import React from "react";

const RestaurantCard = ({ resData }) => {
  const cuisines = resData.cuisine.map((cuisine) => cuisine.name).join(", ");
  const diningRating = resData.ratingNew?.ratings?.DINING?.ratingV2 || "N/A";

  return (
    <div className="res-card">
      <img src={resData.image.url} alt={resData.name} />
      <h3>{resData.name}</h3>
      <h4>{cuisines}</h4>
      <div className="rating-container">
        <span className="rating">{diningRating}</span>
        <span className="rating-out-of">/ 5</span>
      </div>
      <h4>{resData.locality.name}</h4>
      <h4>{resData.costText.text}</h4>
    </div>
  );
};

export default RestaurantCard;

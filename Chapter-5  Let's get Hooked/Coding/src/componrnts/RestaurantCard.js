import React from "react";

const RestaurantCard = (props) => {
  const { resData } = props;
  const cuisines = resData.info.cuisine.map((cuisine) => cuisine.name).join(", ");
  const diningRating = resData.info.ratingNew?.ratings?.DINING?.ratingV2 || "N/A";

  return (
    <div className="res-card">
      <img src={resData.info.image.url} alt={resData.info.name} />
      <h3>{resData.info.name}</h3>
      <h4>{cuisines}</h4>
      <div className="rating-container">
        <span className="rating">{diningRating}</span>
        <span className="rating-out-of">/ 5</span>
      </div>
      <h4>{resData.info.locality.name}</h4>
      <h4>{resData.info.costText.text}</h4>
    </div>
  );
};

export default RestaurantCard;

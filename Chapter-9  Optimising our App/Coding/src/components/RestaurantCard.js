import React from "react";

const RestaurantCard = ({ resData }) => {

  const city = resData.locality?.name || "unknown-city";
  const name = resData.name;
  const cuisines =
    resData.cuisine?.map((cuisine) => cuisine.name).join(", ") || "Unknown";
  const diningRating = resData.ratingNew?.ratings?.DINING?.ratingV2 || "N/A";
  const imageSrc =
    resData.image?.url || "https://i.postimg.cc/jdQVvYgK/deafault-img.jpg"; // Use url or urlWithParams if needed
  
    return (
    <div className="res-card" style={{ cursor: "pointer" }}>
      <img src={imageSrc} alt={`Image of ${name} restaurant`} />
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <div className="rating-container">
        <span className="rating">{diningRating}</span>
        <span className="rating-out-of">/ 5</span>
      </div>
      <h4>{city}</h4>
      <h4>{resData.costText?.text || "Cost info not available"}</h4>
    </div>
  );
};

export default RestaurantCard;

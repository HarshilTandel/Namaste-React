import React from "react";

const RestaurantCard = ({ resData }) => {
  const city = resData.locality?.name || "Unknown City";
  const name = resData.name;
  const cuisines = resData.cuisine?.map((cuisine) => cuisine.name).join(", ") || "Unknown Cuisine";
  const diningRating = resData.ratingNew?.ratings?.DINING?.ratingV2 || "N/A";
  const imageSrc = resData.image?.url || "https://i.postimg.cc/jdQVvYgK/deafault-img.jpg";

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transform hover:-translate-y-1 transition duration-300 p-5" style={{ cursor: "pointer" }}>
      <img src={imageSrc} alt={`Image of ${name} restaurant`} className="w-full h-36 object-cover rounded-t-lg mb-4" />
      <div className="flex flex-col items-start">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-sm text-gray-700 mb-4">{cuisines}</p>
        <div className="flex items-center mb-4">
          <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
            {diningRating} / 5
          </span>
          <span className="text-gray-500 text-xs">Rated Dining</span>
        </div>
        <p className="text-sm text-gray-600 mb-2">
          <i className="fas fa-map-marker-alt mr-1 text-red-400"></i>
          {city}
        </p>
        <p className="text-sm font-medium text-gray-800">
          {resData.costText?.text || "Cost info not available"}
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;

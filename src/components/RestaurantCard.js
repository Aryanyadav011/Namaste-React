import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  useContext(UserContext);

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData;

  return (
    <div data-testid="resCard"
    className="ml-10 h- p-4  w-64 hover:shadow-2xl flex flex-col   rounded-lg ">
      <img
       className="rounded-md overflow-hidden min-h-[180px] h-20 object-cover overlay"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg"> {name}</h3>
      <h4 className="text-base truncate ">{cuisines.join(",")}</h4>
     
      <h4>{costForTwo} </h4>
      {/* <h4 className="text-base truncate ">📍{locality}</h4> */}
      <h4>{deliveryTime} minutes</h4> 
      <h4>{avgRating} ⭐</h4>
    </div>
  );
};

// Higher Order Component

// input - RestaurantCard =>> RestaurantCardPromoted

export const withPromtedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
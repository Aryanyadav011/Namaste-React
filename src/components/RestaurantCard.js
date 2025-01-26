import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const {resData }=props;
    const {loggedInUser}= useContext(UserContext); 


    const{
        cloudinaryImageId,
        name,
        cuisines,
        avgRating, 
        costForTwo,
        
        
      
    }=resData?.info;
    
    return(
        <div className="p-4 m-4 w-[220px] rounded-lg bg-gray-100 hover:bg-gray-200" >
            <img className="rounded-lg"
            alt="res-logo"
            src={CDN_URL+ 
            cloudinaryImageId
            }
            />
            <h3 className="font-bold py-4 text-lg">{name}</h3> 
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo }</h4>
           
            <h4>{resData.info.sla.deliveryTime} minutes</h4>
            <h4>user : {loggedInUser}</h4>

        </div>
    );
};



 export default RestaurantCard;
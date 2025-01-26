//import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState, useContext} from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

// const resList=[
//     {
//       "info": {
//         "id": "107452",
//         "name": "Chaayos Chai+Snacks=Relax",
//         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/9/1dbdf671-cbed-4fc1-8b43-faa0165112e9_107452.JPG",
//         "locality": "Kashmiri Gate",
//         "areaName": "Kashmiri Gate",
//         "costForTwo": "₹250 for two",
//         "cuisines": [
//           "Bakery",
//           "Beverages",
//           "Chaat",
//           "Desserts",
//           "Home Food",
//           "Italian",
//           "Maharashtrian",
//           "Snacks",
//           "Street Food",
//           "Sweets"
//         ],
//         "avgRating": 4.5,
//         "veg": true,
//         "parentId": "281782",
//         "avgRatingString": "4.5",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 39,
//           "lastMileTravel": 2.9,
//           "serviceability": "SERVICEABLE",
//           "slaString": "35-40 mins",
//           "lastMileTravelString": "2.9 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-04-17 23:00:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
//               "description": "Delivery!"
//             },
//             {
//               "imageId": "v1695133679/badges/Pure_Veg111.png",
//               "description": "pureveg"
//             }
//           ],
//           "textExtendedBadges": [
//             {
//               "iconId": "guiltfree/GF_Logo_android_3x",
//               "shortDescription": "options available",
//               "fontColor": "#7E808C"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
//                   }
//                 },
//                 {
//                   "attributes": {
//                     "description": "pureveg",
//                     "imageId": "v1695133679/badges/Pure_Veg111.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "",
//                     "fontColor": "#7E808C",
//                     "iconId": "guiltfree/GF_Logo_android_3x",
//                     "shortDescription": "options available"
//                   }
//                 }
//               ]
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "50% OFF",
//           "subHeader": "UPTO ₹90"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         }
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-kashmiri-gate-delhi-107452",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "76225",
//         "name": "Subway",
//         "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
//         "locality": "Malka Ganj Road",
//         "areaName": "Kamla Nagar",
//         "costForTwo": "₹350 for two",
//         "cuisines": [
//           "Salads",
//           "Snacks",
//           "Desserts",
//           "Beverages"
//         ],
//         "avgRating": 4.1,
//         "parentId": "2",
//         "avgRatingString": "4.1",
//         "totalRatingsString": "5K+",
//         "sla": {
//           "deliveryTime": 38,
//           "lastMileTravel": 5,
//           "serviceability": "SERVICEABLE",
//           "slaString": "35-40 mins",
//           "lastMileTravelString": "5.0 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-04-17 23:59:00",
//           "opened": true
//         },
//         "badges": {
//           "textExtendedBadges": [
//             {
//               "iconId": "guiltfree/GF_Logo_android_3x",
//               "shortDescription": "options available",
//               "fontColor": "#7E808C"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
              
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "",
//                     "fontColor": "#7E808C",
//                     "iconId": "guiltfree/GF_Logo_android_3x",
//                     "shortDescription": "options available"
//                   }
//                 }
//               ]
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "40% OFF",
//           "subHeader": "UPTO ₹80"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         }
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/subway-malka-ganj-road-kamla-nagar-delhi-76225",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "253727",
//         "name": "McDonald's",
//         "cloudinaryImageId": "535fc9f9c135f7982317bbb6a64a1ffc",
//         "locality": "Kashmere Gate Metro Station",
//         "areaName": "Kashmiri Gate",
//         "costForTwo": "₹400 for two",
//         "cuisines": [
//           "American"
//         ],
//         "avgRating": 4.2,
//         "parentId": "630",
//         "avgRatingString": "4.2",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 38,
//           "lastMileTravel": 2.9,
//           "serviceability": "SERVICEABLE",
//           "slaString": "35-40 mins",
//           "lastMileTravelString": "2.9 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-04-17 22:45:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "Rxawards/_CATEGORY-Burger.png",
//               "description": "Delivery!"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Rxawards/_CATEGORY-Burger.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "30% OFF",
//           "subHeader": "UPTO ₹75"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         }
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/mcdonalds-kashmere-gate-metro-station-kashmiri-gate-delhi-253727",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "611107",
//         "name": "Burger King",
//         "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
//         "locality": "Kashmere Gate Metro Station",
//         "areaName": "Kashmere Gate",
//         "costForTwo": "₹350 for two",
//         "cuisines": [
//           "American"
//         ],
//         "avgRating": 4.1,
//         "parentId": "166",
//         "avgRatingString": "4.1",
//         "totalRatingsString": "500+",
//         "sla": {
//           "deliveryTime": 50,
//           "lastMileTravel": 3.6,
//           "serviceability": "SERVICEABLE",
//           "slaString": "45-50 mins",
//           "lastMileTravelString": "3.6 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-04-18 02:00:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "Rxawards/_CATEGORY-Burger.png",
//               "description": "Delivery!"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Rxawards/_CATEGORY-Burger.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "ITEMS",
//           "subHeader": "AT ₹139"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         }
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/burger-king-metro-station-kashmere-gate-delhi-611107",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "263663",
//         "name": "Upwas Specials by Lunchbox",
//         "cloudinaryImageId": "y2oysbch5umyyagezvwj",
//         "locality": "Gandhi Market",
//         "areaName": "Barakhamba",
//         "costForTwo": "₹200 for two",
//         "cuisines": [
//           "Biryani",
//           "North Indian",
//           "Desserts",
//           "Beverages"
//         ],
//         "avgRating": 4.3,
//         "veg": true,
//         "parentId": "21938",
//         "avgRatingString": "4.3",
//         "totalRatingsString": "100+",
//         "sla": {
//           "deliveryTime": 34,
//           "lastMileTravel": 3.6,
//           "serviceability": "SERVICEABLE",
//           "slaString": "30-35 mins",
//           "lastMileTravelString": "3.6 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-04-17 23:59:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "v1695133679/badges/Pure_Veg111.png",
//               "description": "pureveg"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "pureveg",
//                     "imageId": "v1695133679/badges/Pure_Veg111.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "50% OFF",
//           "subHeader": "UPTO ₹100"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         }
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/upwas-specials-by-lunchbox-gandhi-market-barakhamba-delhi-263663",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "60643",
//         "name": "Hira Sweets",
//         "cloudinaryImageId": "ttl0azfrovxbrheica7z",
//         "locality": "Connaught Place",
//         "areaName": "Connaught Place",
//         "costForTwo": "₹600 for two",
//         "cuisines": [
//           "North Indian",
//           "South Indian",
//           "Chinese",
//           "Continental",
//           "Bakery",
//           "Street Food",
//           "Sweets",
//           "Desserts",
//           "Beverages"
//         ],
//         "avgRating": 4.4,
//         "parentId": "5155",
//         "avgRatingString": "4.4",
//         "totalRatingsString": "5K+",
//         "sla": {
//           "deliveryTime": 32,
//           "lastMileTravel": 4.5,
//           "serviceability": "SERVICEABLE",
//           "slaString": "30-35 mins",
//           "lastMileTravelString": "4.5 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-04-17 23:59:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "Rxawards/_CATEGORY-Mithai.png",
//               "description": "Delivery!"
//             }
//           ]
//         },
//         "isOpen": true,
//         "aggregatedDiscountInfoV2": {
          
//         },
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Delivery!",
//                     "imageId": "Rxawards/_CATEGORY-Mithai.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         }
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/hira-sweets-connaught-place-delhi-60643",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "378311",
//         "name": "Blue Tokai Coffee Roasters",
//         "cloudinaryImageId": "1a0521375f07155eda2f1ed263206831",
//         "locality": "Chanakyapuri",
//         "areaName": "Connaught Place",
//         "costForTwo": "₹600 for two",
//         "cuisines": [
//           "Cafe",
//           "Coffee",
//           "Beverages"
//         ],
//         "avgRating": 4.4,
//         "parentId": "2682",
//         "avgRatingString": "4.4",
//         "totalRatingsString": "500+",
//         "sla": {
//           "deliveryTime": 27,
//           "lastMileTravel": 4.3,
//           "serviceability": "SERVICEABLE",
//           "slaString": "25-30 mins",
//           "lastMileTravelString": "4.3 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-04-17 23:00:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "newg.png",
//               "description": "Gourmet"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "Gourmet",
//                     "imageId": "newg.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "₹75 OFF",
//           "subHeader": "ABOVE ₹249",
//           "discountTag": "FLAT DEAL"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         }
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/blue-tokai-coffee-roasters-chanakyapuri-connaught-place-delhi-378311",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "18579",
//         "name": "Bille Di Hatti ",
//         "cloudinaryImageId": "agg7imcn7bs2bng028zn",
//         "locality": "Kamla Nagar",
//         "areaName": "Kamla Nagar",
//         "costForTwo": "₹100 for two",
//         "cuisines": [
//           "Street Food",
//           "Snacks",
//           "North Indian"
//         ],
//         "avgRating": 4.2,
//         "parentId": "4639",
//         "avgRatingString": "4.2",
//         "totalRatingsString": "10K+",
//         "sla": {
//           "deliveryTime": 28,
//           "lastMileTravel": 5.6,
//           "serviceability": "SERVICEABLE",
//           "slaString": "25-30 mins",
//           "lastMileTravelString": "5.6 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-04-17 19:30:00",
//           "opened": true
//         },
//         "badges": {
          
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
              
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "₹125 OFF",
//           "subHeader": "ABOVE ₹199",
//           "discountTag": "FLAT DEAL"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         }
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/bille-di-hatti-kamla-nagar-delhi-18579",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "279866",
//         "name": "Ghar ka Khana by EatFit",
//         "cloudinaryImageId": "1d578bb732e03c6f591790eb7d2d88e2",
//         "locality": "Laxmi Narain Street",
//         "areaName": "Paharganj",
//         "costForTwo": "₹250 for two",
//         "cuisines": [
//           "North Indian",
//           "Home Food",
//           "Healthy Food",
//           "Indian",
//           "Punjabi",
//           "South Indian",
//           "Rajasthani",
//           "Maharashtrian",
//           "Snacks",
//           "Desserts",
//           "Beverages"
//         ],
//         "avgRating": 4.2,
//         "parentId": "422576",
//         "avgRatingString": "4.2",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 33,
//           "lastMileTravel": 4.4,
//           "serviceability": "SERVICEABLE",
//           "slaString": "30-35 mins",
//           "lastMileTravelString": "4.4 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-04-17 23:45:00",
//           "opened": true
//         },
//         "badges": {
//           "textExtendedBadges": [
//             {
//               "iconId": "guiltfree/GF_Logo_android_3x",
//               "shortDescription": "options available",
//               "fontColor": "#7E808C"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
              
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "",
//                     "fontColor": "#7E808C",
//                     "iconId": "guiltfree/GF_Logo_android_3x",
//                     "shortDescription": "options available"
//                   }
//                 }
//               ]
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "50% OFF",
//           "subHeader": "UPTO ₹100"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         }
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/ghar-ka-khana-by-eatfit-laxmi-narain-street-paharganj-delhi-279866",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "258198",
//         "name": "Great Indian Khichdi by EatFit",
//         "cloudinaryImageId": "6e44fd7f1e5cd9967edfe47c10247671",
//         "locality": "Chuna Mandi",
//         "areaName": "Paharganj",
//         "costForTwo": "₹200 for two",
//         "cuisines": [
//           "Home Food",
//           "Indian",
//           "North Indian",
//           "Healthy Food",
//           "Snacks",
//           "Desserts",
//           "Rajasthani",
//           "South Indian",
//           "Maharashtrian",
//           "Sweets"
//         ],
//         "avgRating": 4.5,
//         "veg": true,
//         "parentId": "319582",
//         "avgRatingString": "4.5",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 32,
//           "lastMileTravel": 4.4,
//           "serviceability": "SERVICEABLE",
//           "slaString": "30-35 mins",
//           "lastMileTravelString": "4.4 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-04-17 23:45:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "v1695133679/badges/Pure_Veg111.png",
//               "description": "pureveg"
//             }
//           ],
//           "textExtendedBadges": [
//             {
//               "iconId": "guiltfree/GF_Logo_android_3x",
//               "shortDescription": "brand",
//               "fontColor": "#7E808C"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "pureveg",
//                     "imageId": "v1695133679/badges/Pure_Veg111.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "",
//                     "fontColor": "#7E808C",
//                     "iconId": "guiltfree/GF_Logo_android_3x",
//                     "shortDescription": "brand"
//                   }
//                 }
//               ]
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "50% OFF",
//           "subHeader": "UPTO ₹100"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         }
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/great-indian-khichdi-by-eatfit-chuna-mandi-paharganj-delhi-258198",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "581107",
//         "name": "Nirula's",
//         "cloudinaryImageId": "a66fa8f5befa65947d9e20f29a863ce0",
//         "locality": "Jawahar Nagar",
//         "areaName": "Kamla Nagar",
//         "costForTwo": "₹500 for two",
//         "cuisines": [
//           "Ice Cream",
//           "Pizzas",
//           "Fast Food"
//         ],
//         "avgRating": 4.4,
//         "parentId": "1738",
//         "avgRatingString": "4.4",
//         "totalRatingsString": "100+",
//         "sla": {
//           "deliveryTime": 27,
//           "lastMileTravel": 5,
//           "serviceability": "SERVICEABLE",
//           "slaString": "25-30 mins",
//           "lastMileTravelString": "5.0 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-04-17 23:00:00",
//           "opened": true
//         },
//         "badges": {
//           "textExtendedBadges": [
//             {
//               "iconId": "guiltfree/GF_Logo_android_3x",
//               "shortDescription": "options available",
//               "fontColor": "#7E808C"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
              
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "",
//                     "fontColor": "#7E808C",
//                     "iconId": "guiltfree/GF_Logo_android_3x",
//                     "shortDescription": "options available"
//                   }
//                 }
//               ]
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "30% OFF",
//           "subHeader": "UPTO ₹75"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         }
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/nirulas-jawahar-nagar-kamla-nagar-delhi-581107",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "21301",
//         "name": "Barista Coffee",
//         "cloudinaryImageId": "b64bf721e12e7b3df82c832898999c51",
//         "locality": "Connaught Place",
//         "areaName": "Connaught Place",
//         "costForTwo": "₹350 for two",
//         "cuisines": [
//           "Beverages",
//           "Snacks",
//           "Desserts"
//         ],
//         "avgRating": 4.4,
//         "parentId": "2359",
//         "avgRatingString": "4.4",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 29,
//           "lastMileTravel": 4.8,
//           "serviceability": "SERVICEABLE",
//           "slaString": "25-30 mins",
//           "lastMileTravelString": "4.8 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-04-17 22:00:00",
//           "opened": true
//         },
//         "badges": {
//           "textExtendedBadges": [
//             {
//               "iconId": "guiltfree/GF_Logo_android_3x",
//               "shortDescription": "options available",
//               "fontColor": "#7E808C"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
              
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "",
//                     "fontColor": "#7E808C",
//                     "iconId": "guiltfree/GF_Logo_android_3x",
//                     "shortDescription": "options available"
//                   }
//                 }
//               ]
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "50% OFF",
//           "subHeader": "UPTO ₹90"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         }
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/barista-coffee-connaught-place-delhi-21301",
//         "type": "WEBLINK"
//       }
//     },
//     {
//       "info": {
//         "id": "789690",
//         "name": "FNP Cakes By Ferns N Petals",
//         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/16/700acfd8-ccaf-4535-9391-88231a309984_789690.jpg",
//         "locality": "Under Hill Road",
//         "areaName": "Civil Lines",
//         "costForTwo": "₹499 for two",
//         "cuisines": [
//           "Bakery"
//         ],
//         "avgRating": 4.1,
//         "veg": true,
//         "parentId": "339638",
//         "avgRatingString": "4.1",
//         "totalRatingsString": "10+",
//         "sla": {
//           "deliveryTime": 42,
//           "lastMileTravel": 4.1,
//           "serviceability": "SERVICEABLE",
//           "slaString": "40-45 mins",
//           "lastMileTravelString": "4.1 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-04-17 21:45:00",
//           "opened": true
//         },
//         "badges": {
          
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
              
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "50% OFF",
//           "subHeader": "UPTO ₹100"
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "isNewlyOnboarded": true,
//         "restaurantOfferPresentationInfo": {
          
//         }
//       },
//       "analytics": {
        
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/fnp-cakes-by-ferns-n-petals-under-hill-road-civil-lines-delhi-789690",
//         "type": "WEBLINK"
//       }
//     },
// ];

const Body = () => {
    // Locat state variable - Super powerful variable
    const [ListOfRestaurants,setListOfRestaurant]  = useState(resList);
    const [filteredRestaurant,setFilteredRestaurant] = useState(resList);

    const [searchText, setSearchText] = useState(" ");

    //const RestaurantCardPromoted = withPromotedLable(RestaurantCard);

    console.log("Body render",ListOfRestaurants);
    

    useEffect(()=>{
       fetchData();

    },[]);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&collection=80476&tags=layout_BAU_Contextual%2Cparatha%2Cads_pc_paratha&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
        );
        const json = await data.json();
        console.log(json);
        //setListOfRestaurant(json.data.cards[5])
        //setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // const arrayOfCards = json?.data?.cards;
        // const restaurantListing = "restaurant_grid_listing";


        //console.log(json);

        // for (const cardObj of arrayOfCards) {
        //     if (cardObj?.card?.card && cardObj?.card?.card?.id === restaurantListing) {
        //       const resData =
        //       cardObj.card?.card?.gridElements?.infoWithStyle?.restaurants;
        //       setListOfRestaurants(resData);
        //       setFilteredRestaurant(resData);
        //     }
        //   }


        
    };
    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false)
    return(
        <h1>
            Looks like you are offline!! Please check your internet connection;
        </h1>


    );
    const{loggedInUser,setUserName} = useContext(UserContext);


    

    return ListOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input 
                    type="text" 
                    className="border border-solid border-black"
                     value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                    />
                        <button
                        className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                        onClick={()=>{
                            console.log(searchText);

                            const filteredRestaurant= ListOfRestaurants.filter(
                                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())

                            );
                            setFilteredRestaurant(filteredRestaurant);


                        }}>Search</button>
                    
                </div>
                <div className="search m-4 p-4 flex items-center">
                <button 
                className="px-4 py-2 bg-gray-100 rounded-lg" 
                onClick={() => {
                    const filteredList = ListOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.1
                    );
                    setListOfRestaurant(filteredList);
                    
                }} 

                >
                    Top Rated Restaurants
                     </button>

            </div>
            <div className="search m-4 p-4 flex items-center">
                <lable>Username : </lable>
                <input  className="border border-black p-2" 
                value={loggedInUser}

                onChange={(e) => setUserName(e.target.value)}/>
                {/* <button 
                className="px-4 py-2 bg-gray-100 rounded-lg" 
                onClick={() => {
                    const filteredList = ListOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.1
                    );
                    setListOfRestaurant(filteredList);
                    
                }} 
 
                >
                    Top Rated Restaurants
                     </button> */}

            </div>
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurant.map((restaurant) => (
                       
                        <RestaurantCard key={restaurant.info.id} 
                        resData={restaurant } />

                    ))
}
                
                
                
                </div>
                </div>
    );
};
export default Body;
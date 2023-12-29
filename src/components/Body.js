import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRest, setlistOfRest] = useState(resList);

  let listOfRestjs = [
    {
      data: {
        id: "334475",
        name: "KFC",

        totalRatingsString: "500+ ratings",
        cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],

        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 36,

        avgRating: "3.8",
        totalRatings: 500,
      },
    },
    {
      data: {
        id: "334476",
        name: "Dominos",

        totalRatingsString: "500+ ratings",
        cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],

        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 36,

        avgRating: "4.8",
        totalRatings: 500,
      },
    },
    {
      data: {
        id: "334479",
        name: "McD",

        totalRatingsString: "500+ ratings",
        cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],

        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 36,

        avgRating: "4.1",
        totalRatings: 500,
      },
    },
  ];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredListOfRest = listOfRest.filter(
              (res) => res.data.avgRating > 4
            );
            console.log(listOfRest);
            setlistOfRest(filteredListOfRest);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRest.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

import React, { useState } from "react";
//import Star from "./Star";


import { FaStar } from "react-icons/fa";
//automatically files the stars based upon the selected property
//the Star component renders an individual star and uses the selected property to fill it with the correct colour
const Star = ({ selected = false, onSelect = f => f }) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);

//creating an empty array, so I could supply the lenght of the array tha I want to create and I get a new array at that lenght
//used with the totalStars propertu to create an array of specific lenght, using the spread operator

const createArray = (lenght) => [...Array(lenght)];

export default function StarRating({ totalStars = 10 }) {
  const [selectedStars, setSelectedStars] = useState(0);   //state variable, holds the value of the user's rating
  return (
  <>
  {createArray(totalStars).map((n, i) => (
    <Star
    key={i}
    selected={selectedStars > i}
    onSelect={() => setSelectedStars(i + 1)}
    />
    ))}
    <p>
      {selectedStars} of {totalStars} stars
    </p>
  </>
  )
}

//once I have an arry, I can map over it and render the Star components.
//by default totalStars is equal to 10, which means that this component will render 10 grey stars. 




/* <FaStar color="red" />
        <FaStar color="red" />
        <FaStar color="red" />
        <FaStar color="grey" />
        <FaStar color="grey" /> */

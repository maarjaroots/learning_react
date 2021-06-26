 import React from "react";
import { FaStar } from "react-icons/fa";
// //automatically files the stars based upon the selected property
// //the Star component renders an individual star and uses the selected property to fill it with the correct colour

const Star = ({ selected = false, onSelect = f => f }) => {

    return (
   <FaStar color={selected ? "red" : "grey"} onClick={onSelect}/>
    )
};

 export default Star; 

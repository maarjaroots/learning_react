import React from "react";

export default function Ingredient({ amount, measurment, name}) {
    return (
        <li>
            {amount} {measurment} {name}
        </li>
    )
}
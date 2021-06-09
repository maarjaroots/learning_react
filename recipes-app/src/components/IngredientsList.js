import React from "react";
import Ingredient from "./Ingredients"

export default function IngredientsList({ list}) {
    return (
        <ul className="ingredients">
            {list.map((ingredient, i) => (
                <Ingredient key={i} {...ingredient} />
            ))}
        </ul>
    )
}

// <Ingredient {...ingredient} />  I'm using the spread operator
// withouth the spread operator it would be:
//<Ingredient
// amount={ingredient.amount}
// measurment={ingredient.measurment}
// name={ingredient.name}
// />
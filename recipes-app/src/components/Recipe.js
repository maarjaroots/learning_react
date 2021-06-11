import React from "react";
import IngredientList from "./IngredientsList";
import Instructions from "./Instructions"

export default function Recipe({ name, ingredients, steps }) {
  return (
    <section id={name.toLowerCase().replace(/ /g, "-")}>
      <h1>{name}</h1>
<IngredientList list={ingredients} />
<Instructions title="Cooking Instructions" steps={steps} />




{/* using components will save me writing this code */}
      {/* <ul className="ingredients">
        {ingredients.map((ingredient, i) => (
          <li key={i}>{ingredient.name}</li>
        ))}
      </ul>
      <section className="instructions">
        <h2>Cooking instructions</h2>
        {steps.map((step, i) => (
          <p key={i}>{step}</p>
        ))}
      </section> */}
    </section>
  );
}
export default Recipe;

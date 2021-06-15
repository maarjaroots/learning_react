import React from "react";  // Babel will convert import into ('moduel/path')
import { render } from "react-dom";
import Menu from "./components/Menu";  //import tree, will start imporing next component
import data from "./data/recipes.json";


render(<Menu recipes={data} />, document.getElementById("root"));
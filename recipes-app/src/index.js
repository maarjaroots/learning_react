import React from "react";  //Babel will convert import into require('module/path'), require function is how CommonJS modules are typically loaded
import {render} from "react-dom";
import Menu from "./components/Menu";
import data from "./data/recipes.json"


render(<Menu recipes={data} />, document.getElementById("root"));
//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let contador = 0;
setInterval(()=>{
    ReactDOM.render(<Home contador={contador} />, document.querySelector("#app"));
contador+=1;

},500)
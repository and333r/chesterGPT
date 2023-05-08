import React from "react";
import {Link} from "react-router-dom"
import logo from "./logo.svg";
import "./App.css";

const HomePage = () =>{
    return (
<div className="App">
      <h1 class="h1">ChesterGPT</h1>
      <h3 class="h3">¡Bienvenido, internauta!</h3>
      <header className="App-header">
      <div class="rectangle">
        <h3 class="h31">JAVA</h3>
        <div class="divindiv">
        <a class="a">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </a></div>
      <form action="/java" method="GET" class="form">
          <input type="submit" value="GENERATE" class="input"/>
      </form>
      </div>
      <div class="rectangle">
        <h3 class="h31">PYTHON</h3>
        <div class="divindiv">
        <a class="a">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </a></div>
      <form action="/python" method="GET" class="form">
          <input type="submit" value="GENERATE" class="input"/>
      </form>
      </div>
      <div class="rectangle">
        <h3 class="h31">JAVASCRIPT</h3>
        <div class="divindiv">
        <a class="a">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </a></div>
      <form action="/js" method="GET" class="form">
          <input type="submit" value="GENERATE" class="input"/>
      </form>
      </div>
      </header>
    </div>



    )

}

export default HomePage
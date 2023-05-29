import React from "react";
import {Link} from "react-router-dom"
import logo from "./logo.svg";
import "./App.css";

const HomePage = () =>{
    return (
<div className="App">
      <h1 class="h1">ChesterGPT</h1>
      <h3 class="h3">¡Bienvenido, internauta!</h3>
      <h3 class="h3"><a class="h3" href="/generador">Pinchame</a> para ver proyectos con tests generados por mi</h3>
      <p> Para leer acerca de los detalles del proyecto, picha <a href="/readme">aquí.</a></p>
      <header className="App-header">
      <div class="rectangle">
        <h3 class="h31">JAVA</h3>
        <div class="divindiv">
        <a class="a">Haciendo click en el botón de abajo, podrás generar los tests para una clase o 
        un método Java. Solo necesitarás tener el proyecto en algún repositorio público.
          </a></div>
      <form action="/java" method="GET" class="form">
          <input type="submit" value="GENERATE" class="input"/>
      </form>
      </div>
      <div class="rectangle">
        <h3 class="h31">PYTHON</h3>
        <div class="divindiv">
        <a class="a">Haciendo click en el botón de abajo, podrás generar 
        los tests para una clase o una función en el lenguaje Pyhton. Solo necesitarás tener el proyecto en algún repositorio público.
          </a></div>
      <form action="/python" method="GET" class="form">
          <input type="submit" value="GENERATE" class="input"/>
      </form>
      </div>
      <div class="rectangle">
        <h3 class="h31">JAVASCRIPT</h3>
        <div class="divindiv">
        <a class="a">Haciendo click en el botón de abajo, podrás generar 
        los tests para una clase o una función en el lenguaje JavaScript. Solo necesitarás tener el proyecto en algún repositorio público.
          </a></div>
      <form action="/javascript" method="GET" class="form">
          <input type="submit" value="GENERATE" class="input"/>
      </form>
      </div>
      </header>
    </div>



    )

}

export default HomePage
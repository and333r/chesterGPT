import React from "react";
import {Link} from "react-router-dom"
import logo from "./logo.svg";
import "./App.css";

const TestComparator = () =>{
    return (
<div className="App">
      <h1 class="h1">ChesterGPT</h1>
      <h3 class="h3">En esta página, podrás observar que tan bien o que tan mal genera ChesterGPT los tests. Clickando en "RESULTADOS", podrás observar las métricas de cada pryecto.</h3>
      <h6 class="h3">Todos los tests han sido generados mendiate esta herramienta.</h6>
      <header className="App-header">
      <div class="rectangle">
        <h3 class="h31">JAVA</h3>
        <div class="divindiv">
        <a class="a">Para comparar los <a href="https://app.codecov.io/gh/and333r/BetsProject-JSFandHibernate">tests originales</a> con los tests generados,
        se ha utilizado la herramienta CodeCov, que mide el porcentaje de covertura de los tests. Haciendo click
        en el botón inferior, serás redirigido al análisis de CodeCov del proyecto con los tests generados por
        ChesterGPT. 
          </a></div>
          <button id="myButton1" class="float-left submit-button" > <a href='https://app.codecov.io/gh/Mikeloon/BetsProject-JSFandHibernate'>RESULTADOS</a></button>
      </div>
      <div class="rectangle">
        <h3 class="h31">PYTHON</h3>
        <div class="divindiv">
        <a class="a">Para comparar los <a class=".a" href="https://app.codecov.io/gh/and333r/PythonExampleProject">tests originales</a> con los tests generados,
        se ha utilizado la herramienta CodeCov, que mide el porcentaje de covertura de los tests. Haciendo click
        en el botón inferior, serás redirigido al análisis de CodeCov del proyecto con los tests generados por
        ChesterGPT. 
          </a></div>
          <button id="myButton" class="float-left submit-button" ><a href='https://app.codecov.io/gh/Mikeloon/PythonExampleProject'>RESULTADOS</a></button>
      </div>
      <div class="rectangle">
        <h3 class="h31">JAVASCRIPT</h3>
        <div class="divindiv">
        <a class="a">Para comparar los <a class=".a" href="https://app.codecov.io/gh/and333r/Very-Basic-Node-JS-Project-With-Unit-Tests">tests originales</a> con los tests generados,
        se ha utilizado la herramienta CodeCov, que mide el porcentaje de covertura de los tests. Haciendo click
        en el botón inferior, serás redirigido al análisis de CodeCov del proyecto con los tests generados por
        ChesterGPT. 
          </a></div>
          <button id="myButton" class="float-left submit-button" ><a href='https://app.codecov.io/gh/Mikeloon/Very-Basic-Node-JS-Project-With-Unit-Tests'>RESULTADOS</a></button>
      </div>
      </header>
    </div>



    )

}

export default TestComparator
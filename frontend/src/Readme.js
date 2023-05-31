import React from "react";
import {Link} from "react-router-dom"
import logo from "./logo.svg";
import "./App.css";

const Readme = () =>{
    return (
      <div class="Appp">
      <h1 class="h1Readme">ChesterGPT</h1>
      <p class="pReadme">Este proyecto ha sido elaborado por los estudiantes de Ingeniería Informática Ander Caro y Mikel Lonbide, para el proyecto final de la asignatura HADS.
       La idea de este proyecto es estudiar la capacidad de la que dispone la popular herramienta chatGTP de generar tests para distintos lenguajes de programación.
       A continuación, nuestras conclusiones:
      </p>
      <ul>
        <li><p class="pReadme">
        ChatGPT no es capaz de generar tests para un proyecto entero, ya que cuando lee el link del repositorio, unicamente lee el código html de la página que le estamos indicando. Es por ello que como mucho (en la misma consulta), puede generar tests para una clase.
      </p></li>
      <li>
      <p class="pReadme">
      ChatGPT no es capaz de entender o analizar el funcionamiento de los métodos/clases de los que esta generando los tests, es por ello que habitualmente los tests generados por ChatGPT, lo unico que tienen en común con el código que le hemos indicado, es el nombre de la clase o el nombre del método.
      </p></li>
      </ul>
      <p class="pReadme">
      Por último, analizaremos paso por paso el funcionamiento de la aplicación:
      <ul>
        <li>Se le pide al usuario una clase/método para testear.</li>
        <li>Se genera un prompt para chatGTP con esa clase/método.</li>
        <li>Una vez obtenidos los tests, se genera un archivo con la clase que contiene los tests.</li>
        <li>Se vuelve a generar un prompt para ChatGPT con el link a las clase de los tests original (la que proporciona el usuario) y el tests generado por el. En el prompt, se le pide que compare analize los tests teniendo en cuenta distintas métricas. También se le pide que le diga al usuario como mejorar el test original.</li>
        <li>Se lleva toda la información generada por ChatGPT al fornt-end, para que pueda ser visualizada por el usuario.</li>
      </ul>
      </p>

    </div>



    )

}

export default Readme
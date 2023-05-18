import React, { useState } from "react";
import {Link, generatePath} from "react-router-dom"
import logo from "./logo.svg";
import "./App.css";

const JavaPage = () =>{
  const [prompt, setPrompt] = useState("")
  const [prompt2, setPrompt2] = useState("")
  const [prompt3, setPrompt3] = useState("")
  const [response, setResponse] = useState("")
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // Variable de estado para controlar el estado del botón
  const [isActive, setIsActive] = useState(false); // Variable de estado para controlar el estado del botón


  const handleGenerateText = async (event)=>{
    event.preventDefault()
    setIsButtonDisabled(true)
    setIsActive(true)
    const generatedText = await generateText(prompt, prompt2, prompt3)
    setIsButtonDisabled(false)
    setIsActive(false)
    setResponse(generatedText);
    const button = document.getElementById('button');
    button.setAttribute('disabled', false);
  }


  async function generateText(prompt, prompt2, prompt3){
    const response = await fetch("/chestergptjava", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ prompt: prompt, prompt2:prompt2, prompt3:prompt3 })
    });
    const data = await response.text();
    return data;
  }
  

  const handleInputChange = event => {
    setPrompt(event.target.value)
  }
  const handleInputChange2 = event => {
    setPrompt2(event.target.value)
  }
  const handleInputChange3 = event => {
    setPrompt3(event.target.value)
  }
  
    return (
      <div className="Appp">
      <form onSubmit={handleGenerateText}>
        <p>Rellene los siguientes campos (En caso de que el nombre del método quede vacío, se crearán tests para toda la clase):</p>
        <div className="form-group">
          <label htmlFor="linkRepo">Link del repositorio de la clase que desea probar:</label>
          <input name="linkRepo" id="linkRepo" type="text" value={prompt} onChange={handleInputChange} pattern="^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$" required />
        </div>
        <div className="form-group">
          <label htmlFor="nombreMetodo">Nombre del método del que desea generar los tests (opcional):</label>
          <input name="nombreMetodo" id="nombreMetodo" type="text" value={prompt2} onChange={handleInputChange2} />
        </div>
        <div className="form-group">
          <label htmlFor="idioma">Link del repositorio del tests que se desea comparar:</label>
          <input name="idioma" id="idioma" type="text" value={prompt3} onChange={handleInputChange3} required />
        </div>
        <button type="submit" className="btn btn-primary">Generar</button>
        
      </form>
      <form method="GET" action="/download">
        <button id="button" type="submit" className="btn btn-secondary" disabled={isButtonDisabled} >Descargar archivo generado</button>
      </form>
      {isActive && <div className="loader"></div>}
      <div dangerouslySetInnerHTML={{ __html: response }}></div>
      <p>Nota: Si se quiere probar con una clase con muchos métodos, es probable que no se genere correctamente.</p>
    </div>
    )

}



export default JavaPage
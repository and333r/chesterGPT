import React, { useState } from "react";
import {Link, generatePath} from "react-router-dom"
import logo from "./logo.svg";
import "./App.css";

const JavaPage = () =>{
  const [prompt, setPrompt] = useState("")
  const [response, setResponse] = useState("")

  const handleGenerateText = async (event)=>{
    event.preventDefault()
    const generatedText = await generateText(prompt)
    setResponse(generatedText);
  }

  async function generateText(prompt){
    const response = await fetch("/chestergpt", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ prompt: prompt })
    });
    const data = await response.text();
    return data;
  }
  

 

  const handleInputChange = event => {
    setPrompt(event.target.value)
  }
  
    return (
      <div className="App">
        <form onSubmit={handleGenerateText}>
          <input type="text" value={prompt} onChange={handleInputChange}/>
          <button type="submit">Submit</button>
        </form>∫
        <p>{response}</p>
      </div>
    )

}



export default JavaPage
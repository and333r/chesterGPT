const path = require('path');
const { Configuration, OpenAIApi } = require("openai");
const fs = require('fs');
const { Octokit } = require("@octokit/rest");
const folderPath = './tests'

const API_KEY= "YOUR_KEY"
async function generateTestMethod(link, method, idioma){
    const configuration = new Configuration({
      apiKey: API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo-0301",
      messages: [{role: "user", content: `Actua como si fueras un ingeniero en calidad de Software. 
                                          Prepara los tests que consideres necesarios (los métodos deben 
                                          estar cubierto al 100%) para probar el método ${method} que está 
                                          en la clase: ${link}. El proyecto está escrito en ${idioma}, como 
                                          respuesta dame unicmanete el codigo, y formatea el código para que 
                                          se vea bien en html (añadiendo las etiquetas html necesarias). 
                                          Acuerdate de añadir también los imports necesarios. Genera unica y exlusivamente código,
                                          ahorrate cualquier tipo de xplicacion y comentario.`}],
    });
    return completion.data.choices[0].message
  }
async function generateTestClass(link, idioma){
    const configuration = new Configuration({
      apiKey: API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo-0301",
      messages: [{role: "user", content: `Actua como si fueras un ingeniero en calidad de Software. 
                                          Prepara los tests que consideres necesarios (los métodos 
                                          deben estar cubierto al 100%) de la clase: ${link}. El 
                                          proyecto está escrito en ${idioma}, haz los tests en ese 
                                          lenguaje. Al emepezar a escribir el código de los tests 
                                          añade un comentario con START al incio y otro comentario 
                                          con FINAl al final, y el paquete donde estará almacenado 
                                          temdra como nombre tests. Genera unica y exlusivamente código,
                                          ahorrate cualquier tipo de xplicacion y comentario.`}],
    });
    return completion.data.choices[0].message
  }
async function generateTestClassWeb(link, idioma){
    const configuration = new Configuration({
      apiKey: API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo-0301",
      messages: [{role: "user", content: ` Actua como si fueras un ingeniero en calidad de Software. 
                                          Identifica que es lo que hace cada función de la clase y en base a eso,
                                          prepara los tests que consideres necesarios (los métodos 
                                          deben estar cubierto al 100%) de la clase: ${link}. El 
                                          proyecto está escrito en ${idioma}, haz los tests en ese 
                                          lenguaje. Al emepezar a escribir el código de los tests 
                                          añade un comentario con START al incio y otro comentario 
                                          con FINAl al final, y el paquete donde estará almacenado 
                                          temdra como nombre tests. Genera unica y exlusivamente código,
                                          ahorrate cualquier tipo de xplicacion y comentario.
                                          

      `}],
    });
    return completion.data.choices[0].message 
  }
  async function generateTestClassWebMethod(link, idioma, metodo){
    const configuration = new Configuration({
      apiKey: API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo-0301",
      messages: [{role: "user", content: ` Actua como si fueras un ingeniero en calidad de Software. 
                                          Identifica que es lo que hace la función ${metodo} y en base a eso,
                                          prepara los tests que consideres necesarios (los métodos 
                                          deben estar cubierto al 100%) de la clase: ${link}. El 
                                          proyecto está escrito en ${idioma}, haz los tests en ese 
                                          lenguaje. Al emepezar a escribir el código de los tests 
                                          añade un comentario con START al incio y otro comentario 
                                          con FINAl al final, y el paquete donde estará almacenado 
                                          temdra como nombre tests. Genera unica y exlusivamente código,
                                          ahorrate cualquier tipo de xplicacion y comentario.
                                          

      `}],
    });
    return completion.data.choices[0].message 
  }

async function compareTests(PROMPT, linkTest, code){
    const configuration = new Configuration({
      apiKey: API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo-0301",
      messages: [{role: "user", content: `Compara los tests "${linkTest}" y "${PROMPT}" en términos de claridad,
                                           cobertura, eficiencia y mantenibilidad. Analiza cada aspecto en una lista 
                                           con al menos cinco puntos por cada uno. Luego, proporciona una sección adicional
                                            donde se identifiquen posibles mejoras para el primer test, el cual será referido
                                             como "el test generado por mí". Incluye ejemplos concretos.
                                             A continuación, se presenta el resumen del prompt para cumplir con los requisitos mencionados:
                                             <ul>
                                             <li>Aspecto 1<li/>
                                                <ul>
                                                <li>punto 1 <li/>
                                                <ul/>
                                            <div style="background-color: #efefef;">
                                            <pre><code>${code}</code></pre>
                                            </div>
                                            Ten en cuenta que este resumen no incluye los puntos específicos de cada aspecto, ya que deberán
                                             ser agregados en su respectivo lugar. También hay que sustituir el Aspecto por los terminos anteriormente
                                             mencionados
`}],
    });
    return completion.data.choices[0].message
  }
  //funcion para guardar el test de chatgpt en archivo java
function CreateFile(content,extension) {
    const filePath = `${folderPath}/example${extension}`;
    fs.writeFileSync(filePath, content);
    console.log(`Archivo Java guardado en: ${filePath}`);
  }
  module.exports={CreateFile,generateTestMethod,generateTestClass,generateTestClassWeb,compareTests, generateTestClassWebMethod}
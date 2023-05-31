const path = require('path');
const { Configuration, OpenAIApi } = require("openai");
const fs = require('fs');
const { Octokit } = require("@octokit/rest");
const folderPath = './tests'

async function generateTestMethod(link, method, idioma){
    const configuration = new Configuration({
      apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
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
      apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
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
      apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
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
      apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
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
      apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: `Compara este test: ${linkTest} con el test que tu has 
                                          generado ${PROMPT}. Realiza un analisis detallado de cual 
                                          es mejor test en tu opinion. La comparación debe dar tu opinión
                                          sobre: Claridad, covertura, eficiencia y mantenibilidad.
                                          formatea la respuesta dentro de un <div> html, y cuando analices
                                          los cuatro apartados anteriores, añadelos a una <ul>, con un
                                          <li> por cada aspecto. Por cada elemento a analizar que
                                          te hedicho anteriormente, analiza un mínimo de cinco puntos
                                          por cada uno. También, en un parrafo aparte, quiero que
                                          digas que cambiarias del primer test con el fin de mejorarlo, dando
                                          ejemplos concretos. Cuando vayas a referirte al test generado, 
                                          refierete a el como: el test generado por mi.
                                          
                                          También, al final de tu análisis, en un div aparte, añade siempre este código: ${code}. De tal manera
                                          que se vea en html exactamente igual que en el lenguaje en el que esta
                                          escrito, es decir, formatea el código para que no exista diferencia entre 
                                          como se ve en un archivo fuente de ese lenguaje y html. Para ello,
                                          utiliza este formato: 
                                          <div style="background-color: #efefef;"><pre><code>${code}</code></pre></div>`}],
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
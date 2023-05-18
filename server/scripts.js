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
      messages: [{role: "user", content: `Actua como si fueras un ingeniero en calidad de Software. Prepara los tests que consideres necesarios (los métodos deben estar cubierto al 100%) del método ${method} que está en la clase: ${link}. El proyecto está escrito en ${idioma}, haz los tests en ese lenguaje. Al emepezar a escribir el código de los tests añade un comentario con START al incio y otro comentario con FINAl al final. Como respuesta dame unicmanete le codigo.`}],
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
      messages: [{role: "user", content: `Actua como si fueras un ingeniero en calidad de Software. Prepara los tests que consideres necesarios (los métodos deben estar cubierto al 100%) de la clase: ${link}. El proyecto está escrito en ${idioma}, haz los tests en ese lenguaje. Al emepezar a escribir el código de los tests añade un comentario con START al incio y otro comentario con FINAl al final, y el paquete donde estará almacenado temdra como nombre tests`}],
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
      messages: [{role: "user", content: `Actua como si fueras un ingeniero en calidad de Software. Prepara los tests que consideres necesarios (los métodos deben estar cubierto al 100%) de la clase: ${link}. El proyecto está escrito en ${idioma}, haz los tests en ese lenguaje. Al emepezar a escribir el código de los tests añade un comentario con START al incio y otro comentario con FINAl al final, y el paquete donde estará almacenado temdra como nombre tests. Haz los tests con puppeteer.`}],
    });
    return completion.data.choices[0].message
  }

async function compareTests(PROMPT, linkTest){
    const configuration = new Configuration({
      apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: `Compara este test: ${linkTest} con el test que tu has generado ${PROMPT}. Realiza un analisis detallado de cual es mejor test en tu opinion.`}],
    });
    return completion.data.choices[0].message
  }
  //funcion para guardar el test de chatgpt en archivo java
function CreateFile(content,extension) {
    const filePath = `${folderPath}/example${extension}`;
    fs.writeFileSync(filePath, content);
    console.log(`Archivo Java guardado en: ${filePath}`);
  }
  module.exports={CreateFile,generateTestMethod,generateTestClass,generateTestClassWeb,compareTests}
const express = require("express");
const path = require('path');
const { Octokit } = require("@octokit/rest");
const {generateTestMethod, generateTestClass, generateTestClassWeb,compareTests, CreateFile} =require('./scriptsJavaPython.js')

const PORT = process.env.PORT || 3001

const app = express()
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../chester/build')));

//Constante donde estara la ruta a la carpeta con los test generados por chatgpt
const folderPath = './tests'

//Añadir las preguntas a realizar para generar test con chatgpt
const JTestQuestion = 'INSERTAR PREGUNTA'


// Configura la autenticación de GitHub

const octokit = new Octokit({
  auth: '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' // TO DO Reemplaza con tu token de acceso de GitHub
})

app.get("/api", (req,res)=>{
    res.json({message:"Hola desde el servidor!"})
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../chester/build', 'index.html'));
  });

//Al cargar la pagina se hace la comunicacion con chatgpt para generar sus test
app.get('/java', async (req, res) => {
    try{

      /*
      console.log("Test generado correctamente")
      await uploadToGitHub()*/
      res.sendFile(path.resolve(__dirname, '../chester/build', 'index.html'));
    } catch(error){
      console.error('Error:', error)
    }
});

//Tras clickar el boton de la pagina de java, se realizaria la comparación entre test y se mostraria.
app.post('/java', async(req,res) =>{

})

app.get('/python', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../chester/build', 'index.html'));
});
app.get('/js', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../chester/build', 'index.html'));
});

app.post('/chestergptjava', async (req, res) =>{
    const link= req.body.prompt
    const nombreMetodo= req.body.prompt2
    const linkTest= req.body.prompt3
    comprobacion= link.split(".")
    if(comprobacion[comprobacion.length-1]=="java"){
    javaTest="hola"
    comparation="hola"
    if(nombreMetodo!=null){
      javaTest = await generateTestMethod(link, nombreMetodo, "java")
      CreateFile(javaTest['content'],".java")
    }
    else{
      javaTest = await generateTestClass(link, "java")
      CreateFile(javaTest['content'],".java")
    }

    if(linkTest.toLowerCase().includes("test")|linkTest.toLowerCase().includes("prueba")){
      comparation= await compareTests(javaTest['content'], linkTest, javaTest['content'])
      juntos= [comparation['content'], javaTest['content']]
    }
    else{
      juntos= ["Proporcione un test válido", javaTest['content']]
    }
    
    console.log(juntos)
    res.send(juntos)}
    else{
      
      res.send("Por favor, inserte una clase java.")
    }
})

app.post('/chestergptpython', async (req, res) =>{
  const link= req.body.prompt
  const nombreMetodo= req.body.prompt2
  const linkTest= req.body.prompt3
  comprobacion= link.split(".")
  if(comprobacion[comprobacion.length-1]=="py"){
  javaTest="hola"
  comparation="hola"
  if(nombreMetodo!=null){
    javaTest = await generateTestMethod(link, nombreMetodo, "python")
    CreateFile(javaTest['content'],".py")
  }
  else{
    javaTest = await generateTestClass(link, "python")
    CreateFile(javaTest['content'],".py")
  }

  if(linkTest.toLowerCase().includes("test")|linkTest.toLowerCase().includes("prueba")){
    comparation= await compareTests(javaTest['content'], linkTest, javaTest['content'])
    juntos= [comparation['content'], javaTest['content']]
  }
  else{
    juntos= ["Proporcione un test válido", javaTest['content']]
  }
  
  console.log(juntos)
  res.send(juntos)}
  else{
    
    res.send("Por favor, inserte una clase java.")
  }
})

app.post('/chestergptweb', async (req, res) =>{
  const link= req.body.prompt
  const nombreMetodo= req.body.prompt2
  const idioma= req.body.prompt3
  const linkTest= req.body.prompt4

  javaTest="hola"
  if(nombreMetodo!=null){
    javaTest = await generateTestMethod(link, nombreMetodo, idioma)
  }
  else{
    javaTest = await generateTestClass(link, idioma)
  }
  if(idioma=="python" || idioma =="python"){
    CreateFile(javaTest['content'],".py")
  }
  else if (idioma=="java" || idioma=="java"){
    CreateFile(javaTest['content'],".java")

  }
  else if (idioma=="JavaScript" || idoma=="js" || idioma=="javascript"){
    CreateFile(javaTest['content'], ".js")
  }
  const comparation= await compareTests(javaTest['content'], link, linkTest)
  res.send(comparation['content'])
})


app.get('/downloadjava', async (req, res) =>{
  res.download('./tests/example.java')
})

app.get('/downloadpython', async (req, res) =>{
  res.download('./tests/example.py')
})

app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`)
})








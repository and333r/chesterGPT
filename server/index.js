const express = require("express");
const path = require('path');
const { Configuration, OpenAIApi } = require("openai");
const fs = require('fs');
//const { Octokit } = require("@octokit/rest");


const PORT = process.env.PORT || 3001

const app = express()
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../chester/build')));

//Constante donde estara la ruta a la carpeta con los test generados por chatgpt
const folderPath = './tests'

//Añadir las preguntas a realizar para generar test con chatgpt
const JTestQuestion = 'INSERTAR PREGUNTA'


// Configura la autenticación de GitHub
/*
const octokit = new Octokit({
  auth: 'YOUR_GITHUB_ACCESS_TOKEN' // TO DO Reemplaza con tu token de acceso de GitHub
})
*/
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

app.post('/chestergpt', async (req, res) =>{
    const prompt= req.body.promp
    const javaTest = await generateTest(JTestQuestion)
    CreateJavaFile(javaTest['content'])
    res.send(javaTest['content'])
})
app.get('/download', async (req, res) =>{
  res.download('./tests/example.java')
})


async function generateTest(PROMPT){
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: "Actua como si fueras un ingeniero en calidad de Software. Prepara los tests JUnit 5 y mockito que consideres necesarios (los métodos deben estar cubierto al 100%) de la clase BLFacadeImplementation.java de este proyecto en github: https://github.com/Mikeloon/BetsProject-JSFandHibernate/tree/master/src/main/java/businessLogic. Al emepezar a escribir el código de los tests, escribe //%START_TEST% y al acabar, escribe //$END_TEST% y el paquete donde estará almacenado temdra como nombre tests"}],
  });
  return completion.data.choices[0].message
}

//funcion para guardar el test de chatgpt en archivo java
function CreateJavaFile(content) {
  const filePath = `${folderPath}/example.java`;
  fs.writeFileSync(filePath, content);
  console.log(`Archivo Java guardado en: ${filePath}`);
}

//Función para subir el archivo a un repositorio de GitHub, se le puede meter algun parametro como la ruta del archivo
async function uploadToGitHub() {
  const filePath = `${folderPath}/Example.java`
  const content = fs.readFileSync(filePath, 'utf8')

  const response = await octokit.repos.createOrUpdateFileContents({
    owner: 'TU_USUARIO',  //Añadir datos que faltan
    repo: 'TU_REPOSITORIO', //TO DO
    path: 'ruta/al/archivo/Example.java', //TO DO
    message: 'Agregar archivo Example.java',
    content: Buffer.from(content).toString('base64')
  })

  console.log(`Archivo subido a GitHub: ${response.data.html_url}`)
}

app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`)
})








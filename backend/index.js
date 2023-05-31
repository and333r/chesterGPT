const express=require("express")
const path = require('path');

const PORT = process.env.PORT || 3001

const app = express()
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../frontend/build')));


app.get("/api", (req,res)=>{
    res.json({message:"Hola desde el servidor!"})
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
  });

//Al cargar la pagina se hace la comunicacion con chatgpt para generar sus test
app.get('/java', async (req, res) => {
    try{

      /*
      console.log("Test generado correctamente")
      await uploadToGitHub()*/
      res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
    } catch(error){
      console.error('Error:', error)
    }
});
app.get('/python', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});
app.get('/javascript', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});

app.get('/generador', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});
app.get('/readme', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});

app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`)
})
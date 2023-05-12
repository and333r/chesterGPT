const express = require("express");
const path = require('path');
const { Configuration, OpenAIApi } = require("openai");


const PORT = process.env.PORT || 3001

const app = express()
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../chester/build')));

app.get("/api", (req,res)=>{
    res.json({message:"Hola desde el servidor!"})
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../chester/build', 'index.html'));
  });

app.get('/java', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../chester/build', 'index.html'));
});
app.get('/python', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../chester/build', 'index.html'));
});
app.get('/js', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../chester/build', 'index.html'));
});

app.post('/chestergpt', async (req, res) =>{
    const prompt= req.body.promp
    const response= await getResponseFromChatGPT(prompt)
    res.send(response)
})

async function getResponseFromChatGPT(prompt) {
  const configuration = new Configuration({
    apiKey: "//TODO Aqui hay que añadir la clave de la API de chatGPT",
  });
  const openai = new OpenAIApi(configuration);
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: "Hola chatty"}],
  });
  return completion.data.choices[0].message
}

app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`)
})








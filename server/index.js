const express = require("express");
const path = require('path');
const PORT = process.env.PORT || 3001

const app = express()

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
    res.sendFile(path.resolve(__dirname, '../chester/build', 'python.html'));
});
app.get('/js', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../chester/build', 'js.html'));
});

app.post('/chestergpt', async (req, res) =>{
    const prompt= req.body.promp
    const response= await getResponseFromChatGPT(prompt)
    res.send(response)
})

async function getResponseFromChatGPT(prompt) {
    const response = await fetch("https://api.openai.com/v1/engines/davinci-codex/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer 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`
      },
      body: JSON.stringify({
        prompt: prompt,
        max_tokens: 60,
        n: 1,
        stop: "\n"
      })
    });
    const data = await response.json();
    return data.choices[0].text.trim();
  }

app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`)
})
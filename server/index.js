const express=require("express")
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
    res.sendFile(path.resolve(__dirname, '../chester/build', 'java.html'));
});
app.get('/python', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../chester/build', 'python.html'));
});
app.get('/js', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../chester/build', 'js.html'));
});

app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`)
})
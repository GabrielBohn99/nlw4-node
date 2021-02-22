import express from 'express'

const app = express();

app.get('/', (req, res) => {
    return res.json({message: "Hello world"})
})

app.post("/", (req, res)=> {
    //Recebeu dados para salvar
    return res.json({message: "Dados salvos"})
})

app.listen(3333, () => console.log('Server is running!'))
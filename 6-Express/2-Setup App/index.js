import express from "express";

const app = express()

const port = 3000 //varivel ambiente

app.get('/', (req,resp)=>{
    resp.send('Olá mundo')
})

app.listen(port, ()=>{
    console.log(`App rodando na ${port}` )
})
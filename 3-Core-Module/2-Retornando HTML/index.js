const http = require('http')

const port = 3000

const serve = http.createServer((req,res) => {
    res.statusCode = 200
    res.setHeader('Content-Type','text/html')
    res.end('<h1>Olá estamos retornando HTML com http</h1><p>Testando atualização</p>')
})

serve.listen(port, () => {
    console.log(`Serve está rodando na port ${port}`)
})
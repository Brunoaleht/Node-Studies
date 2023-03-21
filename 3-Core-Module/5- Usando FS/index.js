const http = require('http')
const fs = require('fs')

const port = 3000

const serve = http.createServer((req,res) => {
    fs.readFile('Menssage.html',function (err,data) {
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(data)
        return res.end()
    })
    
    //res.statusCode = 200
    //res.setHeader('Content-Type','text/html')
})

serve.listen(port, () => {
    console.log(`Serve está rodando na port ${port}`)
})
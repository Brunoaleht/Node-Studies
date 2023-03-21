const http = require('http')
const fs = require('fs')
const url = require('url')

const port = 3000

const serve = http.createServer((req,res) => {
    const q = url.parse(req.url, true)
    const filename = q.pathname.substring(1)
    
    if (filename.includes('html')){
        if(fs.existsSync(filename)){
            fs.readFile (filename,function (err,data) {
                res.writeHead(200, {'Content-Type':'text/html'})
                res.write(data)
                return res.end()
            })
        } else{
            fs.readFile ('404.html',function (err,data) {
                res.writeHead(404, {'Content-Type':'text/html'})
                res.write(data)
                return res.end()
            })
        }
    }
    //res.statusCode = 200
    //res.setHeader('Content-Type','text/html')
})

serve.listen(port, () => {
    console.log(`Serve está rodando na port ${port}`)
})
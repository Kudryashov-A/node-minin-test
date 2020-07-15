// const chalk = require('chalk')
// const text = require('./data')

// // console.log(chalk.blue(text))
// console.log(__dirname)
// console.log(__filename)
// // console.log(chalk.blue.bgRed.bold('Hello world!'))

const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, resp) => {
   // if (req.url == '/') {
   //    fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
   //       if (err) {
   //          throw err
   //       }
   //       resp.writeHead(200, {'Content-Type': 'text/html'})
   //       resp.end(data)
   //    })
   // } else if (req.url == '/contact') {
   //    fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
   //       if (err) {
   //          throw err
   //       }
   //       resp.writeHead(200, {'Content-Type': 'text/html'})
   //       resp.end(data)
   //    })
   // }

   let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
   const ext = path.extname(filePath)
   let contentType = 'text/html'

   switch (ext) {
      case '.css':
         contentType = 'text/css'
         break;
      case '.js':
         contentType = 'text/javascript'
         break;
      default:
         contentType = 'text/html'
   }

   if (!ext) {
      filePath += '.html'
   }

   fs.readFile(filePath, (err, content) => {
      if (err) {
         fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
            if (err) {
               resp.writeHead(500)
               resp.end('Error')
            } else {
               resp.writeHead(200, {'Content-Type': contentType})
               resp.end(data)
            }
         })
      } else {
         resp.writeHead(200, {'Content-Type': contentType})
      resp.end(content)
      }
   })
   
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
   console.log(`Server has been started on port ${PORT}...`)
})
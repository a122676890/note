const http = require('http')
const fs = require('fs')
const hostname = '127.0.0.1'
const port = 8080
const readFile = (file, options) => {
  let op = options ? options : 'utf-8'
  return new Promise((resolve, reject) => {
    fs.readFile(file, op, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}
http
  .createServer((req, res) => {
    if (req.url === '/a.js') {
      readFile('./a.js').then(data => {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        setTimeout(() => {
          res.write(data)
          res.end()
        }, 10000)
      })
    } else if (req.url === '/b.js') {
      readFile('./b.js').then(data => {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.write(data)
        res.end()
      })
    } else if (req.url === '/style.css') {
      readFile('./style.css').then(data => {
        res.writeHead(200, { 'Content-Type': 'text/css' })
        res.write(data)
        res.end()
      })
    } else if (req.url === '/index.html') {
      readFile('./index.html').then(data => {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)
        res.end()
      })
    }
  })
  .listen(port, hostname, () => {
    console.log('server listen :' + hostname)
  })

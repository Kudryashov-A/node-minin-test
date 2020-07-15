//File system
const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//    if (err) {
//       throw err
//    }

//    console.log('Папка создана')
// })

const filePath = path.join(__dirname, 'test', 'text.txt')

// fs.writeFile(filePath, 'Hello NodeJS', err => {
//    if (err) {
//       throw err
//    }

//    console.log('Файл успешно создан')
// })

// fs.appendFile(filePath, '\nHello again', err => {
//    if (err) {
//       throw err
//    }

//    console.log('Файл успешно изменён')
// })

fs.readFile(filePath, 'utf-8', (err, content) => {
   if (err) {
      throw err
   }

   // const data = Buffer.from(content)
   // console.log(data.toString())
   console.log(content)
})
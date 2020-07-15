const path = require('path')

console.log('Имя файла:', path.basename(__filename))
console.log('Расширение файла:', path.extname(__filename))

console.log('Имя папки:', path.dirname(__filename))

console.log('Parse:', path.parse(__filename).name)

console.log(path.join(__dirname, 'server', 'index.html'))
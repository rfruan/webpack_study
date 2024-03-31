//1. 加载fs 模块对象
const fs = require('fs')
//2. 写入文件内容
fs.writeFile('./test.txt', 'hello js', error => {
  if (error) {
    console.log(error)
  } else console.log('success')
})
//3. 读取文件内容
fs.readFile('./test.txt', (err, data) => {
  if (err) console.log(err)
  //data 是buffer 16进制数据流对象，toString()转换成字符串
  else console.log(data.toString())

})

// 内置变量获取目标文件的绝对路径 __dirname 
// path.join() 拼接路径
const path = require('path')
// console.log(path.join(__dirname, "/test.txt").toString())
const p = path.join(__dirname, "/test.txt")
console.log(p)
const fs = require('fs')
fs.readFile(p, (err, data) => {
  if (err) console.log(err)
  else console.log(data.toString())
})
const path=require('path')
const fs=require('fs')
const http=require('http')
const loadash=require('lodash')
const arr=[1,[2,[3,[4]]]]
console.log(loadash.flattenDeep(arr))

const func=(k)=>{
console.log(`${k} hello`)
  console.log(path.resolve(__dirname,"heloo","hello"))
  fs.writeFileSync('./text.txt',"hello",{flag:'a'})
  console.log(fs.readFileSync('./text.txt','utf8'))
  fs.readFile('./text.txt','utf8',(err,result)=>{
    console.log(result)
    console.log(err)
  })
}
const server=http.createServer((req,res)=>{
   res.write('hell');
   res.end('hello');
})
server.listen(3000);
//func("jt");

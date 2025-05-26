//modules
// const names=require('./module_1')
// const sayHi=require('./module_2')
// require('./addNum')
// console.log(names)
// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)


//int nfo abt current user 
// const user =os.userInfo()
// console.log(user)

//method returns the system uptime in seconds
// console.log(`the system uptime is ${os.uptime} seconds`)

// const currentOs={
//     name:os.type(),
//     release:os.release(),
//     totelMem:os.totalmem(),
//     freeMem:os.freemem(),
// }
// console.log(currentOs)

// const path=require('path')
// console.log(path.sep)

// const filePath=path.join('/content','subfile','text.txt')
// console.log(filePath)
// const base=path.basename(filePath)
// console.log(base)
// const absolute =path.resolve(__dirname,'content','subfolder','text.txt')
// console.log(absolute)


// const first=readFileSync('./content/first.txt','utf8')
// const second=readFileSync('./content/second.txt','utf8')
// // console.log(first, second)
// writeFileSync(
//     './content/result-sync',
//     `Here is the result : ${first}, ${second}`,
//     {flag:'a'}
// )



// const {readFile,writeFile}=require('fs')
// readFile('./content/first.txt','utf8',(err, result)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(result);
//     const first=result;
//     readFile('./content/second.txt','utf8',(err,result)=>{
//         if(err){
//             console.log(err)
//             return
//         }
//         const second=result
//         writeFile(
//             './content/result-async.txt',
//             `here is the result:${first},${second}`,
//             (err,result)=>{
//                 if(err){
//                     console.log(err)
//                     return
//                 }
//                 console.log(result)
//             }
//         )
//     })
// })


// const http=require('http')

// const server=http.createServer((req,res)=>{
//     if(req.url==='/'){
//         res.end('welcome to homepage')
//     }
//     else if(req.url==='/about'){
//         res.end('here is the short history')
//     }

//     else{
//         res.end(`
//         <h1>Oops!</h1>
//         <p>We can't seem to find the page that you are looking for </p>
//         <a href='/'>back home</a>
//         `)
//     }
// })

// server.listen(5000)

const _=require('lodash')
const items=[1,[2,[3,[4]]]]
const newItems=_.flatMapDeep(items)
console.log(newItems)
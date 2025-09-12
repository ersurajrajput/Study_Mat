// sync returns result while async dosent


const fs =  require("fs")
// fs.writeFileSync("test.txt","hey there")
// fs.writeFile("test.txt","hey there asnc", function (err) {
//     if (err) throw err;
    
// })
// const result = fs.readFileSync("test.txt","utf-8")
// console.log(result)
// fs.readFile("test.txt","utf-8",function (err,result){
//     if(err) throw err;
//     console.log (result)
// })
// fs.unlink("test.txt",function (err){
//     if (err) throw err
// })
// fs.appendFile("test.txt"," new data\n",function(err){
//     if(err) throw err
// })

// fs.readFile("test.txt","utf-8",function (err,result){
//     if(err) throw err
//     console.log(result)
// })

const a = fs.statSync("test.txt").isFile()
console.log(a)

// const fs=require("fs");
// fs.writeFile("ram1.txt", "I am ram from Bihar", (err)=>{
//     if(err) throw err;
//     console.log("create file!!");
// })



const fs=require("fs");
fs.unlink("ram1.txt", (err)=>{
    if(err) throw err;
    console.log("file delete!!");
})
const fs= require("fs");

fs.rename("ram.txt", "Rajesh.txt", (err)=>{
    if(err) throw err;
    console.log("file reanme!!");
})
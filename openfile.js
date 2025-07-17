const fs =require("fs");

fs.open("raju.pdf", "w", (err,file)=>{
    if(err) throw err;
    console.log("file create!!");
})
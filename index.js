import express from 'express';
import * as fs from 'node:fs';
import dotenv from'dotenv';
dotenv.config();
const app = express();
const PORT = process.env.PORT;
let date = Date();
let text=`Hi Welcome to Port ${PORT} and ${date}`;
fs.writeFile("current-data-time.txt",date,(err)=> {
    console.log("Completed writing!")
})
fs.readFile("./current-data-time.txt", "utf8", (err,data)=> {
    if (err) {
        console.log("something went wrong",err)
    }
    else {
        console.log(data);
    }
});
app.get('/', (req,res)=> {
    res.send(text);
})


app.listen(PORT,()=>console.log(`port Running on ${PORT}`));
import express from 'express';
import * as fs from 'node:fs';
const app = express();
const PORT = process.env.PORT;
let text='Hi Welcome to Port 4100';
let date = Date();
let result=fs.writeFile("current-data-time.txt",date,(err)=> {
    console.log("Completed writing!")
})
app.get('/', (req,res)=> {
    res.send(text);
})

app.listen(PORT,()=>console.log(`port Running on ${PORT}`));
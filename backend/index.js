// import https from 'https';
import express from 'express';
import cors from 'cors';
// import multer from "multer";
import { webGenerateContent, mlGenerateContent, cyberGenerateContent, personalizedChatbot } from './gemini.js';


var myApp = myApp || {};
const app = express();
app.use(cors())
app.use(express.json())
const port = 3001;
// const { generateContent } = require('./gemini');


// const upload = multer({storage})

// app.post('/upload', upload.single('file'), (req, res) => {
//     console.log(req.body)
//     console.log(req.file)
//     generateContent();

// })

// const gemini = generateContent()


// webGenerateContent() 
mlGenerateContent() 
// cyberGenerateContent()
// personalizedChatbot()


app.listen(port, () => {
    console.log(` listening on port ${port}`);});
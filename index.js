import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import uploader from './configs/multer.config.js';
import authorizer from './middlewares/authorizer.js';


/* Server Configurations */
const server = express();
server.use(express.static('static'))
server.use(cors());
dotenv.config();


/* Route Handlers */

server.post('/upload', authorizer, uploader.array('files'), (request, response) => {

    const sources = request.files.map(({ filename }) => {
        return filename;
    })

    response.json({ sources })
})


/*  Listening  */
server.listen(process.env.SERVER_PORT, () => {
    console.log('Server Running ... ');
})
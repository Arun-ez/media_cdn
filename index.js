import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import uploader from './configs/multer.config.js';
import authorizer from './middlewares/authorizer.js';
import { __dirname } from './dir.js';


/* Server Configurations */
const server = express();
server.use(cors());
dotenv.config();


/* Route Handlers */
server.get('/storage/files/:id', (request, response) => {

    const { id } = request.params;

    response.sendFile(path.join(__dirname, 'storage', id));
})

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
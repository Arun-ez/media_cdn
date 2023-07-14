import multer from "multer";
import { v4 as uuid } from 'uuid';

const parse_filename = (file) => {
    const extention = file.originalname.split('.')[1];
    const filename = `${uuid()}.${extention}`.split('-').join('');

    return filename;
}

/* Configuration for multer diskstorage */
const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, './static/storage/')
    },

    filename: (req, file, cb) => {
        cb(null, parse_filename(file));
    }
})

const uploader = multer({ storage: storage })

export default uploader;
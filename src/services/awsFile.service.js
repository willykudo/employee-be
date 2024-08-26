import AWS from 'aws-sdk'
import multer from 'multer'
import env from 'dotenv'
import fs from 'fs'
env.config()

const s3 = new AWS.S3({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

export const uploadFile = async (file) => {
    // Membaca file dari sistem file lokal
    const fileStream = fs.createReadStream(file.path);

    const params = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: `uploads/${Date.now()}-${file.originalname}`,
        Body: fileStream,
    };

    const uploadResult = await s3.upload(params).promise();

    return uploadResult;
};

const storage = multer.diskStorage({
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const max_File = 2000000;

export const multerUpload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {

        // // Validasi ekstensi file
        const allowedExtensions = ["jpg", "jpeg", "png"];
        const fileExtension = file.originalname.split(".").pop().toLowerCase();

        if (!allowedExtensions.includes(fileExtension)) {
            return cb(new multer.MulterError("INVALID_EXTENSION"), false);
        }

        cb(null, true);
    },
    // LIMIT IMAGE 2 MB
    limits: {
        fileSize: max_File
    }

})
export default s3;


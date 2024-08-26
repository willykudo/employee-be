import mongoose from 'mongoose'
import { v4 as uuidv4 } from 'uuid';

const resignNoticeSchema = mongoose.Schema({
    uId: {
        type: String,
        required: true,
        default: uuidv4,
        unique: true
    },
    supervisorLevel: {
        type: Number,
        required: true
    },
    employeeLevel: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true,
        versionKey: false
    })

const ResignNoticeModel = mongoose.model("resignNotice", resignNoticeSchema)
export default ResignNoticeModel;
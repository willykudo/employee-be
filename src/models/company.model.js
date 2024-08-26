import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';

const companySchema = mongoose.Schema({
    uId: {
        type: String,
        required: true,
        default: uuidv4,
        unique: true
    },
    uenNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    companyImage: {
        required: false,
        type: []
    },
    companyName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    employeeHeadCount: {
        type: String,
        required: true,
    },
    industryField: {
        type: String,
        required: true,
    },
    notes: {
        type: String,
    },
    companyPhoneNumber: {
        type: Number,
        required: true
    },
    postalCode: {
        type: Number,
        required: true,
    },
    country: {
        type: String,
        required: true
    }

}, {
    timestamps: true,
    versionKey: false
})

const CompanyModel = mongoose.model("company", companySchema)
export default CompanyModel;
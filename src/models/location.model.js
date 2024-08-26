import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';

const locationSchema = mongoose.Schema({
    uId: {
        type: String,
        required: true,
        default: uuidv4,
        unique: true
    },
    organizationID: {
        type: String,
    },
    locationName: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    postalCode: {
        type: Number,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    departments: [{
        department: String,
        jobPosition: String
    }]
},
    {
        timestamps: true,
        versionKey: false
    })

const LocationModel = mongoose.model("location", locationSchema)
export default LocationModel;
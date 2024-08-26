import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';

const employeeStatusSchema = mongoose.Schema({
    uId: {
        type: String,
        required: true,
        default: uuidv4,
        unique: true
    },
    organizationID: {
        type: String,
        ref: "company",
    },
    employeeType: {
        type: String,
        required: true
    },
    postalCode: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true,
    },
    duration: {
        type: Date,
    },
},
    {
        timestamps: true,
        versionKey: false
    })

const EmployeeStatusModel = mongoose.model("employeeStatus", employeeStatusSchema)
export default EmployeeStatusModel;
import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';

const eventSchema = mongoose.Schema({
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
    nameEvent: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now(),
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    isCompanyHoliday: {
        type: Boolean,
        default: false
    },
    posterAttachment: [],
    note: {
        type: String,
    },
    location: {
        type: String,
        required: true
    }
},
    {
        timestamps: true,
        versionKey: false
    })

const EventModel = mongoose.model("event", eventSchema)
export default EventModel;
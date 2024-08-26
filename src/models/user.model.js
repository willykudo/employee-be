import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';


const userSchema = mongoose.Schema(
  {
    uId: {
      type: String,
      default: uuidv4,
      required: true,
      unique: true
    },
    organizationID: {
      type: String,
      required: true
    },
    userInformationID: {
      type: String,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid email",
      ],
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: [],
      default: ["Admin"],
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    photo: {
      type: [],
      required: false
    },
    gender: {
      type: String,
    },
    bloodTypes: {
      type: String,
    },
    religions: {
      type: String,
    },
    dateOfBirth: {
      type: Date
    },
    maritalStatus: {
      type: String,
    },
    address: {
      type: String,
    },
    country: {
      type: String,
    },
    postalCode: {
      type: Number,
    },
    reportTo: {
      type: String
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const UserModel = mongoose.model("User", userSchema);
export default UserModel;

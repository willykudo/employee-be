import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';
import { banks, covid19_Vaksination_Status, currencies, departments, hobbies, languages, paymentMethods, rate_Of_Pays, skills, job_Level } from '../../config/enumData.js'


const userInformationSchema = mongoose.Schema({
    uId: {
        type: String,
        required: true,
        default: uuidv4,
        unique: true
    },
    education: {
        school: String,
        grade: String,
        degree: String,
        startDate: Date,
        fieldOfStudy: String,
        endDate: Date,
    },
    hobbies: {
        type: [],
    },
    skills: {
        type: [],
    },
    languages: {
        type: [],
    },
    employeementDetail: {
        employeeStatus: {
            type: String,
        },
        reportTo: {
            type: String,
        },
        locations: {
            type: String,
        },
        joinDate: Date,
        endDate: Date,
        departments: {
            type: String,
        },
        leaveDetail: {
            leave: Boolean,
            leaveSettings: []
        },
        jobPosition: {
            type: String
        }
    },
    identificationDocument: {
        identificationType: String,
        identityExpiredDate: Date,
        nationality: String,
        identityNumber: Number,
        isPermanentDate: Boolean,
        covid19VaksinationStatus: String,
        attachments: [],
    },
    paymentDetail: {
        rateOfPays: String,
        banks: String,
        basicSalary: Number,
        currencies: String,
        numberAccount: Number,
        allowOvertime: Boolean,
        paymentMethods: String,
        accountName: String,
        cpfAccountNumber: String,
        monthlyAllowances: [
            {
                typeOfAllowance: String,
                amount: Number,
            }
        ]
    }
},
    {
        timestamps: true,
        versionKey: false
    }
)

const UserInformationModel = mongoose.model("userInformation", userInformationSchema)
export default UserInformationModel;

// {
//     leaveSettingID: String,
//     defaultAmount: Number,
//     gainPerMonth: Number,
//     expiredCarryOver: Number,
//     maxCarryOver: Number,
//     required: false
// },

// {
//     typeOfAllowance: {
//         type: String,
//     },
//     amount: Number
// }
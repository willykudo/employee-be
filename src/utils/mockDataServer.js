import { v4 as uuidv4 } from 'uuid';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import UserModel from '../models/user.model.js';
import EventModel from '../models/event.model.js';
import CompanyModel from '../models/company.model.js';
import EmployeeStatusModel from '../models/employeeStatus.model.js';
import LocationModel from '../models/location.model.js';
import ResignNoticeModel from '../models/resignNotice.model.js';
import UserInformationModel from '../models/userInformation.model.js';

// DATA EMPLOYEE ADMIN
const employeeUid = uuidv4();
export const dataAdmin = {
    uId: employeeUid,
    firstName: "leonardo",
    lastName: "leonardod",
    username: "leo@gss",
    email: "lero@gmail.com",
    password: "123456",
    phoneNumber: "0838383",
    role: "admin",
    jobLevel: "employee",
    photo: "https://your-uploaded-url.com"
}

// DATA EMPLOYEE REGULAR
const useruId = uuidv4();
export const dataUser = {
    uId: useruId,
    firstName: "leonardo",
    lastName: "leonardod",
    username: "ckrx@gss",
    email: "cakra@gmail.com",
    password: "password",
    phoneNumber: "0838383",
    role: "user",
    jobLevel: "employee"
}

// DATA COMPANY
const uIdCompany = uuidv4();
export const dataCompany = {
    uId: uIdCompany,
    uenNumber: "980808342",
    companyName: "pt.sempoerna hijau",
    address: "jl. kayu batubara no 12",
    employeeHeadCount: "2",
    industryField: "paper",
    notes: "a best waljdla lajsdlasalsd ljsada",
    phoneNumber: "0892882332",
    postalCode: "487744",
    country: "indonesia",
}

// DATA EVENT
const dataEventuId = uuidv4();
export const dataEvent = {
    uId: dataEventuId,
    nameEvent: "maintanance server",
    startDate: "05 jan 2020",
    endDate: "06 jan 2020",
    duration: "1",
    isCompanyHoliday: true,
    note: "this is note a first"
}

// DATA EMPPLOYEE STATUS
const employeeuId = uuidv4()
export const dataEmployeeStatus = {
    uId: employeeuId,
    employeeType: "freelance",
    postalCode: "47474",
    description: "this is description for employee status",
    duration: "19 jan 2024"
}

// LOCATION 
const locationUid = uuidv4()
export const dataLocation = {
    uId: locationUid,
    locationName: "cafe halim",
    country: "indonesia",
    postalCode: "35444",
    phoneNumber: "0838394923",
    address: "jl. jakarta bandung",
    color: "yellow",
    departments: [{
        departments: "business",
        jobPosition: "supervisor"
    }]
}

// RESIGN NOTICE
const resignUid = uuidv4()
export const dataResignNotice = {
    uId: resignUid,
    supervisorLevel: "1 jan 2024",
    employeeLevel: "5 jan 2024"
}

const userInformationUid = uuidv4()
export const dataUserInformation = {
    uId: userInformationUid,
    education: {
        school: "university ui",
        grade: "B+",
        degree: "Bachelor",
        startDate: "10 jan 2010",
        fieldOfStudy: "history",
        endDate: "14 mar 2023"
    },
    hobbies: "football",
    skills: "javascript",
    languages: "english",
    employeementDetail: {
        employeeStatus: "09b89ddb-60bf-464f-b39b-5b0c83b728ff",
        reportTo: "732777e1-d66f-49b1-80cd-41f0b7471efc",
        locations: "3e47e561-e269-412e-8bd9-86a5451042bd",
        joinDate: "12 jan 2000",
        departments: "supervisor",
        leaveDetail: {
            leave: "false",
            leaveSetting: {
                leaveSettingID: "12323",
                defaultAmount: "09657",
                gainPermonth: "78474",
                expiredCarryOver: "29038",
                maxCarryOver: "45589"
            }
        }
    },
    identificationDocument: {
        identificationType: "user",
        identityExpiredDate: "12 jan 1990",
        nationality: "amerika",
        identityNumber: "093838",
        isPermanentDate: false,
        covid19VaksinationStatus: "full",
        attachments: "[{}]"
    },
    paymentDetail: {
        rateOfPays: "montly",
        banks: "Bank Central Asia",
        basicSalary: "5920000",
        currencies: "Indonesia Rupiah(IDR)",
        numberAccount: "547843590",
        allowOverTime: "false",
        paymentMethods: "Bank transfer",
        accountName: "user12",
        cpfAccountNumber: "userDetail",
        montlyAllowance: {
            typeOfAllowance: "732777e1-d66f-49b1-80cd-41f0b7471efc",
            amount: "3"
        }
    }
}

export default function mockDataServer() {
    let mongoServer;

    beforeAll(async () => {
        mongoServer = await MongoMemoryServer.create();
        const mongoUri = mongoServer.getUri();
        await mongoose.connect(mongoUri);
        await new UserModel(dataAdmin).save()
        await new UserModel(dataUser).save()
        await new EventModel(dataEvent).save()
        await new CompanyModel(dataCompany).save()
        await new EmployeeStatusModel(dataEmployeeStatus).save()
        await new LocationModel(dataLocation).save()
        await new ResignNoticeModel(dataResignNotice).save()
        await new UserInformationModel(dataUserInformation).save()
    });

    afterAll(async () => {
        await mongoose.disconnect();
        await mongoServer.stop();
    });
}





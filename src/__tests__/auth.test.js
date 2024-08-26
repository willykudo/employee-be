import request from "supertest";
import app from "../../app.js";
import bcrypt from 'bcryptjs'
import { registerEmployeeController, registerCompanyController } from "../controllers/auth.controller.js";
import { dataAdmin, dataUser, dataCompany } from "../utils/mockDataServer.js";
import UserModel from "../models/user.model.js";
import jwt from 'jsonwebtoken'

// MODEL
const mockModel = {
    findOne: jest.fn(),
    create: jest.fn()
};

// BCRYPT
jest.mock('bcryptjs', () => ({
    hash: jest.fn().mockResolvedValue('hashedPassword'),
    compare: jest.fn().mockResolvedValue(true),
    genSalt: jest.fn().mockResolvedValue('saltValue'),
}));

jest.mock('aws-sdk', () => ({
    S3: jest.fn().mockImplementation(() => ({
        upload: jest.fn().mockReturnThis(),
        promise: jest.fn().mockResolvedValue({ Location: 'https://your-uploaded-url.com' }),
    })),
}));

jest.mock('jsonwebtoken', () => ({
    sign: jest.fn(),
}));

jest.mock('../models/user.model.js', () => ({
    findOne: jest.fn(),
    delete: jest.fn()
}));

afterAll(() => {
    jest.clearAllMocks();
});

// REGISTER EMPLOYEE
describe("POST /register employee", () => {
    beforeEach(() => {
        registerEmployeeController.model = mockModel
    })

    it("should return 500 register employee", async () => {

        const file = {
            originalname: 'example.jpg',
            buffer: Buffer.from('dummy content'),
        };

        mockModel.findOne.mockResolvedValue(null);
        mockModel.create.mockResolvedValue(dataAdmin)

        // Mocking bcrypt and uploadFile functions
        bcrypt.genSalt.mockResolvedValue('mockedSalt');
        bcrypt.hash.mockResolvedValue('mockedHash');
        jwt.sign.mockReturnValue('mocked_token');

        const res = await request(app)
            .post("/api/auth/registerEmployee")
            .field("username", "uuser balalals")
            .field("email", "user1@gmail.com")
            .field("password", "123456")
            .attach('photo', file.buffer, file.originalname)


        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('token', 'mocked_token');
    })

    it("should return 500 if the image is more than 1", async () => {

        const file = {
            originalname: 'example.jpg',
            buffer: Buffer.from('dummy content'),
        };

        mockModel.findOne.mockResolvedValue(null);
        mockModel.create.mockResolvedValue(dataAdmin)

        // Mocking bcrypt and uploadFile functions
        bcrypt.genSalt.mockResolvedValue('mockedSalt');
        bcrypt.hash.mockResolvedValue('mockedHash');
        jwt.sign.mockReturnValue('mocked_token');

        const res = await request(app)
            .post("/api/auth/registerEmployee")
            .field("username", "uuser balalals")
            .field("email", "user1@gmail.com")
            .field("password", "123456")
            .attach('photo', file.buffer, file.originalname)
            .attach('photo', file.buffer, file.originalname)

        expect(res.status).toBe(500);
    })


    it("should return 500 email already register", async () => {

        const file = {
            originalname: 'example.jpg',
            buffer: Buffer.from('dummy content'),
        };

        mockModel.findOne.mockResolvedValue(dataAdmin);
        mockModel.create.mockResolvedValue(dataAdmin)

        // Mocking bcrypt and uploadFile functions
        bcrypt.genSalt.mockResolvedValue('mockedSalt');
        bcrypt.hash.mockResolvedValue('mockedHash');

        const res = await request(app)
            .post("/api/auth/registerEmployee")
            .attach('photo', file.buffer, file.originalname)

        expect(res.body.msg).toBe("Email already registered!");
        expect(res.status).toBe(500);
    })

})

// REGISTER COMPANY
describe('POST /register company', () => {
    beforeEach(() => {
        registerCompanyController.model = mockModel
    })

    it("should return 200 register company success", async () => {

        const file = {
            originalname: 'example.jpg',
            buffer: Buffer.from('dummy content'),
        };

        mockModel.findOne.mockResolvedValue(null);
        mockModel.create.mockResolvedValue(dataCompany)

        // Mocking bcrypt and uploadFile functions
        bcrypt.genSalt.mockResolvedValue('mockedSalt');
        bcrypt.hash.mockResolvedValue('mockedHash');

        const res = await request(app)
            .post("/api/auth/registerCompany")
            .attach("companyImage", file.buffer, file.originalname)

        expect(res.status).toBe(200);
    })

    it("should return 500 if company already", async () => {

        const file = {
            originalname: 'examples.jpg',
            buffer: Buffer.from('dummy 2 content'),
        };

        mockModel.findOne.mockResolvedValue(dataCompany);
        mockModel.create.mockResolvedValue(dataCompany)

        // Mocking bcrypt and uploadFile functions
        bcrypt.genSalt.mockResolvedValue('mockedSalt');
        bcrypt.hash.mockResolvedValue('mockedHash');

        const res = await request(app)
            .post("/api/auth/registerCompany")
            .attach("companyImage", file.buffer, file.originalname)

        expect(res.status).toBe(500);
        expect(res.body.msg).toBe("Company already registered!");
    })
});

// LOGIN 
describe('POST /login', () => {

    it('should return 200 if login success as admin', async () => {
        await UserModel.findOne.mockResolvedValue({
            email: 'test@example.com',
            password: 'hashedPassword', // Hashed password from the database
            // Other necessary user data
        })

        bcrypt.compare.mockResolvedValue(true);
        jwt.sign.mockReturnValue('mocked_token');

        const res = await request(app)
            .post("/api/auth/login")
            .send({
                email: 'test@example.com',
                password: 'hashedPassword', // Hashed password from the database
                // Other necessary user data
            })

        expect(res.statusCode).toBe(200)
        expect(res.body).toHaveProperty('token', 'mocked_token');
        expect(res.body.msg).toBe('Login Success');

    });

    it('should return 500 if email not found', async () => {
        await UserModel.findOne.mockResolvedValue(null)

        bcrypt.compare.mockResolvedValue(true);
        jwt.sign.mockReturnValue('mocked_token');

        const res = await request(app)
            .post("/api/auth/login")
            .send(dataAdmin)

        expect(res.statusCode).toBe(500);
        expect(res.body.msg).toBe('Email Not Found!');
    });


});


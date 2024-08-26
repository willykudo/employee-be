import request from 'supertest'
import mockDataServer from '../utils/mockDataServer.js';
import app from "../../app.js";
import { dataUserInformation, dataAdmin } from '../utils/mockDataServer.js';
import userInformationController from '../controllers/userInformation.controller.js';

// DB SERVER
mockDataServer();

// MOCK FUNCTION
jest.mock('aws-sdk', () => ({
    S3: jest.fn().mockImplementation(() => ({
        upload: jest.fn().mockReturnThis(),
        promise: jest.fn().mockResolvedValue({ Location: 'https://your-uploaded-url.com' }),
    })),
}));

jest.mock('bcryptjs', () => ({
    hash: jest.fn().mockResolvedValue('hashedPassword'),
    compare: jest.fn().mockResolvedValue(true),
    genSalt: jest.fn().mockResolvedValue('saltValue'),
}));

// MODEL
const mockModel = {
    findOne: jest.fn(),
    create: jest.fn(),
    countDocuments: jest.fn(),
    find: jest.fn(),
    sort: jest.fn(),
    limit: jest.fn(),
    skip: jest.fn(),
    findOneAndUpdate: jest.fn(),
    findOneAndDelete: jest.fn()
};

let token;

beforeAll(async () => {
    userInformationController.model = mockModel

    const resBody = await request(app).post("/api/auth/login").send({ email: dataAdmin.email, password: dataAdmin.password })
    token = resBody.body.token
})

afterAll(() => {
    jest.clearAllMocks();
});

const endPoint = "/api/userInformation";

// CREATE USER INFORMATION
describe('POST /User information', () => {
    it('should return 200 if create User information success', async () => {


        mockModel.create.mockResolvedValue(dataUserInformation)

        // File
        const file = {
            originalname: 'example.jpg',
            buffer: Buffer.from('dummy content'),
        };

        // CREATE
        const res = await request(app)
            .post(endPoint)
            .set("Authorization", `Bearer ${token}`)
            .field('education', JSON.stringify(dataUserInformation.education))
            .field('employeementDetail', JSON.stringify(dataUserInformation.employeementDetail))
            .field('identificationDocument', JSON.stringify(dataUserInformation.identificationDocument))
            .field('paymentDetail', JSON.stringify(dataUserInformation.paymentDetail))
            .attach('identificationDocument.attachments', file.buffer, file.originalname)

        expect(res.statusCode).toBe(200)
    });

    it('should return 500 if create User information id already register', async () => {

        mockModel.create.mockResolvedValue(null)

        // File
        const file = {
            originalname: 'example.jpg',
            buffer: Buffer.from('dummy content'),
        };

        // CREATE
        const res = await request(app)
            .post(endPoint)
            .set("Authorization", `Bearer ${token}`)
            .field('education', JSON.stringify(dataUserInformation.education))
            .field('employeementDetail', JSON.stringify(dataUserInformation.employeementDetail))
            .field('identificationDocument', JSON.stringify(dataUserInformation.identificationDocument))
            .field('paymentDetail', JSON.stringify(dataUserInformation.paymentDetail))
            .attach('identificationDocument.attachments', file.buffer, file.originalname)

        expect(res.statusCode).toBe(500)
    });


})

// GET ALL USER INFORMATION
describe('GET /User information', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should return 200 if token valid', async () => {
        const totalDoc = 20;
        const totalPages = Math.ceil(totalDoc / 10);

        // Mock hasil countDocuments
        mockModel.countDocuments.mockResolvedValue(totalPages);

        // Mock hasil find
        mockModel.find.mockImplementation(() => ({
            sort: jest.fn().mockReturnThis(),
            limit: jest.fn().mockReturnThis(),
            skip: jest.fn().mockReturnThis(),
            exec: jest.fn().mockResolvedValue(dataUserInformation), // Mock exec untuk menyelesaikan rantai pemanggilan
        }));

        const res = await request(app)
            .get(endPoint)
            .set("Authorization", `Bearer ${token}`);

        expect(res.statusCode).toBe(200);
    })

    it('should return 500 if requested page is not found', async () => {
        const totalDoc = 20;
        const totalPages = Math.ceil(totalDoc / 10);

        // Mock hasil countDocuments
        mockModel.countDocuments.mockResolvedValue(null);

        const requestedPage = 100;

        const res = await request(app)
            .get(`${endPoint}/?pages=${requestedPage}`)
            .set("Authorization", `Bearer ${token}`)

        expect(res.statusCode).toBe(500)
        expect(res.body).toHaveProperty('message', 'This Page is not found!');
    });

    it('should return 403 if token not found', async () => {
        const totalDoc = 20;
        const totalPages = Math.ceil(totalDoc / 10);

        // Mock hasil countDocuments
        mockModel.countDocuments.mockResolvedValue(totalPages);

        // Mock hasil find
        mockModel.find.mockImplementation(() => ({
            sort: jest.fn().mockReturnThis(),
            limit: jest.fn().mockReturnThis(),
            skip: jest.fn().mockReturnThis(),
            exec: jest.fn().mockResolvedValue(dataUserInformation), // Mock exec untuk menyelesaikan rantai pemanggilan
        }));

        const res = await request(app)
            .get(endPoint)
            .set("Authorization", `Bearer invalidToken`);

        expect(res.statusCode).toBe(403);
    });

});

// GET ONE USER INFORMATION 
describe("GET /UserInformation:uId", () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should return 200 if valid token and User information exists", async () => {

        mockModel.findOne.mockResolvedValue(dataUserInformation)

        const userId = dataUserInformation.uId;

        const res = await request(app)
            .get(`${endPoint}/${userId}`)
            .set("Authorization", `Bearer ${token}`);

        expect(res.statusCode).toBe(200);
        expect(res.body.data).toHaveProperty("uId");
        expect(res.body.data.uId).toEqual(userId);
    });

    it('should return 500 if User information not found', async () => {
        mockModel.findOne.mockResolvedValue(null)

        const userId = dataUserInformation.uId;

        const res = await request(app)
            .get(`${endPoint}/${userId}`)
            .set("Authorization", `Bearer ${token}`);

        expect(res.statusCode).toBe(500)
    });

})

// UPDATE DATA USER INFORMATION
describe("PUT /User information", () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should return 200 if update success", async () => {


        mockModel.findOneAndUpdate.mockResolvedValue(dataUserInformation)

        const userId = dataUserInformation.uId;

        const res = await request(app)
            .put(`${endPoint}/${userId}`)
            .set("Authorization", `Bearer ${token}`)
            .field("hobbies", "reading")

        expect(res.statusCode).toBe(200)
    })

    it("should return 500 if User information not found", async () => {
        mockModel.findOneAndUpdate.mockResolvedValue(null)

        const userId = "Invalid id";

        const res = await request(app)
            .put(`${endPoint}/${userId}`)
            .set("Authorization", `Bearer ${token}`)
            .field("hobbies", "reading")

        expect(res.statusCode).toBe(500)
    })
})

// DELETE USER INFORMATION
describe('DELETE /Data userInformation', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should return 500 if delete failure", async () => {
        mockModel.findOneAndDelete.mockResolvedValue(null)

        const userId = "Invalid uId";

        const res = await request(app)
            .delete(`/api/user/${userId}`)
            .set("Authorization", `Bearer ${token}`)

        expect(res.statusCode).toBe(500)
    })

    it("should return 200 if delete success", async () => {
        mockModel.findOneAndDelete.mockResolvedValue(dataUserInformation)
        const userId = dataUserInformation.uId;

        const res = await request(app)
            .delete(`${endPoint}/${userId}`)
            .set("Authorization", `Bearer ${token}`)

        expect(res.statusCode).toBe(200)
    })


})
import request from 'supertest'
import mockDataServer from '../utils/mockDataServer.js';
import app from "../../app.js";
import { dataCompany, dataAdmin } from '../utils/mockDataServer.js';
import companyController from '../controllers/company.controller.js';

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
    companyController.model = mockModel

    const resBody = await request(app).post("/api/auth/login").send({ email: dataAdmin.email, password: dataAdmin.password })
    token = resBody.body.token

    return token;
})

afterAll(() => {
    jest.clearAllMocks();
});

const endPoint = "/api/company";

// CREATE COMPANY
describe('POST /company', () => {
    it('should return 200 if create company success', async () => {

        mockModel.findOne.mockResolvedValue(null)

        mockModel.create.mockResolvedValue(dataCompany)

        // File
        const file = {
            originalname: 'example.jpg',
            buffer: Buffer.from('dummy content'),
        };

        // CREATE
        const res = await request(app)
            .post(endPoint)
            .set("Authorization", `Bearer ${token}`)
            .attach('companyImage', file.buffer, file.originalname)

        expect(res.statusCode).toBe(200)
    });

    it('should return 500 if create company id already register', async () => {
        mockModel.findOne.mockResolvedValue(dataCompany)

        mockModel.create.mockResolvedValue(dataCompany)

        // File
        const file = {
            originalname: 'example.jpg',
            buffer: Buffer.from('dummy content'),
        };

        // CREATE
        const res = await request(app)
            .post(endPoint)
            .set("Authorization", `Bearer ${token}`)
            .attach('companyImage', file.buffer, file.originalname)

        expect(res.statusCode).toBe(500)
        expect(res.body).toEqual({ msg: 'Company already registered!' });

    });

    it('should return 500 if create company failure', async () => {
        mockModel.findOne.mockResolvedValue(null)

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
            .attach('companyImage', file.buffer, file.originalname)

        expect(res.statusCode).toBe(500)
    });


})

// GET ALL COMPANY
describe('GET /company', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should return 200 if token valid', async () => {
        const totalDoc = 20;
        const totalPages = Math.ceil(totalDoc / 10);

        // Mock result countDocuments
        mockModel.countDocuments.mockResolvedValue(totalPages);

        // Mock result find
        mockModel.find.mockImplementation(() => ({
            sort: jest.fn().mockReturnThis(),
            limit: jest.fn().mockReturnThis(),
            skip: jest.fn().mockReturnThis(),
            exec: jest.fn().mockResolvedValue(dataCompany), // Mock exec to complete the call chain
        }));

        const res = await request(app)
            .get(endPoint)
            .set("Authorization", `Bearer ${token}`);

        expect(res.statusCode).toBe(200);
    })

    it('should return 500 if requested page is not found', async () => {
        const totalDoc = 20;
        const totalPages = Math.ceil(totalDoc / 10);

        // Mock result countDocuments
        mockModel.countDocuments.mockResolvedValue(totalPages);

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
            exec: jest.fn().mockResolvedValue(dataCompany), // Mock exec untuk menyelesaikan rantai pemanggilan
        }));

        const res = await request(app)
            .get(endPoint)
            .set("Authorization", `Bearer invalidToken`);

        expect(res.statusCode).toBe(403);
    });

});

// GET ONE COMPANY
describe("GET /company:uId", () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should return 200 if valid token and company exists", async () => {

        mockModel.findOne.mockResolvedValue(dataCompany)

        const userId = dataCompany.uId;

        const res = await request(app)
            .get(`${endPoint}/${userId}`)
            .set("Authorization", `Bearer ${token}`);

        expect(res.statusCode).toBe(200);
        expect(res.body.data).toHaveProperty("uId"); // Adapt to your data structure
        expect(res.body.data.uId).toEqual(userId); // Adapt to your data property names
    });

    it('should return 500 if Company not found', async () => {
        mockModel.findOne.mockResolvedValue(null)

        const userId = dataCompany.uId;

        const res = await request(app)
            .get(`${endPoint}/${userId}`)
            .set("Authorization", `Bearer ${token}`);

        expect(res.statusCode).toBe(500)
    });

})

// UPDATE COMPANY
describe("PUT /company", () => {

    it("should return 200 if update success", async () => {


        mockModel.findOneAndUpdate.mockResolvedValue(dataCompany)

        const userId = dataCompany.uId;

        const res = await request(app)
            .put(`${endPoint}/${userId}`)
            .set("Authorization", `Bearer ${token}`)

        expect(res.statusCode).toBe(200)
    })

    it("should return 500 if user not found", async () => {
        mockModel.findOneAndUpdate.mockResolvedValue(null)

        const userId = "Invalid id";

        const res = await request(app)
            .put(`${endPoint}/${userId}`)
            .set("Authorization", `Bearer ${token}`)

        expect(res.statusCode).toBe(500)
    })
})

// DELETE COMPANY
describe('DELETE /company', () => {

    it("should return 500 if delete failure", async () => {
        mockModel.findOneAndDelete.mockResolvedValue(null)

        const userId = "Invalid uId";

        const res = await request(app)
            .delete(`/api/user/${userId}`)
            .set("Authorization", `Bearer ${token}`)

        expect(res.statusCode).toBe(500)
    })

    it("should return 200 if delete success", async () => {
        mockModel.findOneAndDelete.mockResolvedValue(dataCompany)
        const userId = dataCompany.uId;

        const res = await request(app)
            .delete(`${endPoint}/${userId}`)
            .set("Authorization", `Bearer ${token}`)

        expect(res.statusCode).toBe(200)
    })


})



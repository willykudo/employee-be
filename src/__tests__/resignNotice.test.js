import request from 'supertest'
import mockDataServer from '../utils/mockDataServer.js';
import app from "../../app.js";
import { dataResignNotice, dataAdmin, dataUser } from '../utils/mockDataServer.js';
import resignNoticeController from '../controllers/resignNotice.controller.js';

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
    resignNoticeController.model = mockModel

    const resBody = await request(app).post("/api/auth/login").send({ email: dataAdmin.email, password: dataAdmin.password })
    token = resBody.body.token
})

afterAll(() => {
    jest.clearAllMocks();
});

const endPoint = "/api/resignNotice";

// CREATE RESIGN NOTICE
describe('POST /Resign Notice', () => {
    it('should return 200 if create Resign notice success', async () => {

        mockModel.create.mockResolvedValue(dataResignNotice)

        // CREATE
        const res = await request(app)
            .post(endPoint)
            .set("Authorization", `Bearer ${token}`)
            .send(dataResignNotice)

        expect(res.statusCode).toBe(200)
    });

    it('should return 500 if create Resign Notice id already register', async () => {

        mockModel.create.mockResolvedValue(null)

        // CREATE
        const res = await request(app)
            .post(endPoint)
            .set("Authorization", `Bearer ${token}`)
            .send(dataResignNotice)

        expect(res.statusCode).toBe(500)
    });


})

// GET ALL RESIGN NOTICE
describe('GET /Location', () => {

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
            exec: jest.fn().mockResolvedValue(dataResignNotice), // Mock exec untuk menyelesaikan rantai pemanggilan
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
            exec: jest.fn().mockResolvedValue(dataResignNotice), // Mock exec untuk menyelesaikan rantai pemanggilan
        }));

        const res = await request(app)
            .get(endPoint)
            .set("Authorization", `Bearer invalidToken`);

        expect(res.statusCode).toBe(403);
    });

});

// GET ONE RESIGN NOTICE 
describe("GET /ResignNotice:uId", () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should return 200 if valid token and Resign Notice exists", async () => {

        mockModel.findOne.mockResolvedValue(dataResignNotice)

        const userId = dataResignNotice.uId;

        const res = await request(app)
            .get(`${endPoint}/${userId}`)
            .set("Authorization", `Bearer ${token}`);

        expect(res.statusCode).toBe(200);
        expect(res.body.data).toHaveProperty("uId");
        expect(res.body.data.uId).toEqual(userId);
    });

    it('should return 500 if Resign notice not found', async () => {
        mockModel.findOne.mockResolvedValue(null)

        const userId = dataResignNotice.uId;

        const res = await request(app)
            .get(`${endPoint}/${userId}`)
            .set("Authorization", `Bearer ${token}`);

        expect(res.statusCode).toBe(500)
    });

})

// UPDATE RESIGN NOTICE
describe("PUT /Resign notice", () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should return 200 if update success", async () => {


        mockModel.findOneAndUpdate.mockResolvedValue(dataResignNotice)

        const userId = dataResignNotice.uId;

        const res = await request(app)
            .put(`${endPoint}/${userId}`)
            .set("Authorization", `Bearer ${token}`)

        expect(res.statusCode).toBe(200)
    })

    it("should return 500 if Resign notice not found", async () => {
        mockModel.findOneAndUpdate.mockResolvedValue(null)

        const userId = "Invalid id";

        const res = await request(app)
            .put(`${endPoint}/${userId}`)
            .set("Authorization", `Bearer ${token}`)

        expect(res.statusCode).toBe(500)
    })
})
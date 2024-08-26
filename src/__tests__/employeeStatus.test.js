import request from 'supertest'
import mockDataServer from '../utils/mockDataServer.js';
import app from "../../app.js";
import { dataEmployeeStatus, dataAdmin } from '../utils/mockDataServer.js';
import employeeStatusController from '../controllers/employeeStatus.controller.js';

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
    employeeStatusController.model = mockModel

    const resBody = await request(app).post("/api/auth/login").send({ email: dataAdmin.email, password: dataAdmin.password })
    token = resBody.body.token
})

afterAll(() => {
    jest.clearAllMocks();
});

const endPoint = "/api/employeeStatus";

// CREATE EMPLOYEE STATUS
describe('POST /Employee Status', () => {
    it('should return 200 if create employee status success', async () => {

        mockModel.create.mockResolvedValue(dataEmployeeStatus)

        // CREATE
        const res = await request(app)
            .post(endPoint)
            .set("Authorization", `Bearer ${token}`)
            .send(dataEmployeeStatus)

        expect(res.statusCode).toBe(200)
    });

    it('should return 500 if create employee status id already register', async () => {

        mockModel.create.mockResolvedValue(null)

        // CREATE
        const res = await request(app)
            .post(endPoint)
            .set("Authorization", `Bearer ${token}`)
            .send(dataEmployeeStatus)

        expect(res.statusCode).toBe(500)
    });


})

// GET ALL EMPLOYEE STATUS
describe('GET /Employee Status', () => {

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
            exec: jest.fn().mockResolvedValue(dataEmployeeStatus), // Mock exec untuk menyelesaikan rantai pemanggilan
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
            exec: jest.fn().mockResolvedValue(dataEmployeeStatus), // Mock exec untuk menyelesaikan rantai pemanggilan
        }));

        const res = await request(app)
            .get(endPoint)
            .set("Authorization", `Bearer invalidToken`);

        expect(res.statusCode).toBe(403);
    });

});

// GET ONE EMPLOYEE STATUS
describe("GET /Employee Status:uId", () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should return 200 if valid token and Employee Status exists", async () => {

        mockModel.findOne.mockResolvedValue(dataEmployeeStatus)

        const userId = dataEmployeeStatus.uId;

        const res = await request(app)
            .get(`${endPoint}/${userId}`)
            .set("Authorization", `Bearer ${token}`);

        expect(res.statusCode).toBe(200);
        expect(res.body.data).toHaveProperty("uId");
        expect(res.body.data.uId).toEqual(userId);
    });

    it('should return 500 if Employee Status not found', async () => {
        mockModel.findOne.mockResolvedValue(null)

        const userId = dataEmployeeStatus.uId;

        const res = await request(app)
            .get(`${endPoint}/${userId}`)
            .set("Authorization", `Bearer ${token}`);

        expect(res.statusCode).toBe(500)
    });

})

// UPDATE EMPLOYEE STATUS
describe("PUT /Employee Status", () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should return 200 if update success", async () => {


        mockModel.findOneAndUpdate.mockResolvedValue(dataEmployeeStatus)

        const userId = dataEmployeeStatus.uId;

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

// DELETE EMPLOYEE STATUS
describe('DELETE /Employee Status', () => {

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
        mockModel.findOneAndDelete.mockResolvedValue(dataEmployeeStatus)
        const userId = dataEmployeeStatus.uId;

        const res = await request(app)
            .delete(`${endPoint}/${userId}`)
            .set("Authorization", `Bearer ${token}`)

        expect(res.statusCode).toBe(200)
    })


})
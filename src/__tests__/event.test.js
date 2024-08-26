import request from 'supertest'
import { dataAdmin, dataUser, dataEvent } from '../utils/mockDataServer.js';
import app from '../../app.js'
import { v4 as uuidv4 } from 'uuid';
import mockDataServer from '../utils/mockDataServer.js';
import eventController from '../controllers/event.controller.js';


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

const endPoint = "/api/event";

let token;

beforeAll(async () => {
    eventController.model = mockModel

    const resBody = await request(app).post("/api/auth/login").send({ email: dataUser.email, password: dataUser.password })
    token = resBody.body.token
})

// GET ALL
describe('GET /event', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should return 200 if get all data success', async () => {
        const totalDoc = 20;
        const totalPages = Math.ceil(totalDoc / 10);

        // Mock hasil countDocuments
        mockModel.countDocuments.mockResolvedValue(totalPages);

        // Mock hasil find
        mockModel.find.mockImplementation(() => ({
            sort: jest.fn().mockReturnThis(),
            limit: jest.fn().mockReturnThis(),
            skip: jest.fn().mockReturnThis(),
            exec: jest.fn().mockResolvedValue(dataUser), // Mock exec untuk menyelesaikan rantai pemanggilan
        }));

        const res = await request(app)
            .get(endPoint)
            .set("Authorization", `Bearer ${token}`)

        expect(res.statusCode).toBe(200)
    });

    it('should return 403 if token is invalid', async () => {
        const invalidToken = "invalid_token";

        const res = await request(app)
            .get(endPoint)
            .set("Authorization", `Bearer ${invalidToken}`);

        expect(res.statusCode).toBe(403);
    })

    it("should return 500 if page > totalpages", async () => {
        let pages = 2;

        const res = await request(app)
            .get(endPoint)
            .set("Authorization", `Bearer ${token}`)
            .query({ pages })

        expect(res.statusCode).toBe(500)
    })

})

// GET ONE EVENT
describe("GET /event:uId", () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should return user data if valid token and user exists", async () => {
        mockModel.findOne.mockResolvedValue(dataEvent)
        const eventuId = dataEvent.uId;


        const res = await request(app)
            .get(`${endPoint}/${eventuId}`)
            .set("Authorization", `Bearer ${token}`)

        expect(res.statusCode).toBe(200);
        expect(res.body.data).toHaveProperty("uId");
        expect(res.body.data.uId).toEqual(eventuId);
    });

    it("should return 403 if token is invalid", async () => {
        const eventuId = dataEvent.uId;
        const invalidToken = "invalid_token";

        const res = await request(app)
            .get(`${endPoint}/${eventuId}`)
            .set("Authorization", `Bearer ${invalidToken}`);

        expect(res.statusCode).toBe(403);
    });

    it("should return 500 if user not found", async () => {
        mockModel.findOne.mockResolvedValue(null)
        const eventuId = "invalid uId";

        const res = await request(app)
            .get(`${endPoint}/${eventuId}`)
            .set("Authorization", `Bearer ${token}`)

        expect(res.statusCode).toBe(500)
        expect(res.body.message).toBe("Resource not found")

    })

})

// CREATE EVENT
describe('POST /event', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should return 200 if create event success', async () => {

        mockModel.create.mockResolvedValue(dataEvent)

        // FIlE
        const file = {
            originalname: 'example.jpg',
            buffer: Buffer.from('dummy content'),
        };

        const uId = dataEvent.uId;

        // CREATE
        const res = await request(app)
            .post(endPoint)
            .set("Authorization", `Bearer ${token}`)
            .field("uId", `${uId}`)
            .field("nameEvent", "event1")
            .field("startDate", "5 jan 2020")
            .field("endDate", "6 jan 2020")
            .field("duration", "1")
            .field("isCompanyHoliday", "true")
            .field("note", "this is company holiday first")
            .attach("posterAttachment", file.buffer, file.originalname)

        expect(res.statusCode).toBe(200)
    });

    // IF SOMETHING WRONG REQUIRE EMAIL,TOKEN,NAME FIELD
    it('should return 500 if something wrong', async () => {
        // Lakukan pengujian pada fungsi uploadFile
        const file = {
            originalname: 'example.jpg',
            buffer: Buffer.from('dummy content'),
        };

        const uId = uuidv4()

        // CREATE
        const res = await request(app)
            .post(endPoint)
            .set("Authorization", `Bearer ${token}`)
            .field("uId", `${uId}`)
            .field("nameEvent", "event1")
            .field("startDate", "5 jan 2020")
            .field("endDate", "6 jan 2020")
            .field("duration", "1 day")
            // .field("isCompanyHoliday", true)
            // .field("note", "this is company holiday first")
            .attach('companyImage', file.buffer, file.originalname)

        expect(res.statusCode).toBe(500)
    });

})

// UPDATE USER
describe("PUT /event", () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should return 200 if update success", async () => {

        mockModel.findOneAndUpdate.mockResolvedValue(dataEvent)

        const eventuId = dataEvent.uId;

        const res = await request(app)
            .put(`${endPoint}/${eventuId}`)
            .set("Authorization", `Bearer ${token}`)

        expect(res.statusCode).toBe(200)
    })

    it("should return 500 if user not found", async () => {

        mockModel.findOneAndUpdate.mockResolvedValue(null)

        const eventuId = "Invalid id";

        const res = await request(app)
            .put(`${endPoint}/${eventuId}`)
            .set("Authorization", `Bearer ${token}`)

        expect(res.statusCode).toBe(500)
    })
})

// DELETE USER
describe('DELETE /event', () => {
    mockModel.findOneAndDelete.mockResolvedValue(null)

    it("should return 500 if delete failure", async () => {
        const eventuId = "Invalid uId";

        const res = await request(app)
            .delete(`${endPoint}/${eventuId}`)
            .set("Authorization", `Bearer ${token}`)

        expect(res.statusCode).toBe(500)
    })

    it("should return 200 if delete success", async () => {
        mockModel.findOneAndDelete.mockResolvedValue(dataEvent)
        const eventuId = dataEvent.uId;

        const res = await request(app)
            .delete(`${endPoint}/${eventuId}`)
            .set("Authorization", `Bearer ${token}`)

        expect(res.statusCode).toBe(200)
    })


})



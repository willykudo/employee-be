import request from "supertest";
import app from "../../app.js";
import userController from "../controllers/user.controller.js";
import mockDataServer, { dataUser, dataAdmin } from "../utils/mockDataServer.js";
import env from 'dotenv'
env.config();

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

const endPoint = "/api/user";

let token;

beforeAll(async () => {
  userController.model = mockModel

  const resBody = await request(app).post("/api/auth/login").send({ email: dataAdmin.email, password: dataAdmin.password })
  token = resBody.body.token

})

afterAll(() => {
  jest.clearAllMocks();
});


// CREATE EMPLOYEE
describe('POST /employee', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return 200 if create employee success', async () => {

    mockModel.findOne.mockResolvedValue(null)

    mockModel.create.mockResolvedValue(dataAdmin)

    // File
    const file = {
      originalname: 'example.jpg',
      buffer: Buffer.from('dummy content'),
    };

    // // CREATE
    const res = await request(app)
      .post("/api/user")
      .set("Authorization", `Bearer ${token}`)
      .attach('photo', file.buffer, file.originalname)

    expect(res.statusCode).toBe(200)
  });

  it('should return 500 if register failure', async () => {

    mockModel.findOne.mockResolvedValue(dataAdmin)

    mockModel.create.mockResolvedValue(dataAdmin)

    // File
    const file = {
      originalname: 'example.jpg',
      buffer: Buffer.from('dummy content'),
    };

    const res = await request(app)
      .post("/api/user")
      .set("Authorization", `Bearer ${token}`)
      .attach('photo', file.buffer, file.originalname)

    expect(res.statusCode).toBe(500)
  });


});

// GET ALL USER
describe('GET /user', () => {

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
      exec: jest.fn().mockResolvedValue(dataAdmin), // Mock exec untuk menyelesaikan rantai pemanggilan
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
      .get(`/api/user/?pages=${requestedPage}`)
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
      exec: jest.fn().mockResolvedValue(dataAdmin), // Mock exec untuk menyelesaikan rantai pemanggilan
    }));

    const res = await request(app)
      .get(endPoint)
      .set("Authorization", `Bearer invalidToken`);

    expect(res.statusCode).toBe(403);
  });

});

// GET ONE USER
describe("GET /user:uId", () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return 200 if valid token and user exists", async () => {

    mockModel.findOne.mockResolvedValue(dataAdmin)

    const userId = dataAdmin.uId;

    const res = await request(app)
      .get(`/api/user/${userId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.data).toHaveProperty("uId"); // Adapt to your data structure
    expect(res.body.data.uId).toEqual(userId); // Adapt to your data property names
  });

  it('should return 500 if user not found', async () => {
    mockModel.findOne.mockResolvedValue(null)

    const userId = dataAdmin.uId;

    const res = await request(app)
      .get(`/api/user/${userId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(500)
  });

})

// UPDATE USER
describe("PUT /user", () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return 200 if update success", async () => {


    mockModel.findOneAndUpdate.mockResolvedValue(dataAdmin)

    const userId = dataAdmin.uId;

    const res = await request(app)
      .put(`/api/user/${userId}`)
      .set("Authorization", `Bearer ${token}`)

    expect(res.statusCode).toBe(200)
  })

  it("should return 500 if user not found", async () => {
    mockModel.findOneAndUpdate.mockResolvedValue(null)

    const userId = "Invalid id";

    const res = await request(app)
      .put(`/api/user/${userId}`)
      .set("Authorization", `Bearer ${token}`)

    expect(res.statusCode).toBe(500)
  })
})

// DELETE USER
describe('DELETE /user', () => {

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
    mockModel.findOneAndDelete.mockResolvedValue(dataAdmin)
    const userId = dataUser.uId;

    const res = await request(app)
      .delete(`/api/user/${userId}`)
      .set("Authorization", `Bearer ${token}`)

    expect(res.statusCode).toBe(200)
  })


})







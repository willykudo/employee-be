import dotenv from "dotenv";
import app from "./app.js";
// import createServer from "./app.js";
import { ConnectDB } from './config/db.js'
dotenv.config();

ConnectDB()

// const app = createServer();
const PORT = process.env.PORT || 3000;

app.listen(
    PORT,
    console.log(`The server is listening on port ${PORT}`)
);
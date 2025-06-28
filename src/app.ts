import express, {Express} from "express";

const app: Express = express();

// 1 initialize the express app
export default app;

// 2 Define Middleware
    // 2.1 instruct to parse the request payload data to be converted to JSON format

app.use(express.json());
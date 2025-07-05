import { Request, Response} from "express";
import app from "./app";
import dotenv from "dotenv";
dotenv.config(); // load environment variables from .env

// 1 initialize the express app
/*const app : Express = express();*/

// 2 define a application port
const port = process.env.PORT || 3000; // define access the port if not defined use 3000

// 3 define a simple http GET request

/*
app.get("/", (req : Request, res : Response) => {
    console.log(req.body)
    res.send("Hello World!");
});
*/

// 4 start the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
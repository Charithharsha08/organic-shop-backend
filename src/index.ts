import express, {Express, Request, Response} from "express";


// 1 initialize the express app
const app: Express = express();

// 2 define a application port
const port = process.env.PORT || 3000;

// 3 define a simple http GET request
app.get("/", (req : Request, res : Response) => {
    res.send("Hello World!");
});

// 4 start the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
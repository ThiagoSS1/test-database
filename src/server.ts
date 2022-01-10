import express, { Request, Response } from 'express';
import "reflect-metadata";
import Database from './core/data/connections/Database';

const app = express();

app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
})

new Database()
    .openConnection()
    .then(() => app.listen(8080, () => console.log("Server started on port 8080")))




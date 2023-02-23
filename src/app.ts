import express, { NextFunction, Request, Response } from "express"
import { router } from "./router/router";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

/** Here we can add some middleware that are responsible for different action like token validation, cookies parser , db connectivaty etc */
app.use('/', router);


// error handling 
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
    res.status(err.status || 500);
});

const port = 3000; // we can add this in env file for production
app.listen(port, () => {
    console.log("Server is up and running at port " + port);
});

export {
    app
}
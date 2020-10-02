import express from "express";
// const express = require("express");
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import { localsMiddleware } from "./middlewares";

const app = express();

// function handleHome(req, res) {
//   // req = request, rep = response
//   console.log(req);
//   res.send("Hello from home");
// }

// const handleHome = (req, res) => res.send("Hello from my ass");

// const handleProfile = (req, res) => res.send("You are on my profile");

// const betweenHome = (req, res, next) => {
//   console.log("Between");
//   next();
// };

app.use(helmet());
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter); // /users
app.use(routes.videos, videoRouter);

export default app;

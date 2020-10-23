import "@babel/polyfill"
import express from "express";
// const express = require("express");
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport"
import mongoose from "mongoose"
import session from "express-session"
import MongoStore from "connect-mongo"
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import apiRouter from "./routers/apiRouter";
import routes from "./routes";
import { localsMiddleware } from "./middlewares";

import "./passport"

const app = express();

const CokieStore = MongoStore(session);

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

app.use(helmet({ contentSecurityPolicy: false}));
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CokieStore({
        mongooseConnection: mongoose.connection
    })
}
))
app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter); // /users
app.use(routes.videos, videoRouter);
app.use(routes.api, apiRouter);

export default app;

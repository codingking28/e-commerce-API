const express = require("express");
const app = express();

app.use(express.json());

//Router
const authRouter = require("./auth");
app.use("/auth", authRouter);

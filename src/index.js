require("dotenv").config();
const express = require("express");
const authRouter = require("./routes/auth");
const apiRouter = require("./routes/api");
const errrorMiddleware = require("./middleware/errrorMiddleware");

const app = express();

app.use(express.json());

app.use("/auth", authRouter);
app.use("/api", apiRouter);

app.use(errrorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server listening on port"));

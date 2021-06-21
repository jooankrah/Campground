const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./db/mongoose");
const userRouter = require("./routers/user");

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders: ["*"],
  })
);

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!')
// })

app.use(express.json());
app.use("/users", userRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

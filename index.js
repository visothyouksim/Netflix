const express = require("express");
const bodyParser = require('body-parser');
const connectDB = require("./config/database");
const userRouter = require("./routes/UserRoute");
const app = express();
require("dotenv/config");
const port = process.env.PORT || 3000;
connectDB();

app.get("/", (req, res) => {
  res.json("Welcome to the Videos Streaming API");
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/user", userRouter);

app.listen(port, () => console.log(`[SERVER] is running on :${port}`));

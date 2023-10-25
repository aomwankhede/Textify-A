const express = require("express");
const cors = require("cors");
const configuration = require("./Models/config");
const router = require("./Routes/auth.js");
const app = express();

app.use(cors());
app.use("/auth", router);

app.get("/", (req, res) => {
  res.status(200).send("Hi");
});

app.listen(5500, () => {
  configuration.connec();
  console.log("Server listening on 5500");
});

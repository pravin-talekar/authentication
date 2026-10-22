const express = require("express");
require("dotenv").config();
const dns = require("node:dns");
const authRoutes = require("./routes/auth.route");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dns.setServers(["8.8.8.8", "8.8.4.4"]);
console.log("DNS servers configured:", dns.getServers());

const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(cors());

app.use("/api/auth", authRoutes);


app.post("/api/auth/test", (req, res) => {
  const data = req.body;
  res.status(200).json({
    message: "Authentication routes are working",
    data
  });
});

module.exports = app;

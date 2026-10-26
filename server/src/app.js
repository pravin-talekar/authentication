require("dotenv").config();
const dns = require("node:dns");

const express = require("express");
const authRoutes = require("./routes/auth.route");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dns.setServers(["8.8.8.8", "8.8.4.4"]);
console.log("DNS servers configured:", dns.getServers());

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
   credentials: true,
}));

app.use(express.json());
app.use(cookieParser())




app.use("/api/auth", authRoutes);


// logoutUser();


app.post("/api/auth/test", (req, res) => {
  const data = req.body;
  console.log(req.body)  
  res.status(200).json({
    message: "Authentication routes are working",
    data
  });
});

module.exports = app;

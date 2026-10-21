const app = require("./src/app");
const connectDB = require("./src/db/db");


connectDB();
app.listen(8080, () => {
    console.log("app listening on port 8080");
})
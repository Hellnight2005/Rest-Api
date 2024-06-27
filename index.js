const express = require("express");
//const users = require("./MOCK_DATA.json");
const {ConnectMongoDB}=require("./connection");
const {logReqRes} = require("./middleware")
const userRouter = require("./routes/user");

const app = express();
const PORT = 7000;

// connection
ConnectMongoDB("mongodb://localhost:27017/Anime_user_0")
.then(()=> console.log("mongoDb Connected!!!!"));

 

// Middleware
app.use(express.urlencoded({extended: false}));
app.use(logReqRes("log.txt"));

// Routes
app.use("/api/users", userRouter);



app.listen(PORT, () => console.log(`Server is started at ${PORT}`));

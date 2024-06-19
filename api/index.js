const express = require("express");
const mongoose = require("mongoose")
const app = express();
const dotenv = require('dotenv')

dotenv.config({ path: '../.env' })

console.log(process.env)

console.log("몽고아틀라스 주소: ", process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("데이터베이스 연결 성공 !!"))
.catch(e => console.log(`데이터베이스 연결 실패 ${e}`))

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(5000, () => console.log("Server ready on port 5000."));

module.exports = app;
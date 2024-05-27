const express = require("express");
const {port} = require('./config/serverConfig');
const  newRoute  = require("./routes/newRoute");
const app = express();

app.use("/new",newRoute)

app.listen(3000, ()=>{
    console.log(`server start in ${port}`)
})
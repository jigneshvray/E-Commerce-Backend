const app = require("./app");
const dotenv = require("dotenv");
const connecteDatabase = require("./config/database")
//Config

dotenv.config({path:"backend/config/config.env"});

//Connecting to database
connecteDatabase();

app.listen(process.env.PORT,() =>{
    console.log('Server is running on http://localhost:${process.env.PORT}')
})
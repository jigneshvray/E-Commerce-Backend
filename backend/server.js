const app = require("./app");
const dotenv = require("dotenv");
const connecteDatabase = require("./config/database");

//Handling Uncaught Exception
process.on("uncaughtException",(err)=>{
    console.log('Error: ${err.message}');
    console.log('Shutting down the server due to Uncaught Exception');
    process.exit(1);
});


//Config

dotenv.config({path:"backend/config/config.env"});

//Connecting to database
connecteDatabase();

const server = app.listen(process.env.PORT,() =>{
    console.log('Server is running on http://localhost:${process.env.PORT}');
});

//Unhandled Promise Rejection
process.on("unhandledRejection",(err) =>{
    console.log('Error: ${err.message}');
    console.log('Shutting down the server due rto Unhandled Promise Rejection');

    server.close(()=>{ 
        process.exit(1);
    });
});


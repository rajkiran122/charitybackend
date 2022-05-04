const mongoose = require('mongoose');
const app = require('./app');
const dotenv = require('dotenv');

//Config file
dotenv.config({ path: './config.env' });

//Listening to the port
const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})

//Connecting to the database
mongoose.connect(process.env.DB_LOCAL, () => {
    console.log(`Database Connection Successful`);
})


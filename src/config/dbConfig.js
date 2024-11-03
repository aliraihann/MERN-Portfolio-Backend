import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on('error', () => {
    console.log('Error connecting the database');
});

connection.on('connected', () => {
    console.log('MongoDB database connected successfully');
});

export default mongoose;

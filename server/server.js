import express from 'express';
import dbConfig from './config/dbConfig.js'
import { configDotenv } from "dotenv";
configDotenv();
import portfolioRoutes from './routes/portfolioRoute.js';
import cors from "cors"
const app = express();


app.use(express.json());
app.use(cors());

// server routes
app.use("/api/portfolio", portfolioRoutes);

const port = process.env.PORT || 4000;

// app listen for the server running
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});

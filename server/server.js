import express from 'express';
import { configDotenv } from "dotenv";
configDotenv();
import portfolioRoutes from './routes/portfolioRoute.js';
import path from 'path';

const app = express();
app.use(express.json());
app.use("/api/portfolio", portfolioRoutes);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
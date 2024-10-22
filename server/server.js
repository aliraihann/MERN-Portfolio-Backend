import express from 'express';
import dbConfig from './config/dbConfig.js'
import { configDotenv } from "dotenv";
configDotenv();
import portfolioRoutes from './routes/portfolioRoute.js';
import path from 'path';

const app = express();
app.use(express.json());
app.use("/api/portfolio", portfolioRoutes);

const port = process.env.PORT || 4000;
/* For Deployment */
if (process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "client/build")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client/build/index.html"))
    })
}
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
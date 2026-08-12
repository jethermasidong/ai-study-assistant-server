import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import summarizeRoutes from './routes/summarizeRoutes.js';
import generateExamRoutes from './routes/generateExamRoutes.js'

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


app.use('/api', summarizeRoutes);
app.use('/api', generateExamRoutes);




app.listen(5000, () => {
    console.log("---------------------------");
    console.log("Server running on port 5000");
    console.log("---------------------------");
});
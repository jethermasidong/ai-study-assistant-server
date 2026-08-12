import express from 'express';
const router = express.Router();
import { generateExamination } from '../controllers/generateExamController';


app.post('/examination', generateExamination);


export default router;
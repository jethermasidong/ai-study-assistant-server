import express from 'express';
const router = express.Router();
import { generateExamination } from '../controllers/generateExamController';
import upload from '../middleware/uploadMiddleware';

app.post('/examination', upload.single("file"), generateExamination);


export default router;
import express from 'express';
const router = express.Router();
import { generateExamination } from '../controllers/generateExamController.js';
import upload from '../middleware/uploadMiddleware.js';

router.post('/examination', upload.single("file"), generateExamination);


export default router;
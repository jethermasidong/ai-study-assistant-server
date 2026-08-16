import express from 'express';
const router = express.Router();
import { summarizeNotes } from '../controllers/summarizeController.js';
import upload from '../middleware/uploadMiddleware.js';

router.post('/summarize', upload.single("file"), summarizeNotes);


export default router;
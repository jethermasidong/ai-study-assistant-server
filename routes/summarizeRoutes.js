import express from 'express';
const router = express.Router();
import { summarizeNotes } from '../controllers/summarizeController.js';


router.post('/summarize', summarizeNotes);


export default router;
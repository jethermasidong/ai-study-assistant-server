import express from 'express';
const router = express.Router();
import { summarizeNotes } from '../controllers/summarizeController';


app.post('/summarize', summarizeNotes);


export default router;
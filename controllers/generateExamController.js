import { generateExam } from "../services/geminiService";
import { extractPdfText } from "../services/pdfService";


export const generateExamination = async (req, res) => {


    try {

        if (!req.file) {
            return res.status(400).json({
                message: "Please upload a PDF."
            });
        }

        
        const { questionCount, difficulty, questionTypes } = req.body;


        const text = await extractPdfText(req.file.buffer);
        

        if (!text || !questionCount || !difficulty || !questionTypes ) {
            return res.status(400).json({
                message: "Text, QuestionCount, Difficulty, QuestionTypes are required."
            });
        }

        const exam = await generateExam(text, questionCount, difficulty, questionTypes);

        res.status(200).json({
            exam
        });
    } catch (error) {
        console.error("Gemini Error:", error);
        res.status(500).json({
            message: "Failed to generate summary."
        });
    }
}

export { generateExam };
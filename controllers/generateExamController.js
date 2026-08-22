import { generateExam } from "../services/geminiService.js";
import { extractFileText } from "../services/fileService.js";


export const generateExamination = async (req, res) => {


    try {

        if (!req.file) {
            return res.status(400).json({
                message: "Please upload a PDF."
            });
        }

        const text = await extractFileText(req.file.buffer);

        const { questionCount, difficulty, questionTypes } = req.body;


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
            message: "Failed to generate exam."
        });
    }
}

export default { generateExamination };
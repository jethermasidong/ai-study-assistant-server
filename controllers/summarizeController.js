import { generateSummary } from "../services/geminiService.js";
import { extractPdfText } from "../services/pdfService.js";

export const summarizeNotes = async (req, res) => {

    try {
        
        if (!req.file) {
            return res.status(400).json({
                message: "Please upload a PDF"
            });
        }

        const text = await extractPdfText(req.file.buffer);

        if (!text) {
            return res.status(400).json({
                message: 'Study Material is Required'
            });
        }

        const summary = await generateSummary(text);

        res.status(200).json({
            summary
        });

    } catch (error) {
        console.error("Gemini Error:", error);

        res.status(500).json({
            message: "Failed to generate summary."
        });
    }
}


export default { summarizeNotes };
import { generateSummary } from "../services/geminiService";


export const summarizeNotes = async (req, res) => {
    try {
        const { text } = req.body;

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


export { summarizeNotes };
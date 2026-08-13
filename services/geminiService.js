import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});


export const generateSummary = async (text) => {
    

    const prompt = `
    You are an AI study assistant.
    Summarize the following study material.
    
    Requirements:
    - Identify the main topics of the notes.
    - Explain important concepts.
    - Include important terms and definitions.
    - Keep the explanation more easy to understand
    - Do not add information that is not present in the notes/study material
    
    Study Material:
    ${text}
    `;

    const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt
    });
     
    return response.text;
};


export const generateExam = async (text, questionCount, difficulty, questionTypes) => { 

    const prompt = `
    You are an AI exam generator.
    
    Create ${questionCount} questions
    based ONLY on the study material/notes.
    
    Difficulty:
    ${difficulty}
    

    RETURN ONLY valid JSON in this structure:
    {
        "questions": [
            {
                "question": "Question here",
                "type": "multiple_choice",
                "choices": ["A", "B", "C", "D"],
                "correctAnswer": "A",
                "explanation": "Explanation here"
            }
        ]
    }
    
    Do not use any information outside
    the provided study material/notes.
    
    Study Material:
    ${text}
    `;

    const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt
    });

    return response.text;
}


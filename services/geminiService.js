import { GoogleGenAI } from "@google/genai";

export const generateSummary = async (text) => {
    

    const ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY
    });

    const prompt = `
    You are an AI study assistant. Your job is to read the provided notes/study material.

    Summarize the following study material. Make the summary/reviewer understandable like you
    are giving a reviewer for a 10 years old reviewee.

    Do not use any information outside the provided study material.

    
    RETURN ONLY valid JSON in this structure:
    {
        "summary": "Write 2 simple sentences summarizing the main point of the entire document." 
        "key_terms": [
            {
                "word": "Extract an important vocabulary key term word in the document",
                "type": "Write a short, simple definition for the word, from the document
            }
        ],
        "main_topics": [
            {
                "topic": "Name one of the big ideas from the text",
                "bullet_points": [
                    "Write a short bullet point explaining this idea.",
                    "Write another short bullet point.",
                    "Limit to 3-4 bullet points per topic."
                ]
            }
        ]
    }
    
    Study Material:
    ${text}
    `;

    const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
        }
    });
     
    return JSON.parse(response.text);
};


export const generateExam = async (text, questionCount, difficulty, questionTypes) => { 


    const ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY
    });

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
                "type": ${questionTypes},
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
        contents: prompt,
        config: {
            responseMimeType: "application/json",
        }
    });

    return JSON.parse(response.text);
}


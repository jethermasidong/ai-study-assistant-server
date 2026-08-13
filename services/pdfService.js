import pdf from "pdf-parse";

export const extractPdfText = async (buffer) => {
    
    const data = await pdf(buffer);

    return data.text;
    
};
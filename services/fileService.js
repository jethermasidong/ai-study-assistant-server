import officeParser from "officeparser";

export const extractFileText = async (buffer) => {

    const parsed = await officeParser.parseOffice(buffer);
    
    return parsed.toText();
    
};
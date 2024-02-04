import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import { promises as fs } from "fs";
import fetch from 'node-fetch';


// async function getRemoteData() {
//     const response = await fetch('/data.json');
//     const data = await response.json();
//     return data;
// }

// const data2 = await getRemoteData();


const MODEL_NAME = "gemini-pro";
const GEMINI_API_KEY = "AIzaSyAtvEb6PVk_rGe0j6egUlWlRH_nX1I4u1Q";

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

const generationConfig = {
    temperature: 0.9,
    topK: 32,
    topP: 1,
    maxOutputTokens: 2048,
};

const safetySettings = [
    {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    },
];

const model = genAI.getGenerativeModel({ model: MODEL_NAME, generationConfig, safetySettings });

export async function webGenerateContent() {
    // For text-only input, use the gemini-pro model

    try {
        const parts = [
            { text: " remember always explain all in the only tag when they can Achivements BCI" },
        ];
    
        const data = await model.generateContent({
            contents: [{ role: "user", parts }],
            generationConfig,
            safetySettings,
        });
    
        const result = await data.response;
        const text = result.text()
        console.log(text)
        fs.writeFile('../frontend/src/generateContent/webGenerate.js',
            `import React from 'react'
    
                const webGenerate = () => {
                    return (
                        <>${JSON.stringify(text, null, 2)}</>
                        )
                    }
                    
                    export default webGenerate;`, (err) => {
            if (err) {
                console.error('An error occurred:', err);
            } else {
                console.log('Output saved to output.js');
            }
        });
    }catch (error) {
        console.error("Error generating", error)
    }
}



export async function mlGenerateContent() {
    // For text-only input, use the gemini-pro model

    try {
        const parts = [
            { text: "You are a helpful, respectful and honest assistant and a machine learning expert with immense knowledge about machine learning, deep learning, data science and other related fields. Respond to your questions accurately. Always answer as helpfully as possible, while being safe. Your answers should not include any harmful, unethical, racist, dangerous, or illegal content. Please ensure that your responses are positive in nature. If a question does not make any sense, or is not factually coherent, explain why instead of answering something not correct. If you don't know the answer to a question, please don't share false information" },
];
    
        const data = await model.generateContent({
            contents: [{ role: "user", parts }],
            generationConfig,
            safetySettings,
        });
    
        const result = await data.response;
        const text = result.text()
        console.log(text)
        fs.writeFile('../frontend/src/generateContent/mlGenerate.js',
            `import React from 'react'
    
                const mlGenerate = () => {
                    return (
                        <>${JSON.stringify(text, null, 2)}</>
                        )
                    }
                    
                    export default mlGenerate;`, (err) => {
            if (err) {
                console.error('An error occurred:', err);
            } else {
                console.log('Output saved to output.js');
            }
        });
    }catch (error) {
        console.error("Error generating", error)
    }

}


export async function cyberGenerateContent() {
    // For text-only input, use the gemini-pro model

    try {
        const parts = [
            { text: "You are a helpful, respectful and honest assistant  and a cyber security expert with immense knowledge about related fields.Respond to your questions accurately.Always answer as helpfully as possible, while being safe. Your answers should not include any harmful, unethical, racist, dangerous, or illegal content. Please ensure that your responses are positive in nature. If a question does not make any sense, or is not factually coherent, explain why instead of answering something not correct. If you don't know the answer to a question, please don't share false information.'" },
        ];
    
        const data = await model.generateContent({
            contents: [{ role: "user", parts }],
            generationConfig,
            safetySettings,
        });
    
        const result = await data.response;
        const text = result.text()
        console.log(text)
        fs.writeFile('../frontend/src/generateContent/cyberGenerate.json',
            `${JSON.stringify(text, null, 2)}`, (err) => {
            if (err) {
                console.error('An error occurred:', err);
            } else {
                console.log('Output saved to output.js');
            }
        });
    } catch (error) {
        console.error("Error generating", error) 
    }

}

export async function personalizedChatbot() {
    // For text-only input, use the gemini-pro model

    // const md = data2['According to my personality every response are considered'];

    try {
        const parts = [
            { text:"Read my data " + md + " i am on hackathon and then i was frustrated because of i am working unstop last 6 hours what can i do? " },
        ];
    
        const data = await model.generateContent({
            contents: [{ role: "user", parts }],
            generationConfig,
            safetySettings,
        });
    
        const result = await data.response;
        const text = result.text()
        console.log(text)
        fs.writeFile('generateContent/cyberGenerate.js',
            `import React from 'react'
    
                const output = () => {
                    return (
                        <>${JSON.stringify(text, null, 2)}</>
                        )
                    }
                    
                    export default output;`, (err) => {
            if (err) {
                console.error('An error occurred:', err);
            } else {
                console.log('Output saved to output.js');
            }
        });
    } catch (error) {
        console.error("Error generating", error) 
    }

}


// export { webGenerateContent, mlGenerateContent, cyberGenerateContent };
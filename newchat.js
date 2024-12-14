import fs from 'fs';
import fetch from 'node-fetch'; // If you're in a Node.js environment, otherwise use native fetch in browsers

const MODEL_NAME = "grok-vision-beta";
const XAI_API_KEY = process.env.API_KEY;
const imagePath = "./LogoPage.png"; // Replace with actual path to your image

async function encodeImage(imagePath) {
    const imageBuffer = await fs.promises.readFile(imagePath);
    return imageBuffer.toString('base64');
}

async function sendImageToAPI(base64Image) {
    const messages = [
        {
            "role": "user",
            "content": [
                {
                    "type": "image_url",
                    "image_url": {
                        "url": `data:image/png;base64,${base64Image}`,
                        "detail": "high"
                    }
                },
                {
                    "type": "text",
                    "text": "What is on this image?"
                }
            ]
        }
    ];

    const response = await fetch('https://api.x.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${XAI_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: MODEL_NAME,
            messages: messages,
            stream: true,
            temperature: 0.01
        })
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    
    let done = false;
    while (!done) {
        const { value, done: readerDone } = await reader.read();
        if (value) {
            const chunk = decoder.decode(value, { stream: true });
            console.log(chunk);
        }
        done = readerDone;
    }
}

async function main() {
    try {
        const base64Image = await encodeImage(imagePath);
        await sendImageToAPI(base64Image);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
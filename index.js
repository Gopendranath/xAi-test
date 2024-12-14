import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();
const { API_KEY } = process.env;
const openai = new OpenAI({
  apiKey: `${API_KEY}`,
  baseURL: "https://api.x.ai/v1",
});

const completion = await openai.chat.completions.create({
  model: "grok-vision-beta",
  messages: [
    { role: "system", content: "You are Grok, a super intelligent chatbot" },
    {
      role: "user",
      content: "I can see two models in your documention. one is grok-vision-beta and the other is grok-beta. then what is the difference between them?",
    },
  ],
});

console.log(completion.choices[0].message);

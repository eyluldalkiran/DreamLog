import axios from "axios";

const API_KEY = process.env.EXPO_PUBLIC_GEMINI;
const BASE_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;

export const generateContent = async (text) => {
  const data = {
    contents: [
      {
        parts: [
          {
            text: text,
          },
        ],
      },
    ],
  };

  try {
    const response = await axios.post(BASE_URL, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const res = response.data.candidates[0].content.parts[0].text;
    return res;
  } catch (error) {
    console.error("API request failed:", error);
    throw error;
  }
};

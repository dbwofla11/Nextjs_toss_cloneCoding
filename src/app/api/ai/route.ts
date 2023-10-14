import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prompt } = body;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: 'user', content: prompt }],
    });

    return NextResponse.json(response.choices[0].message.content);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: JSON.stringify(error) }, { status: 500 });
  }
}
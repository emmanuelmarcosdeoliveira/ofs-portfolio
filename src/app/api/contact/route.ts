import { NextResponse } from "next/server";
import z from "zod";
import axios from "axios";
const BodySchema = z.object({
  name: z.string(),
  email: z.email(),
  message: z.string(),
});

const WEBHOOK_URL = process.env.WEBHOOK_URL!;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = BodySchema.parse(body);
    const messageData = {
      embeds: [
        {
          title: "Mensagem de contato",
          color: 0x4983f5,
          fields: [
            {
              name: "Nome",
              value: name,
              inline: true,
            },
            {
              name: "E-mail",
              value: email,
              inline: true,
            },
            {
              name: "Mensagem",
              value: message,
            },
          ],
        },
      ],
    };

    await axios.post(WEBHOOK_URL, messageData);
    return NextResponse.json({
      message: "Mensagem enviada com sucesso",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}

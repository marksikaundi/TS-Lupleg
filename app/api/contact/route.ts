import { Resend } from "resend"
import { NextResponse } from "next/server"
import ContactEmail from "../../../components/contact-email"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { name, email, message } = await request.json()

  try {
    const data = await resend.emails.send({
      from: "TypeScript Tips <mark@lupleg.org>",
      to: ["mark@lupleg.org"],
      subject: "New Contact Form Submission",
      react: ContactEmail({ name, email, message }),
    })

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error })
  }
}


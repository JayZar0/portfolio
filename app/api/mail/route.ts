import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'
import sanitizeHtml from 'sanitize-html'
/**
 * This file is the mailing route to allow for emailing
 */

/**
 * This is the POST request handler for the application when the user will submit
 * the contact us form.
 * @param request This will return the status of whether the email was sent
 */
export async function POST(req: NextRequest): Promise<NextResponse> {
    const request = await req.json()

    const parsed = contactSchema.safeParse(request)

    if (!parsed.success) {
        return NextResponse.json(
            { message: 'Invalid input' },
            { status: 400 }
        )
    }

    const { name, email, message } = parsed.data

    const safeMessage = sanitizeHtml(message, {
        allowedTags: [],
        allowedAttributes: {},
    })

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT || '587'),
        secure: process.env.EMAIL_SECURE === 'true',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    } as nodemailer.TransportOptions)

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `New Message from ${name}`,
        html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${safeMessage}</p>
    `,
    }
    try {
        await transporter.sendMail(mailOptions)
        return NextResponse.json({ message: 'email has been successfully sent' }, { status: 200 })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: 'There was an error when attempting to send the message' }, { status: 501 })
    }
}


export const contactSchema = z.object({
    name: z
        .string()
        .trim()
        .min(1, 'Name is required')
        .max(100, 'Name too long'),

    email: z
        .email(),

    message: z
        .string()
        .trim()
        .min(1, 'Message is required')
        .max(2000),
})

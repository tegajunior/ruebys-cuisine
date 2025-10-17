export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // 1️⃣ Send to your business email
    await resend.emails.send({
      from: "Rueby's Cuisine <hello@ruebyscuisine.food>",
      to: process.env.NEXT_PUBLIC_SALES_EMAIL as string,
      subject: `📩 New Contact Message from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; color: #F8F8F8; line-height: 1.5;">
          <img src="https://chidiebereuzoma-nextjs-demo-user-image.s3.us-east-1.amazonaws.com/site-logo.png" 
               alt="Rueby Cuisine" 
               style="max-width: 150px; margin-bottom: 20px;" />
          <h2 style="color: #ff6f61;">New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; border-left: 3px solid #ff6f61; padding-left: 10px;">
            ${message}
          </p>
        </div>
      `,
    })

    // 2️⃣ Send auto-reply to the customer

    await resend.emails.send({
      from: "Rueby's Cuisine <hello@ruebyscuisine.food>",
      to: email,
      subject: "✅ Thanks for contacting Rueby's Cuisine!",
      replyTo: process.env.NEXT_PUBLIC_SALES_EMAIL as string,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.5;">
          <img src="https://chidiebereuzoma-nextjs-demo-user-image.s3.us-east-1.amazonaws.com/site-logo.png" 
               alt="Rueby Cuisine" 
               style="max-width: 150px; margin-bottom: 20px;" />
          <h2 style="color: #ff6f61;">Hello ${name},</h2>
          <p>Thanks for reaching out to <strong>Rueby\'s Cuisine</strong>. 🍴</p>
          <p>We’ve received your message and one of our team members will get back to you as soon as possible.</p>
          <p style="margin-top: 20px;">Meanwhile, you can also reach us quickly on <a href="https://wa.me/+2348149493000" style="color:#ff6f61; font-weight:bold;">WhatsApp</a>.</p>
          <br/>
          <p style="font-size:14px; color:#777;">This is an automated confirmation. Please do not reply directly to this email.</p>
        </div>
      `,
    })

    return NextResponse.json({ message: 'Message sent successfully' })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}

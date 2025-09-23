import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

// Rate limiting - simple in-memory store (in production, use Redis or database)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX_REQUESTS = 3;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userRateLimit = rateLimitMap.get(ip);

  if (!userRateLimit) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (now > userRateLimit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (userRateLimit.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  userRateLimit.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded
      ? forwarded.split(",")[0]
      : request.headers.get("x-real-ip") || "unknown";

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Check if required environment variables are set
    const emailConfig = {
      service: process.env.EMAIL_SERVICE || "gmail",
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
      to: process.env.EMAIL_TO,
      port: process.env.EMAIL_PORT,
    };

    if (!emailConfig.user || !emailConfig.pass || !emailConfig.to) {
      console.error(
        "Email configuration missing. Please set EMAIL_USER, EMAIL_PASS, and EMAIL_TO environment variables."
      );
      return NextResponse.json(
        { error: "Email service is not configured. Please try again later." },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: emailConfig.service,
      auth: {
        user: emailConfig.user,
        pass: emailConfig.pass,
      },
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
    } catch (error) {
      console.error("Email transporter verification failed:", error);
      return NextResponse.json(
        {
          error:
            "Email service is temporarily unavailable. Please try again later.",
        },
        { status: 500 }
      );
    }

    // Prepare email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">
          New Contact Form Submission - ToolsHub
        </h2>

        <div style="background-color: #f9f9f9; padding: 20px; margin: 20px 0; border-radius: 5px;">
          <h3 style="color: #0066cc; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        </div>

        <div style="background-color: #fff; padding: 20px; margin: 20px 0; border: 1px solid #ddd; border-radius: 5px;">
          <h3 style="color: #333; margin-top: 0;">Message</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${
            validatedData.message
          }</p>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
          <p>This message was sent from the ToolsHub contact form at <a href="https://www.the-tools-hub.com/contact" style="color: #0066cc;">www.the-tools-hub.com/contact</a></p>
          <p>IP Address: ${ip}</p>
        </div>
      </div>
    `;

    const emailText = `
New Contact Form Submission - ToolsHub

Name: ${validatedData.name}
Email: ${validatedData.email}
Submitted: ${new Date().toLocaleString()}

Message:
${validatedData.message}

---
This message was sent from the ToolsHub contact form.
IP Address: ${ip}
    `;

    // Send email
    await transporter.sendMail({
      from: `"ToolsHub Contact Form" <${emailConfig.user}>`,
      to: emailConfig.to,
      replyTo: validatedData.email,
      subject: `ToolsHub Contact: Message from ${validatedData.name}`,
      text: emailText,
      html: emailHtml,
    });

    // Send confirmation email to user (optional)
    try {
      await transporter.sendMail({
        from: `"ToolsHub" <${emailConfig.user}>`,
        to: validatedData.email,
        subject: "Thank you for contacting ToolsHub",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0066cc;">Thank you for contacting ToolsHub!</h2>

            <p>Hi ${validatedData.name},</p>

            <p>We've received your message and appreciate you taking the time to contact us. Our team will review your message and respond as soon as possible.</p>

            <div style="background-color: #f9f9f9; padding: 15px; margin: 20px 0; border-radius: 5px;">
              <h4 style="margin-top: 0;">Your message:</h4>
              <p style="white-space: pre-wrap; font-style: italic;">"${validatedData.message}"</p>
            </div>

            <p>If you need immediate assistance, you can also explore our comprehensive tool documentation and FAQ sections on our website.</p>

            <p>Best regards,<br>The ToolsHub Team</p>

            <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
            <p style="font-size: 12px; color: #666;">
              Visit us at <a href="https://www.the-tools-hub.com" style="color: #0066cc;">www.the-tools-hub.com</a><br>
              This is an automated response. Please do not reply to this email.
            </p>
          </div>
        `,
        text: `
Thank you for contacting ToolsHub!

Hi ${validatedData.name},

We've received your message and appreciate you taking the time to contact us. Our team will review your message and respond as soon as possible.

Your message: "${validatedData.message}"

If you need immediate assistance, you can also explore our comprehensive tool documentation and FAQ sections on our website.

Best regards,
The ToolsHub Team

---
Visit us at www.the-tools-hub.com
This is an automated response. Please do not reply to this email.
        `,
      });
    } catch (confirmationError) {
      // Don't fail the main request if confirmation email fails
      console.warn("Failed to send confirmation email:", confirmationError);
    }

    return NextResponse.json(
      {
        message:
          "Your message has been sent successfully! We'll get back to you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.issues[0].message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

// Handle preflight requests for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

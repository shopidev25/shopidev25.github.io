import { NextResponse } from "next/server";

interface ContactBody {
  name?: string;
  email?: string;
  message?: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body: ContactBody = await request.json();
    const { name, email, message } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { error: "Message must be under 5000 characters." },
        { status: 400 }
      );
    }

    // In production, integrate with Resend, SendGrid, or Nodemailer.
    // For now, log the submission server-side.
    console.log("[Contact Form]", {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out!",
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }
}

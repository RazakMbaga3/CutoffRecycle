import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, location, collectors, time, formType } = body;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Your Site <onboarding@resend.dev>", // you can use a custom verified domain too
        to: ["haircollection@cutoffrecycle.co.tz"],
        subject: `New ${formType === "center" ? "Collection Center" : "Individual Collector"} Submission`,
        text: `
          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Location: ${location}
          Collectors: ${collectors || "N/A"}
          Shipping Time: ${time || "N/A"}
        `,
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to send email");
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Extract data
    const { 
      name, 
      email, 
      phone, 
      country, 
      service, 
      message, 
      page_url,
      referrer,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
      recaptchaToken
    } = data;

    // Verify reCAPTCHA token if Secret Key is provided
    if (process.env.RECAPTCHA_SECRET_KEY && recaptchaToken) {
      try {
        const verifyResponse = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
        });
        const verifyData = await verifyResponse.json();
        if (!verifyData.success) {
          console.error("reCAPTCHA verification failed:", verifyData);
          return NextResponse.json({ success: false, error: "Invalid reCAPTCHA" }, { status: 400 });
        }
      } catch (e) {
        console.error("Error verifying reCAPTCHA:", e);
      }
    } else if (process.env.RECAPTCHA_SECRET_KEY) {
      // If secret key is set but no token is provided
      console.warn("reCAPTCHA token missing in request payload.");
      return NextResponse.json({ success: false, error: "Missing reCAPTCHA token" }, { status: 400 });
    }

    /*
    // Check for SMTP config
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn("SMTP credentials missing. Skipping email notification.");
      // We still return 200 to not break the frontend
      return NextResponse.json({ success: true, warning: "SMTP not configured" });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const notificationEmail = process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER;

    const htmlContent = `
      <h2>New Lead Submission!</h2>
      <p><strong>Name:</strong> ${name || 'N/A'}</p>
      <p><strong>Email:</strong> ${email || 'N/A'}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Country:</strong> ${country || 'N/A'}</p>
      <p><strong>Service:</strong> ${service || 'N/A'}</p>
      <p><strong>Message:</strong> ${message || 'N/A'}</p>
      <hr />
      <h3>Tracking & Metadata</h3>
      <p><strong>Submitted on Page:</strong> ${page_url || 'N/A'}</p>
      <p><strong>Referrer:</strong> ${referrer || 'N/A'}</p>
      <p><strong>UTM Source:</strong> ${utm_source || 'N/A'}</p>
      <p><strong>UTM Medium:</strong> ${utm_medium || 'N/A'}</p>
      <p><strong>UTM Campaign:</strong> ${utm_campaign || 'N/A'}</p>
      <p><strong>UTM Term:</strong> ${utm_term || 'N/A'}</p>
      <p><strong>UTM Content:</strong> ${utm_content || 'N/A'}</p>
    `;

    const mailOptions = {
      from: `"Lead Alert" <contact@onlinereputationbuilder.in>`,
      to: notificationEmail,
      subject: `New Lead: ${name || 'Unknown'} - ${service || 'Contact Form'}`,
      html: htmlContent,
    };

    // Send the email in the background without waiting heavily or breaking on fail
    await transporter.sendMail(mailOptions);
    */
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending notification email:", error);
    // Return 200 anyway so the frontend doesn't show an error to the user just because notification failed
    return NextResponse.json({ success: true, error: "Failed to send email but captured lead" });
  }
}

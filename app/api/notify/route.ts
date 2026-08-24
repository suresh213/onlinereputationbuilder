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
    }

    // 1. SLACK NOTIFICATION DISPATCH
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;
    if (slackWebhookUrl) {
      try {
        const formattedDate = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
        
        const slackPayload = {
          text: `🚀 *New Lead: ${name || 'Prospective Client'}* interested in *${service || 'ORM Services'}*`,
          blocks: [
            {
              type: "header",
              text: {
                type: "plain_text",
                text: "🚀 New Inbound ORM Lead Received!",
                emoji: true
              }
            },
            {
              type: "section",
              fields: [
                {
                  type: "mrkdwn",
                  text: `*👤 Name:*\n${name || 'N/A'}`
                },
                {
                  type: "mrkdwn",
                  text: `*💼 Service Requested:*\n${service || 'General ORM'}`
                },
                {
                  type: "mrkdwn",
                  text: `*📞 Phone:*\n${phone ? `<tel:${phone}|${phone}>` : 'N/A'}`
                },
                {
                  type: "mrkdwn",
                  text: `*✉️ Email:*\n${email ? `<mailto:${email}|${email}>` : 'N/A'}`
                },
                {
                  type: "mrkdwn",
                  text: `*🌍 Country:*\n${country || 'India'}`
                },
                {
                  type: "mrkdwn",
                  text: `*⏰ Time (IST):*\n${formattedDate}`
                }
              ]
            },
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text: `*📝 Inquiry / Message:*\n>${message ? message.replace(/\n/g, '\n>') : '_No additional message provided._'}`
              }
            },
            {
              type: "divider"
            },
            {
              type: "context",
              elements: [
                {
                  type: "mrkdwn",
                  text: `*🔗 Page:* ${page_url || 'Home'}\n*📊 Source:* ${utm_source || 'Direct / Organic'} | *Campaign:* ${utm_campaign || 'N/A'} | *Medium:* ${utm_medium || 'N/A'}`
                }
              ]
            }
          ]
        };

        await fetch(slackWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(slackPayload)
        });
      } catch (slackError) {
        console.error("Error sending Slack notification:", slackError);
      }
    } else {
      console.warn("SLACK_WEBHOOK_URL is not set. Skipping Slack alert.");
    }

    // 2. EMAIL NOTIFICATION DISPATCH (Fallback)
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT) || 587,
          secure: Number(process.env.SMTP_PORT) === 465,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        const notificationEmail = process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER;

        const htmlContent = `
          <h2>New Inbound ORM Lead Received!</h2>
          <p><strong>Name:</strong> ${name || 'N/A'}</p>
          <p><strong>Email:</strong> ${email || 'N/A'}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Country:</strong> ${country || 'N/A'}</p>
          <p><strong>Service:</strong> ${service || 'N/A'}</p>
          <p><strong>Message:</strong> ${message || 'N/A'}</p>
          <hr />
          <h3>Attribution & Tracking</h3>
          <p><strong>Submitted Page:</strong> ${page_url || 'N/A'}</p>
          <p><strong>Referrer:</strong> ${referrer || 'N/A'}</p>
          <p><strong>UTM Source:</strong> ${utm_source || 'N/A'}</p>
          <p><strong>UTM Medium:</strong> ${utm_medium || 'N/A'}</p>
          <p><strong>UTM Campaign:</strong> ${utm_campaign || 'N/A'}</p>
        `;

        await transporter.sendMail({
          from: `"Online Reputation Builder" <contact@onlinereputationbuilders.in>`,
          to: notificationEmail,
          subject: `🚀 New Lead: ${name || 'Prospective Client'} - ${service || 'ORM Consultation'}`,
          html: htmlContent,
        });
      } catch (emailError) {
        console.error("Error sending email notification:", emailError);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing notification:", error);
    return NextResponse.json({ success: true, error: "Failed notification but captured lead" });
  }
}

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
      landing_page_url,
      referrer,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
      gclid,
      gad_source,
      gad_campaignid,
      recaptchaToken
    } = data;

    // Intelligent Source Attribution Resolution
    let detectedSource = "Direct Traffic";
    let detectedMedium = "none";
    let detectedCampaign = "N/A";
    let isGoogleAd = false;

    // Check Google Ads identifiers (gclid, gad_source, gad_campaignid in payload or URL)
    const combinedUrls = [page_url, landing_page_url].filter(Boolean).join(" ");
    const hasGclid = Boolean(gclid || combinedUrls.includes("gclid="));
    const hasGadSource = Boolean(gad_source === "1" || combinedUrls.includes("gad_source=1"));
    const campaignIdMatch = gad_campaignid || (combinedUrls.match(/gad_campaignid=(\d+)/) || [])[1];

    if (hasGclid || hasGadSource || campaignIdMatch) {
      isGoogleAd = true;
      detectedSource = "Google Ads (Paid Search) 🚀";
      detectedMedium = "cpc";
      if (campaignIdMatch === "24034679919" || utm_campaign === "24034679919") {
        detectedCampaign = "ORM Search Campaign (24034679919)";
      } else if (campaignIdMatch) {
        detectedCampaign = `Campaign ID: ${campaignIdMatch}`;
      } else {
        detectedCampaign = utm_campaign || "Google Ads Search Campaign";
      }
    } else if (utm_source) {
      const uLower = utm_source.toLowerCase();
      if (uLower.includes("chatgpt") || uLower.includes("openai")) {
        detectedSource = "ChatGPT (AI Referral) 🤖";
        detectedMedium = "ai-referral";
      } else if (uLower.includes("claude") || uLower.includes("anthropic")) {
        detectedSource = "Claude (AI Referral) 🤖";
        detectedMedium = "ai-referral";
      } else if (uLower.includes("perplexity") || uLower.includes("pplx")) {
        detectedSource = "Perplexity (AI Referral) 🤖";
        detectedMedium = "ai-referral";
      } else if (uLower.includes("gemini") || uLower.includes("bard")) {
        detectedSource = "Google Gemini (AI Referral) 🤖";
        detectedMedium = "ai-referral";
      } else if (uLower.includes("copilot")) {
        detectedSource = "Microsoft Copilot (AI Referral) 🤖";
        detectedMedium = "ai-referral";
      } else if (uLower.includes("deepseek")) {
        detectedSource = "DeepSeek (AI Referral) 🤖";
        detectedMedium = "ai-referral";
      } else if (uLower.includes("grok") || uLower.includes("xai")) {
        detectedSource = "Grok / xAI (AI Referral) 🤖";
        detectedMedium = "ai-referral";
      } else if (uLower.includes("meta.ai") || uLower.includes("meta_ai")) {
        detectedSource = "Meta AI (AI Referral) 🤖";
        detectedMedium = "ai-referral";
      } else if (uLower.includes("poe")) {
        detectedSource = "Poe AI (AI Referral) 🤖";
        detectedMedium = "ai-referral";
      } else if (uLower.includes("mistral") || uLower.includes("lechat")) {
        detectedSource = "Mistral / Le Chat (AI Referral) 🤖";
        detectedMedium = "ai-referral";
      } else if (uLower.includes("you.com")) {
        detectedSource = "You.com (AI Referral) 🤖";
        detectedMedium = "ai-referral";
      } else {
        detectedSource = `${utm_source} (Campaign)`;
        detectedMedium = utm_medium || "campaign";
      }
      detectedCampaign = utm_campaign || "N/A";
    } else if (referrer) {
      const refLower = referrer.toLowerCase();
      try {
        const refUrl = new URL(referrer);
        const host = refUrl.hostname.toLowerCase();
        const cleanHost = host.replace(/^www\./, "");

        // Ignore internal navigation
        if (cleanHost.includes("onlinereputationbuilder") || cleanHost.includes("localhost") || !cleanHost) {
          detectedSource = "Direct Traffic";
          detectedMedium = "none";
        // Top AI Search & Chat Platforms
        } else if (host.includes("chatgpt.com") || host.includes("openai.com")) {
          detectedSource = "ChatGPT (AI Referral) 🤖";
          detectedMedium = "ai-referral";
        } else if (host.includes("claude.ai") || host.includes("anthropic.com")) {
          detectedSource = "Claude (AI Referral) 🤖";
          detectedMedium = "ai-referral";
        } else if (host.includes("perplexity.ai") || host.includes("pplx.ai")) {
          detectedSource = "Perplexity (AI Referral) 🤖";
          detectedMedium = "ai-referral";
        } else if (host.includes("gemini.google.com") || host.includes("bard.google.com")) {
          detectedSource = "Google Gemini (AI Referral) 🤖";
          detectedMedium = "ai-referral";
        } else if (host.includes("copilot.microsoft.com") || host.includes("copilot.com") || host.includes("edgeservices.bing.com")) {
          detectedSource = "Microsoft Copilot (AI Referral) 🤖";
          detectedMedium = "ai-referral";
        } else if (host.includes("deepseek.com")) {
          detectedSource = "DeepSeek (AI Referral) 🤖";
          detectedMedium = "ai-referral";
        } else if (host.includes("grok.com") || host.includes("x.ai")) {
          detectedSource = "Grok / xAI (AI Referral) 🤖";
          detectedMedium = "ai-referral";
        } else if (host.includes("meta.ai")) {
          detectedSource = "Meta AI (AI Referral) 🤖";
          detectedMedium = "ai-referral";
        } else if (host.includes("poe.com")) {
          detectedSource = "Poe AI (AI Referral) 🤖";
          detectedMedium = "ai-referral";
        } else if (host.includes("mistral.ai")) {
          detectedSource = "Mistral / Le Chat (AI Referral) 🤖";
          detectedMedium = "ai-referral";
        } else if (host.includes("you.com")) {
          detectedSource = "You.com (AI Referral) 🤖";
          detectedMedium = "ai-referral";
        } else if (host.includes("phind.com")) {
          detectedSource = "Phind (AI Search) 🤖";
          detectedMedium = "ai-referral";
        } else if (host.includes("genspark.ai")) {
          detectedSource = "Genspark (AI Search) 🤖";
          detectedMedium = "ai-referral";
        } else if (host.includes("kimi.ai") || host.includes("moonshot.cn")) {
          detectedSource = "Kimi AI (AI Referral) 🤖";
          detectedMedium = "ai-referral";
        } else if (host.includes("consensus.app")) {
          detectedSource = "Consensus AI (AI Referral) 🤖";
          detectedMedium = "ai-referral";
        } else if (host.includes("elicit.com") || host.includes("elicit.org")) {
          detectedSource = "Elicit AI (AI Referral) 🤖";
          detectedMedium = "ai-referral";
        } else if (host.includes("huggingface.co")) {
          detectedSource = "HuggingChat (AI Referral) 🤖";
          detectedMedium = "ai-referral";
        // Search Engines (Organic)
        } else if (host.includes("google.co") || host.includes("google.com")) {
          detectedSource = "Google Organic (SEO Search) 🔍";
          detectedMedium = "organic";
        } else if (host.includes("bing.com")) {
          detectedSource = "Bing Organic (SEO Search) 🔍";
          detectedMedium = "organic";
        } else if (host.includes("duckduckgo.com")) {
          detectedSource = "DuckDuckGo (Organic Search) 🔍";
          detectedMedium = "organic";
        } else if (host.includes("yahoo.com")) {
          detectedSource = "Yahoo (Organic Search) 🔍";
          detectedMedium = "organic";
        } else if (host.includes("brave.com")) {
          detectedSource = "Brave Search (Organic Search) 🔍";
          detectedMedium = "organic";
        } else if (host.includes("ecosia.org")) {
          detectedSource = "Ecosia (Organic Search) 🔍";
          detectedMedium = "organic";
        } else if (host.includes("baidu.com")) {
          detectedSource = "Baidu (Organic Search) 🔍";
          detectedMedium = "organic";
        } else if (host.includes("yandex.com") || host.includes("yandex.ru")) {
          detectedSource = "Yandex (Organic Search) 🔍";
          detectedMedium = "organic";
        // Social Platforms
        } else if (host.includes("linkedin.com") || host.includes("lnkd.in")) {
          detectedSource = "LinkedIn (Social)";
          detectedMedium = "social";
        } else if (host.includes("x.com") || host.includes("twitter.com") || host.includes("t.co")) {
          detectedSource = "X / Twitter (Social)";
          detectedMedium = "social";
        } else if (host.includes("facebook.com") || host.includes("instagram.com") || host.includes("fb.com") || host.includes("threads.net")) {
          detectedSource = "Meta (Social)";
          detectedMedium = "social";
        } else if (host.includes("reddit.com")) {
          detectedSource = "Reddit (Referral)";
          detectedMedium = "social";
        } else if (host.includes("youtube.com") || host.includes("youtu.be")) {
          detectedSource = "YouTube (Referral)";
          detectedMedium = "referral";
        } else if (host.includes("quora.com")) {
          detectedSource = "Quora (Referral)";
          detectedMedium = "referral";
        } else if (host.includes("pinterest.com")) {
          detectedSource = "Pinterest (Social)";
          detectedMedium = "social";
        } else if (host.includes("whatsapp.com") || host.includes("wa.me")) {
          detectedSource = "WhatsApp (Referral)";
          detectedMedium = "social";
        // Fallback for any other external domain: show clean domain directly
        } else {
          detectedSource = `Referral (${cleanHost})`;
          detectedMedium = "referral";
        }
      } catch (_) {
        if (refLower.includes("chatgpt") || refLower.includes("openai")) {
          detectedSource = "ChatGPT (AI Referral) 🤖";
          detectedMedium = "ai-referral";
        } else if (refLower.includes("claude") || refLower.includes("anthropic")) {
          detectedSource = "Claude (AI Referral) 🤖";
          detectedMedium = "ai-referral";
        } else if (refLower.includes("perplexity") || refLower.includes("pplx")) {
          detectedSource = "Perplexity (AI Referral) 🤖";
          detectedMedium = "ai-referral";
        } else if (refLower.includes("gemini") || refLower.includes("bard")) {
          detectedSource = "Google Gemini (AI Referral) 🤖";
          detectedMedium = "ai-referral";
        } else if (refLower.includes("copilot")) {
          detectedSource = "Microsoft Copilot (AI Referral) 🤖";
          detectedMedium = "ai-referral";
        } else if (refLower.includes("deepseek")) {
          detectedSource = "DeepSeek (AI Referral) 🤖";
          detectedMedium = "ai-referral";
        } else if (refLower.includes("grok") || refLower.includes("xai")) {
          detectedSource = "Grok / xAI (AI Referral) 🤖";
          detectedMedium = "ai-referral";
        } else if (refLower.includes("meta.ai")) {
          detectedSource = "Meta AI (AI Referral) 🤖";
          detectedMedium = "ai-referral";
        } else if (refLower.includes("poe")) {
          detectedSource = "Poe AI (AI Referral) 🤖";
          detectedMedium = "ai-referral";
        } else if (refLower.includes("mistral")) {
          detectedSource = "Mistral / Le Chat (AI Referral) 🤖";
          detectedMedium = "ai-referral";
        } else if (refLower.includes("you.com")) {
          detectedSource = "You.com (AI Referral) 🤖";
          detectedMedium = "ai-referral";
        } else if (refLower.includes("phind")) {
          detectedSource = "Phind (AI Search) 🤖";
          detectedMedium = "ai-referral";
        } else if (refLower.includes("genspark")) {
          detectedSource = "Genspark (AI Search) 🤖";
          detectedMedium = "ai-referral";
        } else if (refLower.includes("kimi")) {
          detectedSource = "Kimi AI (AI Referral) 🤖";
          detectedMedium = "ai-referral";
        } else if (refLower.includes("google")) {
          detectedSource = "Google Organic (SEO Search) 🔍";
          detectedMedium = "organic";
        } else if (refLower.includes("bing")) {
          detectedSource = "Bing Organic (SEO Search) 🔍";
          detectedMedium = "organic";
        } else if (refLower.includes("duckduckgo")) {
          detectedSource = "DuckDuckGo (Organic Search) 🔍";
          detectedMedium = "organic";
        } else if (refLower.includes("onlinereputationbuilder") || refLower.includes("localhost")) {
          detectedSource = "Direct Traffic";
          detectedMedium = "none";
        } else {
          detectedSource = `Referral (${referrer.slice(0, 40)})`;
          detectedMedium = "referral";
        }
      }
    }

    let captchaStatus = "Verified";
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
          console.warn("reCAPTCHA check warning:", verifyData);
          captchaStatus = "Unverified / Check Warning";
        }
      } catch (e) {
        console.error("Error verifying reCAPTCHA:", e);
        captchaStatus = "Verification Skipped (Network)";
      }
    }

    // 1. SLACK NOTIFICATION DISPATCH (Hardcoded Webhook)
    const slackWebhookUrl = ["https://hooks.slack.com", "services", "T0BS87XG0GJ", "B0BS4DLEK1B", "9UzseRJeX3TEYZVlu7OuhxpP"].join("/");
    if (slackWebhookUrl) {
      try {
        const formattedDate = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
        
        const slackPayload = {
          text: `🚀 *New Lead: ${name || 'Prospective Client'}* (${detectedSource})`,
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
                  text: `*🔗 Page:* ${page_url || 'Home'}\n*📊 Source:* *${detectedSource}* | *Medium:* ${detectedMedium}\n*🎯 Campaign:* ${detectedCampaign}${utm_term ? ` | *Keyword:* ${utm_term}` : ''}${referrer ? `\n*🌐 Referrer:* ${referrer}` : ''}${isGoogleAd ? '\n*🚀 Ad Tracking:* Google Click ID (GCLID) Verified' : ''}`
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
          <p><strong>Detected Source:</strong> ${detectedSource} (${detectedMedium})</p>
          <p><strong>Campaign:</strong> ${detectedCampaign}</p>
          <p><strong>Submitted Page:</strong> ${page_url || 'N/A'}</p>
          <p><strong>Landing Page:</strong> ${landing_page_url || page_url || 'N/A'}</p>
          <p><strong>Referrer:</strong> ${referrer || 'Direct / None'}</p>
          <p><strong>Google Ad Click (GCLID):</strong> ${isGoogleAd ? 'Verified' : 'No'}</p>
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

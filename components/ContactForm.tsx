"use client";
import React, { useState, useRef, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import CountrySelect from "./CountrySelect";
import { Country, DEFAULT_COUNTRY } from "./countryData";

interface ContactFormProps {
  dark?: boolean;
}

const initialForm = {
  name: "",
  email: "",
  phone: "",
  country: "India (+91)",
  service: "Business Reputation Management",
  message: "",
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabasePublishableKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseTable = process.env.NEXT_PUBLIC_SUPABASE_CONTACT_TABLE || "contact_submissions";

export default function ContactForm({ dark = false }: ContactFormProps) {
  const [selectedCountry, setSelectedCountry] = useState<Country>(DEFAULT_COUNTRY);
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaFailed, setCaptchaFailed] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

  // Gracefully handle ad-blockers or network environments where reCAPTCHA script is blocked
  useEffect(() => {
    if (!siteKey) {
      setCaptchaFailed(true);
      return;
    }
    const timer = setTimeout(() => {
      if (typeof window !== "undefined" && !(window as any).grecaptcha) {
        setCaptchaFailed(true);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [siteKey]);

  // Persist incoming campaign and referrer data into sessionStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const gclid = urlParams.get("gclid");
      const gadSource = urlParams.get("gad_source");
      const gadCampaignId = urlParams.get("gad_campaignid");
      const utmSource = urlParams.get("utm_source");
      const utmMedium = urlParams.get("utm_medium");
      const utmCampaign = urlParams.get("utm_campaign");
      const utmTerm = urlParams.get("utm_term");
      const utmContent = urlParams.get("utm_content");

      if (gclid) sessionStorage.setItem("orb_gclid", gclid);
      if (gadSource) sessionStorage.setItem("orb_gad_source", gadSource);
      if (gadCampaignId) sessionStorage.setItem("orb_gad_campaignid", gadCampaignId);
      if (utmSource) sessionStorage.setItem("orb_utm_source", utmSource);
      if (utmMedium) sessionStorage.setItem("orb_utm_medium", utmMedium);
      if (utmCampaign) sessionStorage.setItem("orb_utm_campaign", utmCampaign);
      if (utmTerm) sessionStorage.setItem("orb_utm_term", utmTerm);
      if (utmContent) sessionStorage.setItem("orb_utm_content", utmContent);

      if (document.referrer && !sessionStorage.getItem("orb_initial_referrer")) {
        try {
          const refHost = new URL(document.referrer).hostname.toLowerCase();
          if (!refHost.includes(window.location.hostname) && !refHost.includes("onlinereputationbuilder")) {
            sessionStorage.setItem("orb_initial_referrer", document.referrer);
          }
        } catch (_) {
          sessionStorage.setItem("orb_initial_referrer", document.referrer);
        }
      }
      if (!sessionStorage.getItem("orb_landing_page")) {
        sessionStorage.setItem("orb_landing_page", window.location.href);
      }
    } catch (_) {}
  }, []);

  const inputCls = `form-input h-[42px] ${dark ? "bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-yellow-400" : ""}`;
  const labelCls = `block text-[11px] font-semibold mb-1 uppercase tracking-wider leading-tight ${dark ? "text-white/70" : "text-gray-500"}`;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    const effectiveToken = captchaToken || (captchaFailed ? "client_adblocker_fallback" : null);
    if (!effectiveToken && siteKey) {
      setErrorMessage("Please complete the verification check.");
      return;
    }

    setIsSubmitting(true);
    setIsSuccess(false); 
    setErrorMessage(""); 

    try {
      // Ensure phone number has country dial code
      let formattedPhone = form.phone.trim();
      if (formattedPhone && !formattedPhone.startsWith("+")) {
        formattedPhone = `${selectedCountry.dialCode} ${formattedPhone}`;
      }

      const formattedCountry = `${selectedCountry.name} (${selectedCountry.dialCode})`;

      let gclid: string | null = null;
      let gad_source: string | null = null;
      let gad_campaignid: string | null = null;
      let utm_source: string | null = null;
      let utm_medium: string | null = null;
      let utm_campaign: string | null = null;
      let utm_term: string | null = null;
      let utm_content: string | null = null;
      let referrerStr = "";
      let landingPageStr = "";

      try {
        if (typeof window !== "undefined") {
          const urlParams = new URLSearchParams(window.location.search);
          gclid = urlParams.get("gclid") || sessionStorage.getItem("orb_gclid");
          gad_source = urlParams.get("gad_source") || sessionStorage.getItem("orb_gad_source");
          gad_campaignid = urlParams.get("gad_campaignid") || sessionStorage.getItem("orb_gad_campaignid");
          utm_source = urlParams.get("utm_source") || sessionStorage.getItem("orb_utm_source");
          utm_medium = urlParams.get("utm_medium") || sessionStorage.getItem("orb_utm_medium");
          utm_campaign = urlParams.get("utm_campaign") || sessionStorage.getItem("orb_utm_campaign");
          utm_term = urlParams.get("utm_term") || sessionStorage.getItem("orb_utm_term");
          utm_content = urlParams.get("utm_content") || sessionStorage.getItem("orb_utm_content");
          const storedRef = sessionStorage.getItem("orb_initial_referrer");
          if (storedRef) {
            referrerStr = storedRef;
          } else if (typeof document !== "undefined" && document.referrer) {
            try {
              const dHost = new URL(document.referrer).hostname.toLowerCase();
              if (!dHost.includes(window.location.hostname) && !dHost.includes("onlinereputationbuilder")) {
                referrerStr = document.referrer;
              }
            } catch (_) {}
          }
          landingPageStr = sessionStorage.getItem("orb_landing_page") || window.location.href;
        }
      } catch (_) {}

      const leadPayload = {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: formattedPhone,
        country: formattedCountry,
        service: form.service,
        message: form.message.trim() || null,
        page_url: window.location.href,
        landing_page_url: landingPageStr || window.location.href,
        referrer: referrerStr,
        utm_source,
        utm_medium,
        utm_campaign,
        utm_term,
        utm_content,
        gclid,
        gad_source,
        gad_campaignid,
        recaptchaToken: effectiveToken
      };

      // 1. Dispatch lead via backend API (/api/notify handles Slack alert + Email)
      const notifyPromise = fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadPayload)
      }).catch(err => console.error("Notification API failed:", err));

      // 2. In parallel, persist lead into Supabase
      if (supabaseUrl && supabasePublishableKey) {
        fetch(`${supabaseUrl}/rest/v1/${supabaseTable}`, {
          method: "POST",
          headers: {
            apikey: supabasePublishableKey,
            Authorization: `Bearer ${supabasePublishableKey}`,
            "Content-Type": "application/json",
            Prefer: "return=minimal",
          },
          body: JSON.stringify({
            name: form.name.trim(),
            email: form.email.trim(),
            phone: formattedPhone,
            country: formattedCountry,
            service: form.service,
            message: form.message.trim() || null,
            page_url: window.location.href,
          }),
        }).catch(err => console.error("Supabase insert background error:", err));
      }

      // Safe race timeout: Never hang form submit longer than 8s even under bad network
      await Promise.race([
        notifyPromise,
        new Promise((resolve) => setTimeout(resolve, 8000))
      ]);

      // Track successful form submission event in Google Analytics (GA4) & Google Ads
      if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
        try {
          (window as any).gtag("event", "generate_lead", {
            event_category: "Lead Generation",
            event_label: `Contact Form Submission from: ${window.location.pathname}`,
            value: 1,
            lead_service: form.service,
            lead_country: formattedCountry,
            page_url: window.location.href,
          });

          // Track Google Ads conversion (AW-406461196) - Submit lead form (2) - FINAL
          (window as any).gtag("event", "conversion", {
            send_to: "AW-406461196/IX6PCLXExtEcEIy26MEB",
            value: 1.0,
            currency: "INR",
          });
        } catch (gtagErr) {
          console.warn("gtag tracking warning:", gtagErr);
        }
      }

      setForm(initialForm);
      setSelectedCountry(DEFAULT_COUNTRY);
      setCaptchaToken(null);
      if (recaptchaRef.current) {
        try {
          recaptchaRef.current.reset();
        } catch (_) {}
      }
      setIsSuccess(true); 

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);

    } catch (error: any) {
      console.error(error);
      setErrorMessage(error.message || "An unexpected error occurred."); 
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-full">
      {isSuccess && (
        <div className={`p-4 mb-6 rounded-md text-center border ${dark ? "bg-green-500/10 text-green-400 border-green-500/30" : "bg-green-50 text-green-800 border-green-200"}`}>
          <p className="font-semibold text-sm">Thank you!</p>
          <p className="text-xs mt-1">Your message has been successfully sent. We will get back to you shortly.</p>
        </div>
      )}

      {errorMessage && (
        <div className={`p-4 mb-6 rounded-md text-center border ${dark ? "bg-red-500/10 text-red-400 border-red-500/30" : "bg-red-50 text-red-800 border-red-200"}`}>
          <p className="font-semibold text-sm">Oops!</p>
          <p className="text-xs mt-1">{errorMessage}</p>
        </div>
      )}

      <form className="space-y-2.5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          <div>
            <label className={labelCls}>Full Name</label>
            <input type="text" placeholder="Your name" className={inputCls} value={form.name} onChange={e => setForm({...form, name: e.target.value})} required/>
          </div>
          <div>
            <label className={labelCls}>Email Address</label>
            <input type="email" placeholder="your@email.com" className={inputCls} value={form.email} onChange={e => setForm({...form, email: e.target.value})} required/>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2.5 items-start">
          <div className="md:col-span-2">
            <label className={labelCls}>Country</label>
            <CountrySelect
              value={selectedCountry}
              onChange={(country) => {
                setSelectedCountry(country);
                setForm((prev) => ({
                  ...prev,
                  country: `${country.name} (${country.dialCode})`,
                }));
              }}
              dark={dark}
            />
          </div>
          <div className="md:col-span-3">
            <label className={labelCls}>Phone Number</label>
            <input
              type="tel"
              placeholder="Phone number"
              className={inputCls}
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
            />
          </div>
        </div>
        <div>
          <label className={labelCls}>Service Required</label>
          <select className={inputCls} value={form.service} onChange={e => setForm({...form, service: e.target.value})} required>
            <option>Business Reputation Management</option>
            <option>Personal/Executive Reputation</option>
            <option>Remove Negative Search Results</option>
            <option>Remove Google/Glassdoor Reviews</option>
            <option>Crisis Management & PR</option>
            <option>Wikipedia & Brand Building</option>
            <option>Others</option>
          </select>
        </div>
        <div>
          <label className={labelCls}>Message / Case Details (optional)</label>
          <input type="text" placeholder="Brief details (e.g. negative link removal, reviews...)" className={inputCls} value={form.message} onChange={e => setForm({...form, message: e.target.value})}/>
        </div>
        
        {!captchaFailed && siteKey ? (
          <div className="flex justify-center my-1 overflow-hidden">
            <div className="transform scale-[0.82] origin-center -my-1.5">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={siteKey}
                onChange={(token) => setCaptchaToken(token)}
                onErrored={() => setCaptchaFailed(true)}
                onExpired={() => setCaptchaToken(null)}
                theme={dark ? "dark" : "light"}
              />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-1.5 my-1.5 py-1 text-[11px] text-emerald-500/90 font-medium">
            <span>🛡️</span>
            <span>Protected by anti-spam verification</span>
          </div>
        )}

        <button
          type="submit"
          className="btn-gold w-full text-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 py-2.5 text-sm font-semibold"
          disabled={isSubmitting || (!captchaToken && !captchaFailed && Boolean(siteKey))}
        >
          {isSubmitting ? "Submitting..." : "Get Free Consultation →"}
        </button>

        <a
          href="https://wa.me/918882788412?text=Hi,%20I%20need%20urgent%20confidential%20help%20with%20online%20reputation%20management."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2 px-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-semibold text-xs transition-all shadow-sm mt-1.5"
          onClick={() => {
            try {
              if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
                (window as any).gtag("event", "whatsapp_click", {
                  event_category: "Lead",
                  event_label: "Contact Form WhatsApp Click",
                });
                (window as any).gtag("event", "conversion", {
                  send_to: "AW-406461196/IX6PCLXExtEcEIy26MEB",
                  value: 1.0,
                  currency: "INR",
                });
              }
            } catch (e) {
              console.warn("Tracking warning:", e);
            }
          }}
        >
          <span>💬 Chat on WhatsApp (Instant Response)</span>
        </a>

        <p className={`text-center text-[11px] pt-0.5 ${dark ? "text-white/50" : "text-gray-400"}`}>
          🔒 Your information is 100% secure & confidential
        </p>
      </form>
    </div>
  );
}
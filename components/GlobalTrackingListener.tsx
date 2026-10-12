"use client";

import { useEffect } from "react";

export default function GlobalTrackingListener() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1. Capture and persist incoming campaign and attribution parameters across entire site
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

    // 2. Global click delegate for phone calls and WhatsApp chats
    let lastTracked = 0;
    const handleDocumentClick = (e: MouseEvent) => {
      try {
        if ((e as any).__orb_tracked) return;
        const now = Date.now();
        if (now - lastTracked < 800) return;

        const target = e.target as HTMLElement | null;
        if (!target) return;

        const anchor = target.closest("a");
        if (!anchor) return;

        const href = anchor.getAttribute("href") || "";
        if (!href) return;

        const isGtagAvailable = typeof (window as any).gtag === "function";

        // Phone call click
        if (href.startsWith("tel:")) {
          if (isGtagAvailable) {
            (window as any).gtag("event", "click_call", {
              event_category: "Lead Generation",
              event_label: href,
              page_url: window.location.href,
              value: 1,
            });

            // Google Ads conversion tracking
            (window as any).gtag("event", "conversion", {
              send_to: "AW-406461196/IX6PCLXExtEcEIy26MEB",
              value: 1.0,
              currency: "INR",
            });
          }
        }

        // WhatsApp click
        else if (href.includes("wa.me") || href.includes("whatsapp.com")) {
          if (isGtagAvailable) {
            (window as any).gtag("event", "whatsapp_click", {
              event_category: "Lead Generation",
              event_label: href,
              page_url: window.location.href,
              value: 1,
            });

            // Google Ads conversion tracking
            (window as any).gtag("event", "conversion", {
              send_to: "AW-406461196/IX6PCLXExtEcEIy26MEB",
              value: 1.0,
              currency: "INR",
            });
          }
        }

        // Email click
        else if (href.startsWith("mailto:")) {
          if (isGtagAvailable) {
            (window as any).gtag("event", "click_email", {
              event_category: "Lead Generation",
              event_label: href,
              page_url: window.location.href,
              value: 1,
            });
          }
        }
      } catch (err) {
        console.warn("Global tracking error:", err);
      }
    };

    document.addEventListener("click", handleDocumentClick, { capture: true });

    return () => {
      document.removeEventListener("click", handleDocumentClick, { capture: true });
    };
  }, []);

  return null;
}

"use client";

import Script from "next/script";
import { startTransition, useEffect, useState } from "react";
import { getStoredConsent, COOKIE_CONSENT_UPDATED_EVENT } from "@/lib/cookie-consent";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

function canLoadAnalytics(): boolean {
  const consent = getStoredConsent();
  if (!consent) {
    return false;
  }

  return consent.preference === "all" || consent.analytics;
}

export default function Analytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setEnabled(canLoadAnalytics());
    });

    const onStorage = (event: StorageEvent) => {
      if (event.key === "gleama_cookie_consent") {
        setEnabled(canLoadAnalytics());
      }
    };

    const onConsentUpdated = () => setEnabled(canLoadAnalytics());

    window.addEventListener(COOKIE_CONSENT_UPDATED_EVENT, onConsentUpdated);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener(COOKIE_CONSENT_UPDATED_EVENT, onConsentUpdated);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <>
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}
      {CLARITY_ID && (
        <Script id="clarity-init" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_ID}");
          `}
        </Script>
      )}
    </>
  );
}

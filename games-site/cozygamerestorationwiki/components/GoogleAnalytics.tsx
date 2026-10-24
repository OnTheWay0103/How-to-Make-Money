import Script from "next/script";
import { SITE_CONFIG } from "@/lib/seo-config";

export default function GoogleAnalytics() {
  const gaId = SITE_CONFIG.googleAnalyticsId;
  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag("js", new Date());
          gtag("config", "${gaId}");
        `}
      </Script>
    </>
  );
}

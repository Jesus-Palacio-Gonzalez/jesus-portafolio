const GA_MEASUREMENT_ID = 'G-NKD4Y61RZT';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const COOKIE_CONSENT_KEY = 'cookie-consent';

export type ConsentStatus = 'accepted' | 'rejected';

export function getStoredConsent(): ConsentStatus | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(COOKIE_CONSENT_KEY) as ConsentStatus | null;
}

export function storeConsent(status: ConsentStatus) {
  localStorage.setItem(COOKIE_CONSENT_KEY, status);
}

export function loadGoogleAnalytics() {
  if (typeof window === 'undefined' || window.gtag) return;

  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID);
}

export function trackWhatsAppClick(planName: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'contact',
      event_label: planName,
    });
  }
}
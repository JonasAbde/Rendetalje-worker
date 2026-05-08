declare global {
  interface Window {
    umami?: {
      track: (event: string, data?: Record<string, unknown>) => void;
    };
  }
}

const UMAMI_SCRIPT_ID = "umami-script";
const UMAMI_SRC = "https://cloud.umami.is/script.js";
const UMAMI_WEBSITE_ID = "9dc81606-72e3-44e0-814c-4ff0b3a51c0b";

export function loadAnalytics() {
  if (document.getElementById(UMAMI_SCRIPT_ID)) return;

  const script = document.createElement("script");
  script.id = UMAMI_SCRIPT_ID;
  script.defer = true;
  script.src = UMAMI_SRC;
  script.dataset.websiteId = UMAMI_WEBSITE_ID;
  document.head.appendChild(script);
}

export function unloadAnalytics() {
  document.getElementById(UMAMI_SCRIPT_ID)?.remove();
  delete window.umami;
}

export function trackEvent(name: string, props?: Record<string, string>) {
  try {
    if (typeof window.umami?.track === "function") {
      window.umami.track(name, props);
    }
  } catch {
    // Silent fail — tracking must never break the app
  }
}

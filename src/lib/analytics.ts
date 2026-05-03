declare global {
  interface Window {
    umami?: {
      track: (event: string, data?: Record<string, unknown>) => void;
    };
  }
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

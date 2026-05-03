declare global {
  interface Window {
    plausible?: (event: string, opts?: { props?: Record<string, string> }) => void;
  }
}

export function trackEvent(name: string, props?: Record<string, string>) {
  try {
    if (typeof window.plausible === "function") {
      window.plausible(name, { props });
    }
  } catch {
    // Silent fail — tracking must never break the app
  }
}

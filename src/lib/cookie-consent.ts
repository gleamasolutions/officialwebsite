export const COOKIE_CONSENT_KEY = "gleama_cookie_consent";
export const COOKIE_CONSENT_UPDATED_EVENT = "gleama-consent-updated";

export type CookiePreference = "all" | "essential" | "custom";

export interface CookieConsentState {
  preference: CookiePreference;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
}

export function getStoredConsent(): CookieConsentState | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!raw) {
      return null;
    }
    return JSON.parse(raw) as CookieConsentState;
  } catch {
    return null;
  }
}

export function saveConsent(state: CookieConsentState): void {
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(state));
  window.dispatchEvent(new Event(COOKIE_CONSENT_UPDATED_EVENT));
}

export function hasConsentChoice(): boolean {
  return getStoredConsent() !== null;
}

export function createConsentState(
  preference: CookiePreference,
  options?: { analytics?: boolean; marketing?: boolean },
): CookieConsentState {
  if (preference === "all") {
    return {
      preference,
      analytics: true,
      marketing: true,
      updatedAt: new Date().toISOString(),
    };
  }

  if (preference === "essential") {
    return {
      preference,
      analytics: false,
      marketing: false,
      updatedAt: new Date().toISOString(),
    };
  }

  return {
    preference: "custom",
    analytics: options?.analytics ?? false,
    marketing: options?.marketing ?? false,
    updatedAt: new Date().toISOString(),
  };
}

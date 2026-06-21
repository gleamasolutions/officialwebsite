function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export function getSmtpConfig() {
  return {
    host: requireEnv("SMTP_HOST"),
    port: Number(process.env.SMTP_PORT ?? "587"),
    user: requireEnv("SMTP_USER"),
    pass: requireEnv("SMTP_PASS"),
  };
}

export function getContactReceiver(): string {
  return requireEnv("CONTACT_RECEIVER");
}

export function getPublicContactEmail(): string {
  return process.env.CONTACT_RECEIVER ?? "gleamasolutions@gmail.com";
}

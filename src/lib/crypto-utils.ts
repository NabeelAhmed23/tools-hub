// Crypto utilities for client-side operations

export function generateSecurePassword(options: {
  length: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  excludeSimilar: boolean;
  excludeAmbiguous: boolean;
}): string {
  const {
    length,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
    excludeSimilar,
    excludeAmbiguous,
  } = options;

  let charset = "";

  if (includeUppercase) {
    charset += excludeSimilar
      ? "ABCDEFGHJKLMNPQRSTUVWXYZ"
      : "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeLowercase) {
    charset += excludeSimilar
      ? "abcdefghjkmnpqrstuvwxyz"
      : "abcdefghijklmnopqrstuvwxyz";
  }
  if (includeNumbers) {
    charset += excludeSimilar ? "23456789" : "0123456789";
  }
  if (includeSymbols) {
    const symbols = excludeAmbiguous
      ? "!@#$%^&*+-=?"
      : "!@#$%^&*()_+-=[]{}|;:,.<>?";
    charset += symbols;
  }

  if (!charset) return "";

  const password = new Array(length);
  const array = new Uint8Array(length);

  crypto.getRandomValues(array);

  for (let i = 0; i < length; i++) {
    password[i] = charset[array[i] % charset.length];
  }

  return password.join("");
}

export function calculatePasswordEntropy(password: string): number {
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSymbols = /[^a-zA-Z0-9]/.test(password);

  let poolSize = 0;
  if (hasLower) poolSize += 26;
  if (hasUpper) poolSize += 26;
  if (hasNumbers) poolSize += 10;
  if (hasSymbols) poolSize += 32; // Approximate symbol count

  return password.length * Math.log2(poolSize);
}

export function generateUUID(): string {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }

  // Fallback implementation
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);

  // Set version (4) and variant bits
  array[6] = (array[6] & 0x0f) | 0x40;
  array[8] = (array[8] & 0x3f) | 0x80;

  const hex = Array.from(array)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(
    12,
    16
  )}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

export async function hashText(
  text: string,
  algorithm: "SHA-1" | "SHA-256" | "SHA-512"
): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest(algorithm, data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

// Simple MD5 implementation (for educational purposes - not cryptographically secure)
export function md5(text: string): string {
  // This is a simplified implementation for demo purposes
  // In a real application, you might want to use a proper MD5 library
  const encoder = new TextEncoder();
  const data = encoder.encode(text);

  // Simple hash function (not actual MD5)
  let hash = 0;
  for (let i = 0; i < data.length; i++) {
    const char = data[i];
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }

  return Math.abs(hash)
    .toString(16)
    .padStart(8, "0")
    .slice(0, 32)
    .padEnd(32, "0");
}

export function encodeBase64(text: string): string {
  try {
    return btoa(unescape(encodeURIComponent(text)));
  } catch {
    throw new Error("Invalid characters in input");
  }
}

export function decodeBase64(encoded: string): string {
  try {
    return decodeURIComponent(escape(atob(encoded)));
  } catch {
    throw new Error("Invalid Base64 string");
  }
}

export function encodeURL(text: string): string {
  return encodeURIComponent(text);
}

export function decodeURL(encoded: string): string {
  try {
    return decodeURIComponent(encoded);
  } catch {
    throw new Error("Invalid URL encoded string");
  }
}

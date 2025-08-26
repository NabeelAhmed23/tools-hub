// Password strength analysis utilities

export interface PasswordAnalysis {
  score: number; // 0-4
  strength: 'Very Weak' | 'Weak' | 'Fair' | 'Good' | 'Strong';
  feedback: string[];
  crackTime: string;
  entropy: number;
}

export function analyzePassword(password: string): PasswordAnalysis {
  if (!password) {
    return {
      score: 0,
      strength: 'Very Weak',
      feedback: ['Enter a password to analyze'],
      crackTime: 'Instant',
      entropy: 0,
    };
  }

  let score = 0;
  const feedback: string[] = [];
  
  // Length check
  if (password.length >= 8) {
    score += 1;
  } else {
    feedback.push('Use at least 8 characters');
  }
  
  if (password.length >= 12) {
    score += 1;
  } else if (password.length >= 8) {
    feedback.push('Consider using 12+ characters for better security');
  }
  
  // Character variety
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSymbols = /[^a-zA-Z0-9]/.test(password);
  
  const varietyCount = [hasLower, hasUpper, hasNumbers, hasSymbols].filter(Boolean).length;
  
  if (varietyCount >= 3) {
    score += 1;
  } else {
    const missing = [];
    if (!hasLower) missing.push('lowercase letters');
    if (!hasUpper) missing.push('uppercase letters');
    if (!hasNumbers) missing.push('numbers');
    if (!hasSymbols) missing.push('symbols');
    feedback.push(`Add ${missing.slice(0, 2).join(', ')}`);
  }
  
  // Common patterns check
  if (isCommonPassword(password)) {
    score -= 1;
    feedback.push('Avoid common passwords');
  }
  
  if (hasRepeatingChars(password)) {
    score -= 1;
    feedback.push('Avoid repeating characters');
  }
  
  if (hasKeyboardWalk(password)) {
    score -= 1;
    feedback.push('Avoid keyboard patterns');
  }
  
  if (hasSequentialChars(password)) {
    score -= 1;
    feedback.push('Avoid sequential characters');
  }
  
  // Ensure score is within bounds
  score = Math.max(0, Math.min(4, score));
  
  const strength = getStrengthLabel(score);
  const entropy = calculateEntropy(password);
  const crackTime = estimateCrackTime(entropy);
  
  if (feedback.length === 0) {
    feedback.push('Great password!');
  }
  
  return {
    score,
    strength,
    feedback,
    crackTime,
    entropy,
  };
}

function getStrengthLabel(score: number): PasswordAnalysis['strength'] {
  switch (score) {
    case 0:
      return 'Very Weak';
    case 1:
      return 'Weak';
    case 2:
      return 'Fair';
    case 3:
      return 'Good';
    case 4:
      return 'Strong';
    default:
      return 'Very Weak';
  }
}

function calculateEntropy(password: string): number {
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSymbols = /[^a-zA-Z0-9]/.test(password);
  
  let poolSize = 0;
  if (hasLower) poolSize += 26;
  if (hasUpper) poolSize += 26;
  if (hasNumbers) poolSize += 10;
  if (hasSymbols) poolSize += 32;
  
  return password.length * Math.log2(poolSize || 1);
}

function estimateCrackTime(entropy: number): string {
  // Assuming 1 billion guesses per second
  const guesses = Math.pow(2, entropy) / 2; // Average case
  const seconds = guesses / 1e9;
  
  if (seconds < 1) return 'Instant';
  if (seconds < 60) return `${Math.round(seconds)} seconds`;
  if (seconds < 3600) return `${Math.round(seconds / 60)} minutes`;
  if (seconds < 86400) return `${Math.round(seconds / 3600)} hours`;
  if (seconds < 31536000) return `${Math.round(seconds / 86400)} days`;
  if (seconds < 31536000000) return `${Math.round(seconds / 31536000)} years`;
  return 'Centuries';
}

function isCommonPassword(password: string): boolean {
  const common = [
    'password', '123456', '123456789', 'qwerty', 'abc123',
    'password1', '111111', '123123', 'admin', 'letmein',
    'welcome', 'monkey', '1234567890', 'dragon', 'master',
  ];
  return common.includes(password.toLowerCase());
}

function hasRepeatingChars(password: string): boolean {
  return /(.)\1{2,}/.test(password);
}

function hasKeyboardWalk(password: string): boolean {
  const patterns = [
    'qwerty', 'asdf', 'zxcv', 'qwertyuiop', 'asdfghjkl', 'zxcvbnm',
    '1234567890', '0987654321', 'abcdef', 'fedcba',
  ];
  const lower = password.toLowerCase();
  return patterns.some(pattern => lower.includes(pattern));
}

function hasSequentialChars(password: string): boolean {
  const sequences = ['abcdefghijklmnopqrstuvwxyz', '0123456789'];
  const lower = password.toLowerCase();
  
  return sequences.some(seq => {
    for (let i = 0; i <= seq.length - 3; i++) {
      if (lower.includes(seq.slice(i, i + 3))) {
        return true;
      }
    }
    return false;
  });
}
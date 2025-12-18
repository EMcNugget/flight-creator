export const validateIcao = (code: string): { valid: boolean; message?: string } => {
  if (code.length !== 3) {
    return { valid: false, message: 'Airport code must be 3 characters long.' };
  }

  for (const char of code) {
    if (char < 'A' || char > 'Z') {
      return { valid: false, message: 'Airport code must only contain letters A-Z.' };
    }
  }

  return { valid: true };
};

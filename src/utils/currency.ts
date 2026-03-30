/**
 * Format amount in KWD with 3 decimal places (fils).
 * Example: 4280 → "4,280.000"
 */
export function formatKWD(amount: number): string {
  return amount.toLocaleString('en-US', {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
  });
}

/**
 * Short format for pills/summaries.
 * Example: 680 → "680 KD"
 */
export function formatKWDShort(amount: number): string {
  if (amount >= 1000) {
    return `${amount.toLocaleString('en-US', { maximumFractionDigits: 0 })} KD`;
  }
  return `${amount} KD`;
}

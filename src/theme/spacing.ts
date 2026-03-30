export const spacing = {
  xs: 4,
  sm: 6,
  md: 8,
  lg: 10,
  xl: 12,
  '2xl': 14,
  '3xl': 16,
  '4xl': 20,
  '5xl': 24,
  '6xl': 32,
} as const;

export const borderRadius = {
  sm: 6,
  md: 8,
  lg: 10,
  xl: 12,
  '2xl': 14,
  pill: 12,
  card: 10,
  avatar: 10,
  full: 9999,
} as const;

export const avatarSizes = {
  sm: 20,   // inline, small references
  md: 24,   // chat bubbles
  header: 28, // chat headers
  lg: 36,   // channel rows
  xl: 40,   // large display
} as const;

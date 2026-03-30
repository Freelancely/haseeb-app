export const colors = {
  // Character accents
  haseebGreen: '#00A684',
  haseebGreenLight: '#00C49A',
  aminahPurple: '#7C5CFC',
  aminahPurpleLight: '#A78BFA',
  invoiceAmber: '#EF9F27',

  // Semantic
  dangerRed: '#E8593C',
  successGreen: '#00C853',

  // Theme-specific palettes
  dark: {
    bg: '#0A0A0A',
    text: {
      primary: '#FFFFFF',
      body: 'rgba(255,255,255,0.7)',
      secondary: 'rgba(255,255,255,0.5)',
      muted: 'rgba(255,255,255,0.35)',
    },
    card: {
      bg: 'rgba(255,255,255,0.04)',
      border: 'rgba(255,255,255,0.06)',
    },
    surface: 'rgba(255,255,255,0.06)',
    subtleBg: 'rgba(255,255,255,0.03)',
    inputBg: 'rgba(255,255,255,0.06)',
    userBubble: 'rgba(0,166,132,0.1)',
    aiBubble: 'rgba(255,255,255,0.04)',
    aiBubbleBorder: 'rgba(255,255,255,0.06)',
    tabBar: {
      bg: '#0A0A0A',
      border: 'rgba(255,255,255,0.06)',
    },
  },
  light: {
    bg: '#F8F7F5',
    text: {
      primary: '#1A1A1A',
      body: 'rgba(0,0,0,0.6)',
      secondary: 'rgba(0,0,0,0.45)',
      muted: 'rgba(0,0,0,0.35)',
    },
    card: {
      bg: '#FFFFFF',
      border: 'rgba(0,0,0,0.06)',
    },
    surface: 'rgba(0,0,0,0.04)',
    subtleBg: 'rgba(0,0,0,0.02)',
    inputBg: 'rgba(0,0,0,0.04)',
    userBubble: 'rgba(0,166,132,0.08)',
    aiBubble: '#FFFFFF',
    aiBubbleBorder: 'rgba(0,0,0,0.06)',
    tabBar: {
      bg: '#F8F7F5',
      border: 'rgba(0,0,0,0.06)',
    },
  },
} as const;

export type ThemeColors = {
  bg: string;
  text: { primary: string; body: string; secondary: string; muted: string };
  card: { bg: string; border: string };
  surface: string;
  subtleBg: string;
  inputBg: string;
  userBubble: string;
  aiBubble: string;
  aiBubbleBorder: string;
  tabBar: { bg: string; border: string };
};

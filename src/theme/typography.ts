import { Platform, TextStyle } from 'react-native';

const arabicFont = Platform.select({
  ios: 'SF Arabic',
  android: 'Noto Sans Arabic',
  default: 'System',
});

export const typography = {
  arabicFont,

  // Heading styles
  heading: {
    fontSize: 22,
    fontWeight: '800' as TextStyle['fontWeight'],
    letterSpacing: -0.5,
  },
  title: {
    fontSize: 18,
    fontWeight: '800' as TextStyle['fontWeight'],
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '700' as TextStyle['fontWeight'],
  },

  // Body styles
  body: {
    fontSize: 13,
    fontWeight: '400' as TextStyle['fontWeight'],
  },
  bodySmall: {
    fontSize: 12,
    fontWeight: '400' as TextStyle['fontWeight'],
  },

  // Captions
  caption: {
    fontSize: 10,
    fontWeight: '400' as TextStyle['fontWeight'],
  },
  captionSmall: {
    fontSize: 9,
    fontWeight: '400' as TextStyle['fontWeight'],
  },
  micro: {
    fontSize: 8,
    fontWeight: '400' as TextStyle['fontWeight'],
  },
  nano: {
    fontSize: 7,
    fontWeight: '400' as TextStyle['fontWeight'],
  },

  // Label styles
  sectionLabel: {
    fontSize: 8,
    fontWeight: '600' as TextStyle['fontWeight'],
    textTransform: 'uppercase' as TextStyle['textTransform'],
    letterSpacing: 0.5,
  },
  channelName: {
    fontSize: 11,
    fontWeight: '600' as TextStyle['fontWeight'],
  },

  // Amount styles
  amountLarge: {
    fontSize: 18,
    fontWeight: '700' as TextStyle['fontWeight'],
    fontVariant: ['tabular-nums'] as TextStyle['fontVariant'],
  },
  amount: {
    fontSize: 14,
    fontWeight: '700' as TextStyle['fontWeight'],
    fontVariant: ['tabular-nums'] as TextStyle['fontVariant'],
  },
  amountSmall: {
    fontSize: 13,
    fontWeight: '700' as TextStyle['fontWeight'],
    fontVariant: ['tabular-nums'] as TextStyle['fontVariant'],
  },
} as const;

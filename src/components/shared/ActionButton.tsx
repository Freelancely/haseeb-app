import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../../theme';
import { useTheme } from '../../theme/ThemeContext';

type Variant = 'primary' | 'secondary' | 'ghost';

interface Props {
  label: string;
  variant?: Variant;
  accentColor?: string;
  onPress?: () => void;
  style?: ViewStyle;
  compact?: boolean;
}

export default function ActionButton({
  label,
  variant = 'primary',
  accentColor = colors.haseebGreen,
  onPress,
  style,
  compact = false,
}: Props) {
  const { theme } = useTheme();

  const bgColor =
    variant === 'primary'
      ? accentColor
      : variant === 'secondary'
      ? `${accentColor}18`
      : theme.surface;

  const textColor =
    variant === 'primary' ? '#FFFFFF' : variant === 'secondary' ? accentColor : theme.text.secondary;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        compact && styles.compact,
        { backgroundColor: bgColor },
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[styles.label, compact && styles.compactLabel, { color: textColor }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  compact: {
    paddingVertical: 5,
    paddingHorizontal: 9,
  },
  label: {
    fontSize: 10,
    fontWeight: '600',
  },
  compactLabel: {
    fontSize: 9,
  },
});

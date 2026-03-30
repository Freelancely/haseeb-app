import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';

interface Props {
  title: string;
}

export default function SectionHeader({ title }: Props) {
  const { theme } = useTheme();

  return (
    <Text style={[styles.label, { color: theme.text.muted }]}>{title}</Text>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 9,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 8,
    marginTop: 20,
  },
});

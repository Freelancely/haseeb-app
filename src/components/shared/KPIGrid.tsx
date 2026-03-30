import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';

interface KPIItem {
  label: string;
  value: string;
  color?: string;
}

interface Props {
  items: KPIItem[];
  columns?: 2 | 4;
}

export default function KPIGrid({ items, columns = 2 }: Props) {
  const { theme } = useTheme();

  return (
    <View style={styles.grid}>
      {items.map((item, i) => (
        <View
          key={i}
          style={[styles.cell, { width: columns === 2 ? '48%' : '23%' }]}
        >
          <Text style={[styles.value, { color: item.color || theme.text.primary }]}>
            {item.value}
          </Text>
          <Text style={[styles.label, { color: theme.text.muted }]}>{item.label}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  cell: {
    paddingVertical: 4,
  },
  value: {
    fontSize: 13,
    fontWeight: '700',
  },
  label: {
    fontSize: 8,
    marginTop: 2,
  },
});

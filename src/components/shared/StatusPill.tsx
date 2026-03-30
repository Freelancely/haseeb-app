import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { InvoiceStatus } from '../../types';

const statusStyles: Record<InvoiceStatus, { bg: string; text: string }> = {
  draft: { bg: 'rgba(239,159,39,0.12)', text: '#EF9F27' },
  sent: { bg: 'rgba(59,130,246,0.12)', text: '#3B82F6' },
  viewed: { bg: 'rgba(124,92,252,0.12)', text: '#7C5CFC' },
  paid: { bg: 'rgba(0,200,83,0.12)', text: '#00C853' },
  overdue: { bg: 'rgba(232,89,60,0.12)', text: '#E8593C' },
};

interface Props {
  status: InvoiceStatus;
}

export default function StatusPill({ status }: Props) {
  const style = statusStyles[status];

  return (
    <View style={[styles.pill, { backgroundColor: style.bg }]}>
      <Text style={[styles.text, { color: style.text }]}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 8,
    fontWeight: '600',
  },
});

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme, colors } from '../../theme';
import { CharacterAvatar, ActionButton } from '../shared';
import { formatKWD } from '../../utils/currency';
import type { Channel, TransactionCardData } from '../../types';

interface Props {
  card: TransactionCardData;
  channel: Channel;
}

export default function TransactionCard({ card, channel }: Props) {
  const { theme, isDark } = useTheme();
  const accentColor = channel === 'haseeb' ? colors.haseebGreen : colors.aminahPurple;

  return (
    <View style={styles.row}>
      <CharacterAvatar character={channel} size="md" />
      <View
        style={[
          styles.card,
          {
            backgroundColor: theme.aiBubble,
            borderColor: isDark ? theme.card.border : theme.aiBubbleBorder,
            borderWidth: 1,
          },
        ]}
      >
        {card.hasImage && (
          <View style={[styles.imageArea, { backgroundColor: `${accentColor}15` }]}>
            <Text style={styles.imageEmoji}>🧾</Text>
            <Text style={[styles.imageLabel, { color: theme.text.muted }]}>Receipt photo</Text>
          </View>
        )}
        <Text style={[styles.label, { color: theme.text.muted }]}>
          {card.label || 'New transaction'}
        </Text>
        <Text style={[styles.vendor, { color: theme.text.primary }]}>{card.vendor}</Text>
        <View style={styles.amountRow}>
          <Text style={[styles.amount, { color: theme.text.primary }]}>
            {formatKWD(card.amount)}
          </Text>
          <Text style={[styles.currency, { color: theme.text.secondary }]}> KD</Text>
        </View>
        <Text style={[styles.category, { color: theme.text.muted }]}>
          {card.category} · {card.accountCode}
        </Text>
        <View style={styles.actions}>
          <ActionButton label="Confirm" variant="primary" accentColor={accentColor} compact />
          <ActionButton label="Edit" variant="ghost" compact />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 6,
    marginVertical: 3,
    paddingHorizontal: 12,
  },
  card: {
    maxWidth: '78%',
    borderRadius: 14,
    borderBottomLeftRadius: 4,
    padding: 12,
  },
  imageArea: {
    height: 55,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  imageEmoji: {
    fontSize: 22,
  },
  imageLabel: {
    fontSize: 8,
    marginTop: 2,
  },
  label: {
    fontSize: 9,
    fontWeight: '500',
    marginBottom: 4,
  },
  vendor: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 2,
  },
  amountRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 2,
  },
  amount: {
    fontSize: 15,
    fontWeight: '700',
  },
  currency: {
    fontSize: 10,
  },
  category: {
    fontSize: 9,
    marginBottom: 10,
  },
  actions: {
    flexDirection: 'row',
    gap: 6,
  },
});

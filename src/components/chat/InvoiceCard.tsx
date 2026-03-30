import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme, colors } from '../../theme';
import { CharacterAvatar, ActionButton, StatusPill } from '../shared';
import { formatKWD } from '../../utils/currency';
import type { InvoiceCardData } from '../../types';

interface Props {
  card: InvoiceCardData;
}

export default function InvoiceCard({ card }: Props) {
  const { theme, isDark } = useTheme();

  return (
    <View style={styles.row}>
      <CharacterAvatar character="invoices" size="md" />
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
        <Text style={[styles.number, { color: theme.text.muted }]}>Invoice {card.number}</Text>
        <Text style={[styles.client, { color: theme.text.primary }]}>{card.client}</Text>
        <Text style={[styles.description, { color: theme.text.secondary }]}>{card.description}</Text>

        <View style={[styles.divider, { borderColor: theme.card.border }]} />

        <View style={styles.totalRow}>
          <Text style={[styles.totalLabel, { color: theme.text.muted }]}>Total</Text>
          <View style={styles.amountRow}>
            <Text style={[styles.amount, { color: theme.text.primary }]}>
              {formatKWD(card.amount)}
            </Text>
            <Text style={[styles.currency, { color: theme.text.secondary }]}> KD</Text>
          </View>
        </View>

        <Text style={[styles.due, { color: theme.text.muted }]}>Due {card.dueDate}</Text>
        <StatusPill status={card.status} />

        <View style={styles.actions}>
          <ActionButton label="Send" variant="primary" accentColor={colors.invoiceAmber} compact />
          <ActionButton label="Edit" variant="ghost" compact />
          <ActionButton label="PDF" variant="ghost" compact />
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
  number: {
    fontSize: 9,
    fontWeight: '500',
    marginBottom: 4,
  },
  client: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    fontSize: 10,
    marginBottom: 6,
  },
  divider: {
    borderTopWidth: 1,
    marginVertical: 6,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  totalLabel: {
    fontSize: 10,
  },
  amountRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  amount: {
    fontSize: 15,
    fontWeight: '700',
  },
  currency: {
    fontSize: 10,
  },
  due: {
    fontSize: 9,
    marginBottom: 6,
  },
  actions: {
    flexDirection: 'row',
    gap: 6,
    marginTop: 8,
  },
});

import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme, colors } from '../../src/theme';
import { getGroupedResults } from '../../src/data/searchResults';
import { formatKWD } from '../../src/utils/currency';
import type { SearchResult } from '../../src/types';
import Svg, { Path, Circle, Line } from 'react-native-svg';

const typeConfig: Record<string, { color: string; count: number }> = {
  transaction: { color: colors.haseebGreen, count: 12 },
  invoice: { color: colors.invoiceAmber, count: 2 },
  receipt: { color: colors.dangerRed, count: 4 },
};

const typeLabel: Record<string, string> = {
  transaction: 'Transactions',
  invoice: 'Invoices',
  receipt: 'Receipts',
};

function ResultRow({ item }: Readonly<{ item: SearchResult }>) {
  const { theme } = useTheme();
  const config = typeConfig[item.type];

  return (
    <View style={[styles.resultRow, { borderBottomColor: theme.card.border }]}>
      <View style={[styles.resultIcon, { backgroundColor: config.color }]}>
        <Text style={styles.resultIconText}>{item.icon}</Text>
      </View>
      <View style={styles.resultContent}>
        <View style={styles.resultTop}>
          <Text style={[styles.resultPrimary, { color: theme.text.primary }]}>
            {item.primary} · <Text style={{ fontWeight: '400' }}>KWD {formatKWD(item.amount)}</Text>
          </Text>
        </View>
        <Text style={[styles.resultSecondary, { color: theme.text.muted }]}>
          {item.secondary} · {item.date}
        </Text>
      </View>
    </View>
  );
}

export default function SearchScreen() {
  const { theme } = useTheme();
  const [query, setQuery] = useState('Talabat');
  const { transactions, invoices, receipts } = getGroupedResults();

  const groups = [
    { key: 'transaction', items: transactions },
    { key: 'invoice', items: invoices },
    { key: 'receipt', items: receipts },
  ];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]} edges={['top']}>
      <Text style={[styles.title, { color: theme.text.primary }]}>Search</Text>

      {/* Search bar */}
      <View style={[styles.searchBar, { backgroundColor: theme.inputBg }]}>
        <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
          <Circle cx="11" cy="11" r="7" stroke={theme.text.muted} strokeWidth={1.5} />
          <Line x1="16.5" y1="16.5" x2="21" y2="21" stroke={theme.text.muted} strokeWidth={1.5} strokeLinecap="round" />
        </Svg>
        <TextInput
          style={[styles.searchInput, { color: theme.text.body }]}
          value={query}
          onChangeText={setQuery}
          placeholder="Search transactions, invoices..."
          placeholderTextColor={theme.text.muted}
        />
        {query.length > 0 && (
          <TouchableOpacity onPress={() => setQuery('')}>
            <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
              <Path d="M18 6L6 18M6 6L18 18" stroke={theme.text.muted} strokeWidth={1.5} strokeLinecap="round" />
            </Svg>
          </TouchableOpacity>
        )}
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.results}>
        {groups.map((group) => {
          const config = typeConfig[group.key];
          return (
            <View key={group.key} style={styles.group}>
              <Text style={[styles.groupTitle, { color: theme.text.muted }]}>
                {typeLabel[group.key]} ({config.count})
              </Text>
              {group.items.map((item) => (
                <ResultRow key={item.id} item={item} />
              ))}
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    paddingHorizontal: 16,
    marginTop: 8,
    marginBottom: 12,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 8,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    padding: 0,
  },
  results: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  group: {
    marginBottom: 20,
  },
  groupTitle: {
    fontSize: 10,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  resultRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  resultIcon: {
    width: 30,
    height: 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultIconText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
  },
  resultContent: {
    flex: 1,
  },
  resultTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  resultPrimary: {
    fontSize: 13,
    fontWeight: '600',
  },
  resultSecondary: {
    fontSize: 10,
    marginTop: 2,
  },
});

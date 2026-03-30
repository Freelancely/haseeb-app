import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme, colors } from '../src/theme';
import { ActionButton } from '../src/components/shared';
import { profitAndLoss } from '../src/data/reportData';
import { formatKWD } from '../src/utils/currency';
import Svg, { Path } from 'react-native-svg';

export default function ReportScreen() {
  const { theme } = useTheme();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const report = profitAndLoss;

  return (
    <View style={[styles.container, { backgroundColor: theme.bg }]}>
      {/* Header */}
      <View style={[styles.header, { paddingTop: insets.top + 8, borderBottomColor: theme.card.border }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
            <Path d="M15 18L9 12L15 6" stroke={theme.text.muted} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </Svg>
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: theme.text.primary }]}>
          {report.title} · {report.period}
        </Text>
        <TouchableOpacity>
          <Text style={styles.shareBtn}>Share</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {report.sections.map((section, sIdx) => {
          const isRevenue = sIdx === 0;
          const totalColor = isRevenue ? colors.haseebGreenLight : colors.dangerRed;

          return (
            <View key={section.title} style={styles.section}>
              <Text style={[styles.sectionTitle, { color: theme.text.muted }]}>
                {section.title.toUpperCase()}
              </Text>
              {section.items.map((item) => (
                <View key={item.label} style={[styles.lineItem, { borderBottomColor: theme.card.border }]}>
                  <Text style={[styles.lineLabel, { color: theme.text.body }]}>
                    {item.label}
                  </Text>
                  <Text style={[styles.lineAmount, { color: theme.text.body }]}>
                    {formatKWD(item.amount)}
                  </Text>
                </View>
              ))}
              <View style={[styles.totalRow, { borderTopColor: theme.card.border }]}>
                <Text style={[styles.totalLabel, { color: theme.text.primary }]}>
                  {section.total.label}
                </Text>
                <Text style={[styles.totalAmount, { color: totalColor }]}>
                  {formatKWD(section.total.amount)} KD
                </Text>
              </View>
            </View>
          );
        })}

        {/* Net profit highlight */}
        <View style={styles.netCard}>
          <Text style={[styles.netLabel, { color: theme.text.primary }]}>
            {report.netResult.label}
          </Text>
          <Text style={styles.netAmount}>
            {formatKWD(report.netResult.amount)} KD
          </Text>
          {report.netResult.margin === undefined ? null : (
            <Text style={[styles.netMeta, { color: theme.text.secondary }]}>
              Margin {report.netResult.margin}%{' '}
              {report.netResult.trend ? `· ${report.netResult.trend}` : ''}
            </Text>
          )}
        </View>
      </ScrollView>

      {/* Bottom actions */}
      <View style={[styles.bottomBar, { paddingBottom: insets.bottom + 12, borderTopColor: theme.card.border }]}>
        <ActionButton label="Download PDF" variant="ghost" style={styles.actionBtn} />
        <ActionButton label="Share" variant="primary" accentColor={colors.haseebGreen} style={styles.actionBtn} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingBottom: 12,
    borderBottomWidth: 1,
  },
  backBtn: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 13,
    fontWeight: '600',
  },
  shareBtn: {
    fontSize: 13,
    color: colors.haseebGreenLight,
    fontWeight: '500',
  },
  content: {
    padding: 16,
    paddingBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 9,
    fontWeight: '600',
    letterSpacing: 0.5,
    marginBottom: 10,
  },
  lineItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
  },
  lineLabel: {
    fontSize: 13,
  },
  lineAmount: {
    fontSize: 13,
    fontVariant: ['tabular-nums'],
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    marginTop: 4,
    borderTopWidth: 1.5,
  },
  totalLabel: {
    fontSize: 13,
    fontWeight: '600',
  },
  totalAmount: {
    fontSize: 14,
    fontWeight: '700',
  },
  netCard: {
    backgroundColor: 'rgba(0,166,132,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(0,166,132,0.15)',
    borderRadius: 12,
    padding: 18,
    alignItems: 'center',
    marginBottom: 8,
  },
  netLabel: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 4,
  },
  netAmount: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.haseebGreenLight,
    marginBottom: 4,
  },
  netMeta: {
    fontSize: 11,
  },
  bottomBar: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 16,
    paddingTop: 12,
    borderTopWidth: 1,
  },
  actionBtn: {
    flex: 1,
  },
});

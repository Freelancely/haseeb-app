import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';
import { colors } from '../../theme';
import { Card, SectionHeader, CharacterAvatar } from '../shared';
import { dailyBrief } from '../../data/dailyBrief';
import { formatKWDShort } from '../../utils/currency';

export default function DailyBrief() {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <SectionHeader title="TODAY'S BRIEF" />
      <Card>
        <View style={styles.kpiRow}>
          <View style={styles.kpiCell}>
            <Text style={[styles.kpiValue, { color: colors.haseebGreenLight }]}>
              {formatKWDShort(dailyBrief.revenue)}
            </Text>
            <Text style={[styles.kpiLabel, { color: theme.text.muted }]}>Revenue</Text>
          </View>
          <View style={styles.kpiCell}>
            <Text style={[styles.kpiValue, { color: colors.dangerRed }]}>
              {formatKWDShort(dailyBrief.expenses)}
            </Text>
            <Text style={[styles.kpiLabel, { color: theme.text.muted }]}>Expenses</Text>
          </View>
        </View>
        <View style={styles.insightRow}>
          <CharacterAvatar character="aminah" size="sm" />
          <Text style={[styles.insightText, { color: theme.text.secondary }]}>
            {dailyBrief.aminahInsight}
          </Text>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 4,
  },
  kpiRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 10,
  },
  kpiCell: {
    flex: 1,
  },
  kpiValue: {
    fontSize: 15,
    fontWeight: '700',
  },
  kpiLabel: {
    fontSize: 9,
    marginTop: 2,
  },
  insightRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: 'rgba(128,128,128,0.1)',
  },
  insightText: {
    fontSize: 11,
    flex: 1,
  },
});

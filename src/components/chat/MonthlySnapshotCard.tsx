import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';
import { CharacterAvatar, KPIGrid } from '../shared';
import type { SnapshotCardData } from '../../types';

interface Props {
  card: SnapshotCardData;
}

export default function MonthlySnapshotCard({ card }: Props) {
  const { theme, isDark } = useTheme();

  return (
    <View style={styles.row}>
      <CharacterAvatar character="aminah" size="md" />
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
        <Text style={[styles.title, { color: theme.text.muted }]}>
          Monthly snapshot · {card.period}
        </Text>
        <KPIGrid items={card.items} columns={2} />
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
  title: {
    fontSize: 9,
    fontWeight: '500',
    marginBottom: 8,
  },
});

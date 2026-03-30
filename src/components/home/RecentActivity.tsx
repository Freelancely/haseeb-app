import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';
import { CharacterAvatar, SectionHeader } from '../shared';
import { recentActivity } from '../../data/recentActivity';

export default function RecentActivity() {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <SectionHeader title="RECENT" />
      {recentActivity.map((item) => (
        <View key={item.id} style={styles.row}>
          <CharacterAvatar character={item.character} size="sm" />
          <Text style={[styles.text, { color: theme.text.body }]} numberOfLines={1}>
            {item.text}
          </Text>
          <Text style={[styles.time, { color: theme.text.muted }]}>{item.time}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 4,
    paddingBottom: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 8,
  },
  text: {
    fontSize: 12,
    flex: 1,
  },
  time: {
    fontSize: 10,
  },
});

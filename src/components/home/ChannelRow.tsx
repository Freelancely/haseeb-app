import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '../../theme/ThemeContext';
import { CharacterAvatar, Badge } from '../shared';
import type { ChannelData } from '../../types';

interface Props {
  channel: ChannelData;
  isActive?: boolean;
}

export default function ChannelRow({ channel, isActive }: Props) {
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <TouchableOpacity
      style={[
        styles.row,
        isActive && { backgroundColor: theme.card.bg },
      ]}
      onPress={() => router.push(`/chat/${channel.id}`)}
      activeOpacity={0.7}
    >
      <CharacterAvatar character={channel.id} size="lg" />
      <View style={styles.content}>
        <View style={styles.topLine}>
          <Text style={[styles.name, { color: theme.text.primary }]}>
            {channel.name}
          </Text>
          <Text style={[styles.time, { color: theme.text.muted }]}>
            {channel.time}
          </Text>
        </View>
        <View style={styles.bottomLine}>
          <Text
            style={[styles.preview, { color: theme.text.secondary }]}
            numberOfLines={1}
          >
            {channel.lastMessage}
          </Text>
          <Badge count={channel.unread} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginHorizontal: 8,
  },
  content: {
    flex: 1,
    gap: 3,
  },
  topLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 13,
    fontWeight: '600',
  },
  time: {
    fontSize: 10,
  },
  bottomLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  preview: {
    fontSize: 11,
    flex: 1,
    marginRight: 8,
  },
});

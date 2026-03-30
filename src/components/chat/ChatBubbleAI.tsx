import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';
import { CharacterAvatar } from '../shared';
import type { Channel } from '../../types';

interface Props {
  content: string;
  channel: Channel;
}

export default function ChatBubbleAI({ content, channel }: Props) {
  const { theme, isDark } = useTheme();

  return (
    <View style={styles.row}>
      <CharacterAvatar character={channel} size="md" />
      <View
        style={[
          styles.bubble,
          {
            backgroundColor: theme.aiBubble,
            borderColor: isDark ? 'transparent' : theme.aiBubbleBorder,
            borderWidth: isDark ? 0 : 1,
          },
        ]}
      >
        <Text style={[styles.text, { color: theme.text.body }]}>{content}</Text>
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
  bubble: {
    maxWidth: '78%',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 14,
    borderBottomLeftRadius: 4,
  },
  text: {
    fontSize: 12,
    lineHeight: 17,
  },
});

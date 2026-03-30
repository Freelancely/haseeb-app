import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme, colors } from '../../theme';
import { CharacterAvatar, ActionButton } from '../shared';
import type { Channel, ActionButton as ActionButtonType } from '../../types';

const accentMap: Record<Channel, string> = {
  haseeb: colors.haseebGreen,
  aminah: colors.aminahPurple,
  invoices: colors.invoiceAmber,
};

interface Props {
  content: string;
  channel: Channel;
  actions: ActionButtonType[];
}

export default function ActionPrompt({ content, channel, actions }: Props) {
  const { theme, isDark } = useTheme();
  const accent = accentMap[channel];

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
        <Text style={[styles.text, { color: theme.text.body }]}>{content}</Text>
        <View style={styles.actions}>
          {actions.map((action) => (
            <ActionButton
              key={action.label}
              label={action.label}
              variant={action.variant}
              accentColor={accent}
              compact
            />
          ))}
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
  text: {
    fontSize: 12,
    lineHeight: 17,
    marginBottom: 10,
  },
  actions: {
    flexDirection: 'row',
    gap: 6,
  },
});

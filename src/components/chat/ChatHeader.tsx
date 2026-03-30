import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme, colors } from '../../theme';
import { CharacterAvatar } from '../shared';
import type { Channel } from '../../types';
import Svg, { Path } from 'react-native-svg';

const channelConfig: Record<Channel, { name: string; subtitle: string; subtitleColor: string }> = {
  haseeb: { name: 'Haseeb', subtitle: 'Online', subtitleColor: colors.successGreen },
  aminah: { name: 'Aminah', subtitle: 'AI CFO', subtitleColor: colors.aminahPurpleLight },
  invoices: { name: 'Invoices', subtitle: 'Create, send, track', subtitleColor: '' },
};

interface Props {
  channel: Channel;
}

export default function ChatHeader({ channel }: Props) {
  const { theme } = useTheme();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const config = channelConfig[channel];

  return (
    <View style={[styles.container, { paddingTop: insets.top + 8, borderBottomColor: theme.card.border }]}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
        <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
          <Path d="M15 18L9 12L15 6" stroke={theme.text.muted} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
      </TouchableOpacity>
      <CharacterAvatar character={channel} size="header" />
      <View style={styles.info}>
        <Text style={[styles.name, { color: theme.text.primary }]}>{config.name}</Text>
        <Text
          style={[
            styles.subtitle,
            { color: config.subtitleColor || theme.text.muted },
          ]}
        >
          {config.subtitle}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 14,
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  backBtn: {
    padding: 4,
  },
  info: {
    gap: 1,
  },
  name: {
    fontSize: 13,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 9,
  },
});

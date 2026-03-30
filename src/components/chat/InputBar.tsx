import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme, colors } from '../../theme';
import type { Channel } from '../../types';
import Svg, { Path, Rect, Line } from 'react-native-svg';

const config: Record<Channel, { placeholder: string; accent: string }> = {
  haseeb: { placeholder: 'Message Haseeb...', accent: colors.haseebGreen },
  aminah: { placeholder: 'Ask Aminah...', accent: colors.aminahPurple },
  invoices: { placeholder: 'Create or ask...', accent: colors.invoiceAmber },
};

interface Props {
  channel: Channel;
}

export default function InputBar({ channel }: Props) {
  const { theme } = useTheme();
  const router = useRouter();
  const { placeholder, accent } = config[channel];

  return (
    <View style={[styles.container, { backgroundColor: theme.bg }]}>
      <View style={[styles.bar, { borderTopColor: theme.card.border }]}>
        {/* Camera button (Haseeb only) */}
        {channel === 'haseeb' && (
          <TouchableOpacity
            style={[styles.cameraBtn, { backgroundColor: theme.surface }]}
            onPress={() => router.push('/receipt-capture')}
            activeOpacity={0.7}
          >
            <Text style={styles.cameraEmoji}>📷</Text>
          </TouchableOpacity>
        )}

        {/* Text input */}
        <View style={[styles.inputWrap, { backgroundColor: theme.inputBg }]}>
          <TextInput
            style={[styles.input, { color: theme.text.body }]}
            placeholder={placeholder}
            placeholderTextColor={theme.text.muted}
          />
        </View>

        {/* Mic button */}
        <TouchableOpacity
          style={[styles.micBtn, { backgroundColor: accent }]}
          onPress={() => router.push('/voice-active')}
          activeOpacity={0.7}
        >
          {/* Waveform icon */}
          <View style={styles.waveformIcon}>
            <View style={[styles.waveBar, { height: 8 }]} />
            <View style={[styles.waveBar, { height: 14 }]} />
            <View style={[styles.waveBar, { height: 10 }]} />
            <View style={[styles.waveBar, { height: 14 }]} />
            <View style={[styles.waveBar, { height: 8 }]} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 24,
    paddingHorizontal: 10,
  },
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingTop: 8,
  },
  cameraBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraEmoji: {
    fontSize: 14,
  },
  inputWrap: {
    flex: 1,
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  input: {
    fontSize: 13,
    padding: 0,
  },
  micBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  waveformIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  waveBar: {
    width: 2,
    borderRadius: 1,
    backgroundColor: '#FFFFFF',
  },
});

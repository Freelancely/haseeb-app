import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme, colors } from '../../theme';
import { Ionicons } from '@expo/vector-icons';
import type { Channel } from '../../types';

const config: Record<Channel, { placeholder: string; accent: string }> = {
  haseeb: { placeholder: 'Message Haseeb...', accent: colors.haseebGreen },
  aminah: { placeholder: 'Ask Aminah...', accent: colors.aminahPurple },
  invoices: { placeholder: 'Create or ask...', accent: colors.invoiceAmber },
};

interface Props {
  channel: Channel;
  onSend: (text: string) => void;
}

export default function InputBar({ channel, onSend }: Props) {
  const { theme } = useTheme();
  const router = useRouter();
  const { placeholder, accent } = config[channel];
  const [text, setText] = useState('');

  const hasText = text.trim().length > 0;

  function handleSend() {
    if (!hasText) return;
    onSend(text.trim());
    setText('');
  }

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
            value={text}
            onChangeText={setText}
            onSubmitEditing={handleSend}
            returnKeyType="send"
          />
        </View>

        {/* Send button when text exists, mic button otherwise */}
        {hasText ? (
          <TouchableOpacity
            style={[styles.micBtn, { backgroundColor: accent }]}
            onPress={handleSend}
            activeOpacity={0.7}
          >
            <Ionicons name="arrow-up" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        ) : (
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
        )}
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

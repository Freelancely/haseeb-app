import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useTheme } from '../../src/theme';
import { ChatHeader, MessageList, InputBar } from '../../src/components/chat';
import { haseebMessages } from '../../src/data/haseebMessages';
import { aminahMessages } from '../../src/data/aminahMessages';
import { invoiceMessages } from '../../src/data/invoiceMessages';
import type { Channel, Message } from '../../src/types';

const messagesByChannel: Record<Channel, Message[]> = {
  haseeb: haseebMessages,
  aminah: aminahMessages,
  invoices: invoiceMessages,
};

export default function ChatScreen() {
  const { channel } = useLocalSearchParams<{ channel: string }>();
  const { theme } = useTheme();
  const ch = (channel || 'haseeb') as Channel;
  const messages = messagesByChannel[ch] || [];

  return (
    <View style={[styles.container, { backgroundColor: theme.bg }]}>
      <ChatHeader channel={ch} />
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={0}
      >
        <MessageList messages={messages} channel={ch} />
        <InputBar channel={ch} />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
});

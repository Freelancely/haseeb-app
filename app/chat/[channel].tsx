import React, { useCallback } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useTheme } from '../../src/theme';
import { ChatHeader, MessageList, InputBar } from '../../src/components/chat';
import { useChatStore } from '../../src/stores/chatStore';
import type { Channel } from '../../src/types';

export default function ChatScreen() {
  const { channel } = useLocalSearchParams<{ channel: string }>();
  const { theme } = useTheme();
  const ch = (channel || 'haseeb') as Channel;
  const messages = useChatStore((s) => s.messages[ch]);
  const sendMessage = useChatStore((s) => s.sendMessage);

  const handleSend = useCallback(
    (text: string) => sendMessage(ch, text),
    [ch, sendMessage],
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.bg }]}>
      <ChatHeader channel={ch} />
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={0}
      >
        <MessageList messages={messages} channel={ch} />
        <InputBar channel={ch} onSend={handleSend} />
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

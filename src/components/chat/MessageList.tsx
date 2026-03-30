import React, { useRef } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import type { Message, Channel, TransactionCardData, InvoiceCardData, SnapshotCardData } from '../../types';
import ChatBubbleUser from './ChatBubbleUser';
import ChatBubbleAI from './ChatBubbleAI';
import TransactionCard from './TransactionCard';
import InvoiceCard from './InvoiceCard';
import VoiceNote from './VoiceNote';
import MonthlySnapshotCard from './MonthlySnapshotCard';
import ActionPrompt from './ActionPrompt';

interface Props {
  messages: Message[];
  channel: Channel;
}

function renderMessage(message: Message, channel: Channel) {
  switch (message.type) {
    case 'text_user':
      return <ChatBubbleUser content={message.content} />;

    case 'text_ai':
      return <ChatBubbleAI content={message.content} channel={channel} />;

    case 'voice_note':
      return <VoiceNote duration={message.voiceDuration || '0:00'} />;

    case 'transaction_card':
    case 'receipt_card':
      return (
        <TransactionCard
          card={message.card as TransactionCardData}
          channel={channel}
        />
      );

    case 'invoice_card':
      return <InvoiceCard card={message.card as InvoiceCardData} />;

    case 'snapshot_card':
      return <MonthlySnapshotCard card={message.card as SnapshotCardData} />;

    case 'action_prompt':
    case 'tracking_message':
      return (
        <ActionPrompt
          content={message.content}
          channel={channel}
          actions={message.actions || []}
        />
      );

    default:
      return <ChatBubbleAI content={message.content} channel={channel} />;
  }
}

export default function MessageList({ messages, channel }: Props) {
  const listRef = useRef<FlatList<Message>>(null);

  return (
    <FlatList
      ref={listRef}
      data={messages}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => renderMessage(item, channel)}
      contentContainerStyle={styles.list}
      showsVerticalScrollIndicator={false}
      onContentSizeChange={() => {
        listRef.current?.scrollToEnd({ animated: true });
      }}
      onLayout={() => {
        listRef.current?.scrollToEnd({ animated: false });
      }}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingVertical: 8,
    paddingBottom: 16,
  },
});

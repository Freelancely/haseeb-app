import { create } from 'zustand';
import type { Channel, Message } from '../types';
import { haseebMessages } from '../data/haseebMessages';
import { aminahMessages } from '../data/aminahMessages';
import { invoiceMessages } from '../data/invoiceMessages';

const aiReplies: Record<Channel, string[]> = {
  haseeb: [
    'Got it! I\'ve noted that expense.',
    'Transaction recorded successfully.',
    'I\'ll categorize that for you right away.',
    'Done! Anything else you need?',
    'Noted. I\'ve updated your books.',
  ],
  aminah: [
    'I\'ll analyze that for you.',
    'Looking into the numbers now.',
    'Great question — let me pull up the data.',
    'Here\'s what I see in your financials...',
    'I\'ll prepare a summary for you.',
  ],
  invoices: [
    'Invoice noted.',
    'I\'ll track that for you.',
    'Got it — I\'ll set up a reminder.',
    'Invoice created and ready to send.',
    'Payment status updated.',
  ],
};

function pickRandom(arr: string[]): string {
  return arr[Math.floor(Math.random() * arr.length)];
}

interface ChatState {
  messages: Record<Channel, Message[]>;
  sendMessage: (channel: Channel, text: string) => void;
}

export const useChatStore = create<ChatState>()((set) => ({
  messages: {
    haseeb: [...haseebMessages],
    aminah: [...aminahMessages],
    invoices: [...invoiceMessages],
  },

  sendMessage: (channel, text) => {
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      channel,
      type: 'text_user',
      content: text,
      timestamp: new Date(),
      sender: 'user',
    };

    set((state) => ({
      messages: {
        ...state.messages,
        [channel]: [...state.messages[channel], userMsg],
      },
    }));

    // Mock AI reply after a short delay
    setTimeout(() => {
      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        channel,
        type: 'text_ai',
        content: pickRandom(aiReplies[channel]),
        timestamp: new Date(),
        sender: 'ai',
      };

      set((state) => ({
        messages: {
          ...state.messages,
          [channel]: [...state.messages[channel], aiMsg],
        },
      }));
    }, 1000);
  },
}));

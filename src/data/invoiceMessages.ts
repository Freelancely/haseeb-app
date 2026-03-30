import type { Message } from '../types';

export const invoiceMessages: Message[] = [
  {
    id: 'i1',
    channel: 'invoices',
    type: 'text_user',
    content: 'Invoice Ahmad Trading, 500 KD consulting',
    timestamp: new Date('2026-03-28T14:00:00'),
    sender: 'user',
  },
  {
    id: 'i2',
    channel: 'invoices',
    type: 'invoice_card',
    content: 'Invoice created',
    timestamp: new Date('2026-03-28T14:00:03'),
    sender: 'ai',
    card: {
      kind: 'invoice',
      number: '#048',
      client: 'Ahmad Trading Co.',
      description: 'Consulting Services',
      amount: 500.0,
      currency: 'KWD',
      dueDate: 'Apr 13, 2026',
      status: 'draft',
    },
  },
  {
    id: 'i3',
    channel: 'invoices',
    type: 'tracking_message',
    content: 'INV-047 to Gulf Motors viewed 2h ago. Still unpaid.',
    timestamp: new Date('2026-03-28T14:05:00'),
    sender: 'ai',
    actions: [
      { label: 'Remind', variant: 'primary' },
      { label: 'Later', variant: 'ghost' },
    ],
  },
];

import type { Message } from '../types';

export const aminahMessages: Message[] = [
  {
    id: 'a1',
    channel: 'aminah',
    type: 'snapshot_card',
    content: 'Monthly snapshot',
    timestamp: new Date('2026-03-30T08:00:00'),
    sender: 'ai',
    card: {
      kind: 'snapshot',
      period: 'March 2026',
      items: [
        { label: 'Revenue', value: '4,280 KD', color: '#00C49A' },
        { label: 'Expenses', value: '2,910 KD', color: '#E8593C' },
        { label: 'Net profit', value: '1,370 KD' },
        { label: 'Runway', value: '8.2 mo' },
      ],
    },
  },
  {
    id: 'a2',
    channel: 'aminah',
    type: 'text_ai',
    content: 'Talabat commissions up 23%. You\'re spending KWD 340 more than February. Consider renegotiating your rate.',
    timestamp: new Date('2026-03-30T08:00:05'),
    sender: 'ai',
  },
  {
    id: 'a3',
    channel: 'aminah',
    type: 'action_prompt',
    content: 'Rent due in 3 days. Remind you?',
    timestamp: new Date('2026-03-30T08:00:10'),
    sender: 'ai',
    actions: [
      { label: 'Yes', variant: 'primary' },
      { label: 'Dismiss', variant: 'ghost' },
    ],
  },
];

export type Channel = 'haseeb' | 'aminah' | 'invoices';

export type MessageType =
  | 'text_user'
  | 'text_ai'
  | 'voice_note'
  | 'transaction_card'
  | 'receipt_card'
  | 'invoice_card'
  | 'snapshot_card'
  | 'action_prompt'
  | 'tracking_message';

export interface Message {
  id: string;
  channel: Channel;
  type: MessageType;
  content: string;
  timestamp: Date;
  sender: 'user' | 'ai';
  card?: TransactionCardData | InvoiceCardData | SnapshotCardData;
  voiceDuration?: string;
  actions?: ActionButton[];
}

export interface ActionButton {
  label: string;
  variant: 'primary' | 'secondary' | 'ghost';
}

export interface TransactionCardData {
  kind: 'transaction' | 'receipt';
  label?: string;
  vendor: string;
  amount: number;
  currency: 'KWD';
  category: string;
  accountCode: string;
  hasImage?: boolean;
}

export interface InvoiceCardData {
  kind: 'invoice';
  number: string;
  client: string;
  description: string;
  amount: number;
  currency: 'KWD';
  dueDate: string;
  status: InvoiceStatus;
}

export type InvoiceStatus = 'draft' | 'sent' | 'viewed' | 'paid' | 'overdue';

export interface SnapshotCardData {
  kind: 'snapshot';
  period: string;
  items: { label: string; value: string; color?: string }[];
}

export interface ChannelData {
  id: Channel;
  name: string;
  lastMessage: string;
  time: string;
  unread: number;
}

export interface DailyBrief {
  revenue: number;
  expenses: number;
  aminahInsight: string;
}

export interface RecentActivityItem {
  id: string;
  character: 'haseeb' | 'aminah';
  text: string;
  time: string;
}

export interface ReportData {
  title: string;
  period: string;
  type: 'income-statement' | 'balance-sheet' | 'trial-balance' | 'cash-flow';
  sections: ReportSection[];
  netResult: {
    label: string;
    amount: number;
    margin?: number;
    trend?: string;
  };
}

export interface ReportSection {
  title: string;
  items: { label: string; amount: number }[];
  total: { label: string; amount: number };
}

export interface SearchResult {
  id: string;
  type: 'transaction' | 'invoice' | 'receipt';
  primary: string;
  secondary: string;
  amount: number;
  date: string;
  icon: string;
}

export interface UserProfile {
  initials: string;
  name: string;
  company: string;
  role: string;
}

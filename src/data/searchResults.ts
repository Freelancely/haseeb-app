import type { SearchResult } from '../types';

export const mockSearchResults: SearchResult[] = [
  // Transactions
  { id: 't1', type: 'transaction', primary: 'Talabat', secondary: 'Food & Bev', amount: 45.0, date: 'Mar 14', icon: 'T' },
  { id: 't2', type: 'transaction', primary: 'Talabat', secondary: 'Food & Bev', amount: 32.5, date: 'Mar 10', icon: 'T' },
  { id: 't3', type: 'transaction', primary: 'Talabat', secondary: 'Food & Bev', amount: 28.0, date: 'Mar 7', icon: 'T' },
  { id: 't4', type: 'transaction', primary: 'Talabat', secondary: 'Food & Bev', amount: 51.25, date: 'Mar 3', icon: 'T' },
  { id: 't5', type: 'transaction', primary: 'Talabat', secondary: 'Food & Bev', amount: 22.75, date: 'Feb 28', icon: 'T' },
  { id: 't6', type: 'transaction', primary: 'Talabat', secondary: 'Food & Bev', amount: 38.0, date: 'Feb 24', icon: 'T' },
  // Invoices
  { id: 'i1', type: 'invoice', primary: 'INV-031', secondary: 'Talabat Corp', amount: 890.0, date: 'Feb 28', icon: 'KD' },
  { id: 'i2', type: 'invoice', primary: 'INV-019', secondary: 'Talabat Corp', amount: 750.0, date: 'Jan 15', icon: 'KD' },
  // Receipts
  { id: 'r1', type: 'receipt', primary: 'Talabat receipt', secondary: 'Scanned', amount: 45.0, date: 'Mar 14', icon: 'IMG' },
  { id: 'r2', type: 'receipt', primary: 'Talabat receipt', secondary: 'Scanned', amount: 32.5, date: 'Mar 10', icon: 'IMG' },
  { id: 'r3', type: 'receipt', primary: 'Talabat receipt', secondary: 'Scanned', amount: 28.0, date: 'Mar 7', icon: 'IMG' },
  { id: 'r4', type: 'receipt', primary: 'Talabat receipt', secondary: 'Scanned', amount: 51.25, date: 'Mar 3', icon: 'IMG' },
];

export function getGroupedResults() {
  const transactions = mockSearchResults.filter((r) => r.type === 'transaction');
  const invoices = mockSearchResults.filter((r) => r.type === 'invoice');
  const receipts = mockSearchResults.filter((r) => r.type === 'receipt');
  return { transactions, invoices, receipts };
}

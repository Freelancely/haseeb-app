import type { ReportData } from '../types';

export const profitAndLoss: ReportData = {
  title: 'P&L',
  period: 'March 2026',
  type: 'income-statement',
  sections: [
    {
      title: 'Revenue',
      items: [
        { label: 'Sales Revenue', amount: 3680.0 },
        { label: 'Service Revenue', amount: 600.0 },
      ],
      total: { label: 'Total revenue', amount: 4280.0 },
    },
    {
      title: 'Expenses',
      items: [
        { label: 'COGS', amount: 1240.0 },
        { label: 'Salaries', amount: 850.0 },
        { label: 'Rent', amount: 400.0 },
        { label: 'Talabat', amount: 180.0 },
        { label: 'Utilities', amount: 120.0 },
        { label: 'Other', amount: 120.0 },
      ],
      total: { label: 'Total expenses', amount: 2910.0 },
    },
  ],
  netResult: {
    label: 'Net profit',
    amount: 1370.0,
    margin: 32.0,
    trend: '+4.2% vs Feb',
  },
};

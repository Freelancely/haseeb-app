import React, { createContext, useContext, useMemo } from 'react';
import { colors, ThemeColors } from './colors';
import { useSettingsStore } from '../stores/settingsStore';

type ThemeMode = 'dark' | 'light';

interface ThemeContextValue {
  mode: ThemeMode;
  theme: ThemeColors;
  toggle: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const mode = useSettingsStore((s) => s.theme);
  const toggleTheme = useSettingsStore((s) => s.toggleTheme);

  const value = useMemo<ThemeContextValue>(
    () => ({
      mode,
      theme: mode === 'dark' ? colors.dark : colors.light,
      toggle: toggleTheme,
      isDark: mode === 'dark',
    }),
    [mode, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}

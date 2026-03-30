import { create } from 'zustand';

interface SettingsState {
  theme: 'dark' | 'light';
  language: 'en' | 'ar';
  voiceResponses: boolean;
  notifications: boolean;

  toggleTheme: () => void;
  setLanguage: (lang: 'en' | 'ar') => void;
  toggleVoiceResponses: () => void;
  toggleNotifications: () => void;
}

export const useSettingsStore = create<SettingsState>()((set) => ({
  theme: 'dark',
  language: 'en',
  voiceResponses: true,
  notifications: true,

  toggleTheme: () =>
    set((s) => ({ theme: s.theme === 'dark' ? 'light' : 'dark' })),
  setLanguage: (language) => set({ language }),
  toggleVoiceResponses: () =>
    set((s) => ({ voiceResponses: !s.voiceResponses })),
  toggleNotifications: () =>
    set((s) => ({ notifications: !s.notifications })),
}));

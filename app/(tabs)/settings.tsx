import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme, colors } from '../../src/theme';
import { useSettingsStore } from '../../src/stores/settingsStore';
import { Toggle, SectionHeader } from '../../src/components/shared';
import { userProfile } from '../../src/data/userProfile';
import Svg, { Path } from 'react-native-svg';

function ChevronRight({ color }: { color: string }) {
  return (
    <Svg width={14} height={14} viewBox="0 0 24 24" fill="none">
      <Path d="M9 18L15 12L9 6" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

function SettingRow({
  label,
  value,
  toggle,
  onPress,
}: {
  label: string;
  value?: string | boolean;
  toggle?: boolean;
  onPress?: () => void;
}) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      style={[styles.settingRow, { borderBottomColor: theme.card.border }]}
      onPress={onPress}
      activeOpacity={toggle ? 1 : 0.7}
      disabled={toggle}
    >
      <Text style={[styles.settingLabel, { color: theme.text.body }]}>{label}</Text>
      {toggle && typeof value === 'boolean' ? (
        <Toggle value={value} onToggle={onPress || (() => {})} />
      ) : (
        <View style={styles.settingRight}>
          {value && (
            <Text style={[styles.settingValue, { color: colors.haseebGreen }]}>
              {String(value)}
            </Text>
          )}
          <ChevronRight color={theme.text.muted} />
        </View>
      )}
    </TouchableOpacity>
  );
}

export default function SettingsScreen() {
  const { theme } = useTheme();
  const {
    theme: themeMode,
    voiceResponses,
    notifications,
    toggleTheme,
    toggleVoiceResponses,
    toggleNotifications,
  } = useSettingsStore();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <Text style={[styles.title, { color: theme.text.primary }]}>Settings</Text>

        {/* Profile card */}
        <View style={[styles.profileCard, { backgroundColor: theme.card.bg, borderColor: theme.card.border }]}>
          <View style={[styles.profileAvatar, { backgroundColor: colors.haseebGreen }]}>
            <Text style={styles.profileInitials}>{userProfile.initials}</Text>
          </View>
          <View>
            <Text style={[styles.profileName, { color: theme.text.primary }]}>
              {userProfile.name}
            </Text>
            <Text style={[styles.profileRole, { color: theme.text.secondary }]}>
              {userProfile.company} · {userProfile.role}
            </Text>
          </View>
        </View>

        {/* Preferences */}
        <SectionHeader title="PREFERENCES" />
        <SettingRow label="Language" value="العربية + EN" onPress={() => {}} />
        <SettingRow label="Voice responses" value={voiceResponses} toggle onPress={toggleVoiceResponses} />
        <SettingRow label="Notifications" value={notifications} toggle onPress={toggleNotifications} />
        <SettingRow
          label="Dark mode"
          value={themeMode === 'dark'}
          toggle
          onPress={toggleTheme}
        />

        {/* Account */}
        <SectionHeader title="ACCOUNT" />
        <SettingRow label="Subscription" value="Active" onPress={() => {}} />
        <SettingRow label="WhatsApp add-on" value="Connect" onPress={() => {}} />
        <SettingRow label="Dashboard" value="Open" onPress={() => {}} />
        <SettingRow label="Help & support" onPress={() => {}} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 8,
    marginBottom: 16,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
  },
  profileAvatar: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInitials: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  profileName: {
    fontSize: 14,
    fontWeight: '600',
  },
  profileRole: {
    fontSize: 11,
    marginTop: 2,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 13,
    borderBottomWidth: 1,
  },
  settingLabel: {
    fontSize: 13,
  },
  settingRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  settingValue: {
    fontSize: 12,
    fontWeight: '500',
  },
});

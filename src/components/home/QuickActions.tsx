import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '../../theme/ThemeContext';

const actions = [
  { label: '📸 Receipt', route: '/receipt-capture' as const },
  { label: '+ Entry', route: '/chat/haseeb' as const },
  { label: 'Report', route: '/report' as const },
];

export default function QuickActions() {
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <View style={styles.row}>
      {actions.map((action) => (
        <TouchableOpacity
          key={action.label}
          style={[styles.pill, { backgroundColor: theme.surface }]}
          onPress={() => router.push(action.route)}
          activeOpacity={0.7}
        >
          <Text style={[styles.label, { color: theme.text.secondary }]}>
            {action.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 6,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  pill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
  },
  label: {
    fontSize: 11,
    fontWeight: '500',
  },
});

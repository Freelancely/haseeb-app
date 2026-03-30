import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';
import { userProfile } from '../../data/userProfile';

export default function HomeHeader() {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.logo, { color: theme.text.primary }]}>حسيب</Text>
        <Text style={[styles.greeting, { color: theme.text.muted }]}>
          Good morning, {userProfile.name.split(' ')[0]}
        </Text>
      </View>
      <TouchableOpacity
        style={[styles.avatar, { backgroundColor: theme.surface }]}
        activeOpacity={0.7}
      >
        <Text style={[styles.initials, { color: theme.text.secondary }]}>
          {userProfile.initials}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
  },
  logo: {
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  greeting: {
    fontSize: 11,
    marginTop: 2,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  initials: {
    fontSize: 11,
    fontWeight: '600',
  },
});

import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../src/theme';
import { HomeHeader, QuickActions, ChannelRow, DailyBrief, RecentActivity } from '../../src/components/home';
import { channels } from '../../src/data/channels';

export default function HomeScreen() {
  const { theme } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHeader />
        <QuickActions />
        {channels.map((channel, i) => (
          <ChannelRow
            key={channel.id}
            channel={channel}
            isActive={i === 0}
          />
        ))}
        <DailyBrief />
        <RecentActivity />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

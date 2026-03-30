import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme, colors } from '../src/theme';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withDelay,
  Easing,
} from 'react-native-reanimated';

function PulsingRing({ size, opacity, delay }: { size: number; opacity: number; delay: number }) {
  const scale = useSharedValue(1);

  useEffect(() => {
    scale.value = withDelay(
      delay,
      withRepeat(
        withTiming(1.08, { duration: 1500, easing: Easing.inOut(Easing.ease) }),
        -1,
        true
      )
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View
      style={[
        styles.ring,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          borderColor: `rgba(0,166,132,${opacity})`,
        },
        animatedStyle,
      ]}
    />
  );
}

export default function VoiceActiveScreen() {
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: theme.bg }]}
      activeOpacity={1}
      onPress={() => router.back()}
    >
      {/* Concentric pulsing rings */}
      <View style={styles.ringContainer}>
        <PulsingRing size={140} opacity={0.08} delay={0} />
        <PulsingRing size={110} opacity={0.18} delay={200} />
        <PulsingRing size={80} opacity={0.3} delay={400} />

        {/* Center solid circle with waveform */}
        <View style={styles.centerCircle}>
          <View style={styles.waveform}>
            {[8, 14, 10, 16, 10, 14, 8].map((h, i) => (
              <View
                key={i}
                style={[styles.waveBar, { height: h }]}
              />
            ))}
          </View>
        </View>
      </View>

      {/* Status text */}
      <Text style={[styles.listeningText, { color: theme.text.primary }]}>
        Listening...
      </Text>

      {/* Arabic transcript preview */}
      <Text style={[styles.transcript, { color: theme.text.secondary }]}>
        سجل خمسة وأربعين دينار...
      </Text>

      {/* Cancel hint */}
      <Text style={[styles.cancelHint, { color: theme.text.muted }]}>
        Tap to cancel
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ringContainer: {
    width: 140,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ring: {
    position: 'absolute',
    borderWidth: 2,
  },
  centerCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.haseebGreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
  waveform: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  waveBar: {
    width: 2.5,
    borderRadius: 1.5,
    backgroundColor: '#FFFFFF',
  },
  listeningText: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 28,
  },
  transcript: {
    fontSize: 13,
    marginTop: 12,
    textAlign: 'right',
    writingDirection: 'rtl',
    paddingHorizontal: 40,
  },
  cancelHint: {
    fontSize: 12,
    position: 'absolute',
    bottom: 60,
  },
});

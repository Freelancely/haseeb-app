import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme, colors } from '../../theme';
import Svg, { Path } from 'react-native-svg';

interface Props {
  duration: string;
}

export default function VoiceNote({ duration }: Props) {
  const { theme } = useTheme();
  const barHeights = [8, 14, 10, 16, 12, 18, 10, 14, 8, 12, 16, 10];

  return (
    <View style={styles.row}>
      <View style={[styles.bubble, { backgroundColor: theme.userBubble }]}>
        {/* Play button */}
        <View style={styles.playBtn}>
          <Svg width={10} height={10} viewBox="0 0 10 10" fill="none">
            <Path d="M2 1L8 5L2 9V1Z" fill="#FFFFFF" />
          </Svg>
        </View>
        {/* Waveform bars */}
        <View style={styles.waveform}>
          {barHeights.map((h, i) => (
            <View
              key={i}
              style={[
                styles.bar,
                {
                  height: h,
                  backgroundColor: colors.haseebGreenLight,
                },
              ]}
            />
          ))}
        </View>
        <Text style={[styles.duration, { color: theme.text.muted }]}>{duration}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 3,
    paddingHorizontal: 12,
  },
  bubble: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 14,
    borderBottomRightRadius: 4,
  },
  playBtn: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: colors.haseebGreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
  waveform: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  bar: {
    width: 2,
    borderRadius: 1,
  },
  duration: {
    fontSize: 9,
    marginLeft: 4,
  },
});

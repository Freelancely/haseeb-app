import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { colors } from '../../theme';
import { useTheme } from '../../theme/ThemeContext';

interface Props {
  value: boolean;
  onToggle: () => void;
}

export default function Toggle({ value, onToggle }: Props) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      onPress={onToggle}
      activeOpacity={0.7}
      style={[
        styles.track,
        {
          backgroundColor: value ? colors.haseebGreen : theme.surface,
        },
      ]}
    >
      <View
        style={[
          styles.knob,
          { transform: [{ translateX: value ? 14 : 0 }] },
        ]}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  track: {
    width: 30,
    height: 16,
    borderRadius: 8,
    padding: 2,
    justifyContent: 'center',
  },
  knob: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
  },
});

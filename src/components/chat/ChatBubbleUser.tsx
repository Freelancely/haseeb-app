import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';

interface Props {
  content: string;
}

export default function ChatBubbleUser({ content }: Props) {
  const { theme } = useTheme();
  const isArabic = /[\u0600-\u06FF]/.test(content);

  return (
    <View style={styles.row}>
      <View style={[styles.bubble, { backgroundColor: theme.userBubble }]}>
        <Text
          style={[
            styles.text,
            { color: theme.text.body },
            isArabic && styles.arabicText,
          ]}
        >
          {content}
        </Text>
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
    maxWidth: '75%',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 14,
    borderBottomRightRadius: 4,
  },
  text: {
    fontSize: 12,
    lineHeight: 17,
  },
  arabicText: {
    textAlign: 'right',
    writingDirection: 'rtl',
  },
});

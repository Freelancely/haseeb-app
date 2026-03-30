import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../theme';
import { avatarSizes } from '../../theme/spacing';
import { Ionicons } from '@expo/vector-icons';

type Character = 'haseeb' | 'aminah' | 'invoices';
type AvatarSize = 'sm' | 'md' | 'header' | 'lg' | 'xl';

interface Props {
  character: Character;
  size?: AvatarSize;
}

function getSize(size: AvatarSize): number {
  return avatarSizes[size];
}

function getBgColor(character: Character): string {
  switch (character) {
    case 'haseeb':
      return colors.haseebGreen;
    case 'aminah':
      return colors.aminahPurple;
    case 'invoices':
      return colors.invoiceAmber;
  }
}

function getBorderRadius(size: number): number {
  return size <= 24 ? 6 : size <= 28 ? 8 : 10;
}

function getIconName(character: Character): keyof typeof Ionicons.glyphMap {
  switch (character) {
    case 'haseeb':
      return 'briefcase';
    case 'aminah':
      return 'analytics';
    case 'invoices':
      return 'document-text';
  }
}

export default function CharacterAvatar({ character, size = 'md' }: Props) {
  const px = getSize(size);
  const bg = getBgColor(character);
  const radius = getBorderRadius(px);
  const iconSize = Math.round(px * 0.5);

  return (
    <View
      style={[
        styles.container,
        {
          width: px,
          height: px,
          borderRadius: radius,
          backgroundColor: bg,
        },
      ]}
    >
      {character === 'invoices' ? (
        <Text style={[styles.invoiceText, { fontSize: px * 0.3 }]}>KD</Text>
      ) : (
        <Ionicons name={getIconName(character)} size={iconSize} color="#FFFFFF" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  invoiceText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});

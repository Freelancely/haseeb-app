import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle, Path, Line, Rect, Ellipse } from 'react-native-svg';
import { colors } from '../../theme';
import { avatarSizes } from '../../theme/spacing';

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

function HaseebSvg({ size }: { size: number }) {
  const s = size * 0.65;
  return (
    <Svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      {/* Head */}
      <Circle cx="12" cy="5" r="3" stroke="white" strokeWidth="1.5" fill="none" />
      {/* Body */}
      <Line x1="12" y1="8" x2="12" y2="17" stroke="white" strokeWidth="1.5" />
      {/* Arms */}
      <Line x1="8" y1="11" x2="16" y2="11" stroke="white" strokeWidth="1.5" />
      {/* Tie */}
      <Line x1="12" y1="8" x2="10.5" y2="10" stroke="white" strokeWidth="1" />
      <Line x1="12" y1="8" x2="13.5" y2="10" stroke="white" strokeWidth="1" />
      {/* Briefcase */}
      <Rect x="9" y="15" width="6" height="4" rx="1" stroke="white" strokeWidth="1.2" fill="none" />
      <Path d="M10.5 15V14C10.5 13.4 11 13 11.5 13H12.5C13 13 13.5 13.4 13.5 14V15" stroke="white" strokeWidth="1" />
      {/* Legs */}
      <Line x1="12" y1="17" x2="9" y2="22" stroke="white" strokeWidth="1.5" />
      <Line x1="12" y1="17" x2="15" y2="22" stroke="white" strokeWidth="1.5" />
    </Svg>
  );
}

function AminahSvg({ size }: { size: number }) {
  const s = size * 0.65;
  return (
    <Svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      {/* Hair */}
      <Path
        d="M7 7C7 4 9 2 12 2C15 2 17 4 17 7"
        stroke="white"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Wavy hair sides */}
      <Path d="M7 7C6.5 8 6 10 6.5 12" stroke="white" strokeWidth="1.2" />
      <Path d="M17 7C17.5 8 18 10 17.5 12" stroke="white" strokeWidth="1.2" />
      {/* Face */}
      <Circle cx="12" cy="7.5" r="3.5" stroke="white" strokeWidth="1.5" fill="none" />
      {/* Eyes */}
      <Circle cx="10.5" cy="7" r="0.5" fill="white" />
      <Circle cx="13.5" cy="7" r="0.5" fill="white" />
      {/* Smile */}
      <Path d="M10.5 9C11 9.5 13 9.5 13.5 9" stroke="white" strokeWidth="0.8" />
      {/* Body / Blazer */}
      <Path d="M9 11L7 20" stroke="white" strokeWidth="1.5" />
      <Path d="M15 11L17 20" stroke="white" strokeWidth="1.5" />
      <Line x1="12" y1="11" x2="12" y2="20" stroke="white" strokeWidth="1.5" />
      {/* Blazer shoulders */}
      <Path d="M9 11C9 11 7 12 7 13" stroke="white" strokeWidth="1.2" />
      <Path d="M15 11C15 11 17 12 17 13" stroke="white" strokeWidth="1.2" />
      {/* Belt */}
      <Line x1="8" y1="16" x2="16" y2="16" stroke="white" strokeWidth="1" />
    </Svg>
  );
}

export default function CharacterAvatar({ character, size = 'md' }: Props) {
  const px = getSize(size);
  const bg = getBgColor(character);
  const radius = getBorderRadius(px);

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
      {character === 'haseeb' && <HaseebSvg size={px} />}
      {character === 'aminah' && <AminahSvg size={px} />}
      {character === 'invoices' && (
        <Text style={[styles.invoiceText, { fontSize: px * 0.3 }]}>KD</Text>
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

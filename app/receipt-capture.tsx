import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../src/theme';

export default function ReceiptCaptureScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      {/* Top bar */}
      <View style={[styles.topBar, { paddingTop: insets.top + 8 }]}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Scan receipt</Text>
        <TouchableOpacity>
          <Text style={styles.galleryText}>Gallery</Text>
        </TouchableOpacity>
      </View>

      {/* Viewfinder area */}
      <View style={styles.viewfinderArea}>
        <View style={styles.viewfinder}>
          {/* Corner brackets */}
          <View style={[styles.corner, styles.topLeft]} />
          <View style={[styles.corner, styles.topRight]} />
          <View style={[styles.corner, styles.bottomLeft]} />
          <View style={[styles.corner, styles.bottomRight]} />

          {/* Center content */}
          <View style={styles.centerContent}>
            <Text style={styles.receiptEmoji}>🧾</Text>
            <Text style={styles.positionText}>Position receipt</Text>
            <Text style={styles.autoText}>Auto-detect on</Text>
          </View>
        </View>
      </View>

      {/* Capture button */}
      <View style={[styles.bottomArea, { paddingBottom: insets.bottom + 24 }]}>
        <TouchableOpacity style={styles.captureOuter} activeOpacity={0.7}>
          <View style={styles.captureInner} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  cancelText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 14,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
  galleryText: {
    color: colors.haseebGreenLight,
    fontSize: 14,
  },
  viewfinderArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewfinder: {
    width: 260,
    height: 340,
    justifyContent: 'center',
    alignItems: 'center',
  },
  corner: {
    position: 'absolute',
    width: 24,
    height: 24,
    borderColor: colors.haseebGreenLight,
  },
  topLeft: {
    top: 0,
    left: 0,
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderTopLeftRadius: 4,
  },
  topRight: {
    top: 0,
    right: 0,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderTopRightRadius: 4,
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderBottomLeftRadius: 4,
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderBottomRightRadius: 4,
  },
  centerContent: {
    alignItems: 'center',
    gap: 6,
  },
  receiptEmoji: {
    fontSize: 36,
    opacity: 0.4,
  },
  positionText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 13,
  },
  autoText: {
    color: 'rgba(255,255,255,0.35)',
    fontSize: 10,
  },
  bottomArea: {
    alignItems: 'center',
    paddingTop: 24,
  },
  captureOuter: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 3,
    borderColor: 'rgba(255,255,255,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  captureInner: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#FFFFFF',
  },
});

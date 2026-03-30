import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme, colors } from '../src/theme';
import { useAuthStore } from '../src/stores/authStore';

type Step = 'splash' | 'connect' | 'otp' | 'tenant';

export default function LoginScreen() {
  const { theme } = useTheme();
  const router = useRouter();
  const { tenants, verifyOTP, selectTenant } = useAuthStore();
  const [step, setStep] = useState<Step>('splash');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => setStep('connect'), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSendOTP = () => {
    if (phone.length >= 8) {
      setStep('otp');
    }
  };

  const handleVerifyOTP = () => {
    if (otp.length >= 4) {
      verifyOTP();
      setStep('tenant');
    }
  };

  const handleSelectTenant = (tenant: { id: string; name: string; role: string }) => {
    selectTenant(tenant);
    router.replace('/(tabs)');
  };

  // Splash
  if (step === 'splash') {
    return (
      <View style={[styles.container, { backgroundColor: theme.bg }]}>
        <Animated.Text style={[styles.splashLogo, { opacity: fadeAnim }]}>
          حسيب
        </Animated.Text>
      </View>
    );
  }

  // Connect
  if (step === 'connect') {
    return (
      <View style={[styles.container, { backgroundColor: theme.bg }]}>
        <Text style={[styles.splashLogoSmall, { color: colors.haseebGreen }]}>حسيب</Text>
        <Text style={[styles.heading, { color: theme.text.primary }]}>Connect to Haseeb</Text>
        <Text style={[styles.subtitle, { color: theme.text.secondary }]}>
          Enter your phone number to get started
        </Text>
        <View style={[styles.inputBox, { backgroundColor: theme.inputBg, borderColor: theme.card.border }]}>
          <Text style={[styles.prefix, { color: theme.text.muted }]}>+965</Text>
          <TextInput
            style={[styles.phoneInput, { color: theme.text.primary }]}
            value={phone}
            onChangeText={setPhone}
            placeholder="Phone number"
            placeholderTextColor={theme.text.muted}
            keyboardType="phone-pad"
            maxLength={10}
          />
        </View>
        <TouchableOpacity
          style={[styles.primaryBtn, phone.length < 8 && styles.disabledBtn]}
          onPress={handleSendOTP}
          activeOpacity={0.7}
          disabled={phone.length < 8}
        >
          <Text style={styles.primaryBtnText}>Send OTP</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // OTP
  if (step === 'otp') {
    return (
      <View style={[styles.container, { backgroundColor: theme.bg }]}>
        <Text style={[styles.heading, { color: theme.text.primary }]}>Enter verification code</Text>
        <Text style={[styles.subtitle, { color: theme.text.secondary }]}>
          We sent a 6-digit code to +965 {phone}
        </Text>
        <View style={[styles.inputBox, { backgroundColor: theme.inputBg, borderColor: theme.card.border }]}>
          <TextInput
            style={[styles.otpInput, { color: theme.text.primary }]}
            value={otp}
            onChangeText={setOtp}
            placeholder="000000"
            placeholderTextColor={theme.text.muted}
            keyboardType="number-pad"
            maxLength={6}
            textAlign="center"
          />
        </View>
        <TouchableOpacity
          style={[styles.primaryBtn, otp.length < 4 && styles.disabledBtn]}
          onPress={handleVerifyOTP}
          activeOpacity={0.7}
          disabled={otp.length < 4}
        >
          <Text style={styles.primaryBtnText}>Verify</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Tenant picker
  return (
    <View style={[styles.container, { backgroundColor: theme.bg }]}>
      <Text style={[styles.heading, { color: theme.text.primary }]}>Select your business</Text>
      <Text style={[styles.subtitle, { color: theme.text.secondary }]}>
        Choose which account to connect
      </Text>
      {tenants.map((tenant) => (
        <TouchableOpacity
          key={tenant.id}
          style={[styles.tenantCard, { backgroundColor: theme.card.bg, borderColor: theme.card.border }]}
          onPress={() => handleSelectTenant(tenant)}
          activeOpacity={0.7}
        >
          <View style={styles.tenantAvatar}>
            <Text style={styles.tenantInitial}>{tenant.name.charAt(0)}</Text>
          </View>
          <View>
            <Text style={[styles.tenantName, { color: theme.text.primary }]}>{tenant.name}</Text>
            <Text style={[styles.tenantRole, { color: theme.text.secondary }]}>{tenant.role}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  splashLogo: {
    fontSize: 48,
    fontWeight: '800',
    color: colors.haseebGreen,
    letterSpacing: -1,
  },
  splashLogoSmall: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 24,
    letterSpacing: -0.5,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 28,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    width: '100%',
    marginBottom: 16,
  },
  prefix: {
    fontSize: 15,
    fontWeight: '500',
    marginRight: 8,
  },
  phoneInput: {
    flex: 1,
    fontSize: 15,
    padding: 0,
  },
  otpInput: {
    flex: 1,
    fontSize: 22,
    fontWeight: '600',
    letterSpacing: 8,
    padding: 0,
  },
  primaryBtn: {
    backgroundColor: colors.haseebGreen,
    width: '100%',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  disabledBtn: {
    opacity: 0.4,
  },
  primaryBtnText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
  tenantCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    width: '100%',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 10,
  },
  tenantAvatar: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: colors.haseebGreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tenantInitial: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  tenantName: {
    fontSize: 15,
    fontWeight: '600',
  },
  tenantRole: {
    fontSize: 12,
    marginTop: 2,
  },
});

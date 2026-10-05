import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos para entrar em Monster High.');
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      Alert.alert('Erro', 'Digite um e-mail válido.');
      return;
    }

    navigation.navigate('Home', { usuario: { email } });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.loginScroll}>
        <View style={styles.loginCard}>
          <Text style={styles.loginLogo}>☠️</Text>
          <Text style={styles.loginTitle}>MONSTER HIGH</Text>
          <Text style={styles.loginSubtitle}>
            Acesse o arquivo assustadoramente fabuloso
          </Text>

          <View style={styles.formGroup}>
            <Text style={styles.label}>E-MAIL DO ESTUDANTE</Text>
            <TextInput
              style={styles.input}
              placeholder="ex: frankie@monsterhigh.com"
              placeholderTextColor="#666666"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>SENHA SECRETA</Text>
            <TextInput
              style={styles.input}
              placeholder="••••••••"
              placeholderTextColor="#666666"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
            />
          </View>

          <TouchableOpacity style={styles.pinkButton} onPress={handleLogin}>
            <Text style={styles.pinkButtonText}>ENTRAR EM MONSTER HIGH</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.linkButton}
            onPress={() => navigation.navigate('Perfil', { usuario: {} })}
          >
            <Text style={styles.linkText}>Criar carteirinha escolar ➔</Text>
          </TouchableOpacity>

          <Text style={styles.footerText}>
            Seja você mesmo, seja único, seja um monstro.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0d0a12' },
  loginScroll: { flexGrow: 1, justifyContent: 'center', padding: 20 },
  loginCard: {
    backgroundColor: '#161120',
    borderWidth: 1,
    borderColor: '#4a235a',
    padding: 20,
    borderRadius: 8,
  },
  loginLogo: { fontSize: 40, textAlign: 'center', marginBottom: 5 },
  loginTitle: {
    color: '#ff007f',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 2,
  },
  loginSubtitle: {
    color: '#b3b3b3',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 25,
  },
  formGroup: { marginBottom: 15 },
  label: {
    color: '#ff66b2',
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 5,
    letterSpacing: 1,
  },
  input: {
    height: 45,
    backgroundColor: '#15101f',
    borderWidth: 1,
    borderColor: '#4a235a',
    color: '#ffffff',
    paddingHorizontal: 12,
    fontSize: 14,
    borderRadius: 4,
  },
  pinkButton: {
    backgroundColor: '#ff007f',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 4,
  },
  pinkButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 1,
  },
  linkButton: { marginTop: 15, alignItems: 'center' },
  linkText: { color: '#ff66b2', fontSize: 13, fontWeight: 'bold' },
  footerText: {
    color: '#666666',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
  },
});
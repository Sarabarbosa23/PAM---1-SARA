import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const entrar = () => {
    if (!email.trim() || !senha) {
      Alert.alert('Campos obrigatórios', 'Informe seu e-mail e sua senha para continuar.');
      return;
    }

    navigation.replace('Home');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.card}>
          <Text style={styles.emoji}>🧁</Text>
          <Text style={styles.title}>Doce Encanto</Text>
          <Text style={styles.subtitle}>Entre para escolher seus doces favoritos</Text>

          <View style={styles.form}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="seu@email.com"
              placeholderTextColor="#A88A94"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="emailAddress"
              accessibilityLabel="E-mail"
              returnKeyType="next"
            />

            <Text style={styles.label}>Senha</Text>
            <TextInput
              style={styles.input}
              value={senha}
              onChangeText={setSenha}
              placeholder="Digite sua senha"
              placeholderTextColor="#A88A94"
              secureTextEntry
              textContentType="password"
              accessibilityLabel="Senha"
              returnKeyType="done"
              onSubmitEditing={entrar}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={entrar}
              accessibilityRole="button"
            >
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F7',
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    width: '100%',
    maxWidth: 420,
    alignSelf: 'center',
    padding: 28,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#FFD1DC',
    shadowColor: '#8C5264',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 4,
  },
  emoji: {
    fontSize: 44,
    textAlign: 'center',
    marginBottom: 8,
  },
  title: {
    color: '#A33B60',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    color: '#80666F',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 28,
  },
  form: {
    gap: 10,
  },
  label: {
    color: '#50343D',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8,
  },
  input: {
    minHeight: 50,
    borderWidth: 1,
    borderColor: '#E8C4CF',
    borderRadius: 12,
    paddingHorizontal: 14,
    color: '#33252A',
    backgroundColor: '#FFFCFD',
    fontSize: 16,
  },
  button: {
    minHeight: 52,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D85D83',
    borderRadius: 12,
    marginTop: 18,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

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
import { salvarPerfil } from '../firebase/usuariosService';

export default function Perfil({ navigation, route }) {
  const usuarioExistente = route.params?.usuario || {};

  const [nome, setNome] = useState(usuarioExistente.nome || '');
  const [idade, setIdade] = useState(usuarioExistente.idade || '');
  const [personagemFavorito, setPersonagemFavorito] = useState(
    usuarioExistente.personagemFavorito || ''
  );
  const [biografia, setBiografia] = useState(usuarioExistente.biografia || '');

  const handleSalvarPerfil = async () => {
    if (!nome.trim() || !idade.trim() || !personagemFavorito.trim()) {
      Alert.alert(
        'Campos obrigatórios',
        'Por favor, preencha nome, idade e seu monstro favorito.'
      );
      return;
    }

    const numIdade = parseInt(idade, 10);
    if (isNaN(numIdade) || numIdade < 10 || numIdade > 2000) {
      Alert.alert('Idade inválida', 'Digite uma idade válida de monstro.');
      return;
    }

    const perfil = {
      nome: nome.trim(),
      idade: idade.trim(),
      personagemFavorito: personagemFavorito.trim(),
      biografia: biografia.trim(),
    };

    try {
      await salvarPerfil(usuarioExistente, perfil);
      navigation.replace('Home', {
        usuario: { ...usuarioExistente, ...perfil },
      });
    } catch (erro) {
      Alert.alert('Erro ao salvar perfil', erro.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.profileContainer}>
        <View style={styles.loginCard}>
          <Text style={styles.loginTitle}>CARTEIRINHA ESCOLAR</Text>
          <Text style={styles.loginSubtitle}>
            Complete sua inscrição para ter acesso total aos arquivos da escola
          </Text>

          <View style={styles.formGroup}>
            <Text style={styles.label}>NOME COMPLETO</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: Draculaura"
              placeholderTextColor="#666666"
              value={nome}
              onChangeText={setNome}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>IDADE (EM ANOS OU SÉCULOS)</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: 1600"
              placeholderTextColor="#666666"
              value={idade}
              onChangeText={setIdade}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>MONSTRO FAVORITO</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: Clawdeen Wolf, Frankie Stein..."
              placeholderTextColor="#666666"
              value={personagemFavorito}
              onChangeText={setPersonagemFavorito}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>SOBRE VOCÊ / DEFEITO PERFEITO</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Conte um pouco sobre suas peculiaridades monstruosas..."
              placeholderTextColor="#666666"
              value={biografia}
              onChangeText={setBiografia}
              multiline
              numberOfLines={3}
            />
          </View>

          <TouchableOpacity
            style={styles.pinkButton}
            onPress={handleSalvarPerfil}
          >
            <Text style={styles.pinkButtonText}>SALVAR E IR PARA O INÍCIO</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.pinkButton, { backgroundColor: '#a30052' }]}
            onPress={() =>
              navigation.navigate('Home', { usuario: usuarioExistente })
            }
          >
            <Text style={styles.pinkButtonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0d0a12' },
  profileContainer: { paddingBottom: 40 },
  loginCard: {
    backgroundColor: '#161120',
    borderWidth: 1,
    borderColor: '#4a235a',
    padding: 20,
    borderRadius: 8,
    margin: 20,
  },
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
  textArea: { height: 90, textAlignVertical: 'top', paddingTop: 10 },
  pinkButton: {
    backgroundColor: '#ff007f',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 4,
  },
  pinkButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 1,
  },
});
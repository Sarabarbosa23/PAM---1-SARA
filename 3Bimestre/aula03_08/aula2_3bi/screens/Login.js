import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const fazerLogin = () => {
    setErro('');

    // Verifica se os campos estão preenchidos
    if (!email.trim() || !senha.trim()) {
      setErro('Digite seu e-mail e sua senha.');
      return;
    }

    // Verifica se o e-mail possui um formato válido
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)) {
      setErro('Digite um e-mail válido.');
      return;
    }

    // Se tudo estiver correto, vai para a Home
    navigation.navigate('Home');
  };

  const camposPreenchidos = email.trim() !== '' && senha.trim() !== '';

  return (
    <KeyboardAvoidingView
      style={styles.tela}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>

          {/* Logo */}
          <View style={styles.logoContainer}>
            <Image
              source={{
                uri: 'https://www.nicelembrancinhas.com.br/image/cache/catalog/MORANGUINHO/MORANGUINHO%20LOGO-650x650.jpg',
              }}
              style={styles.imagem}
            />
          </View>

          {/* Título */}
          <Text style={styles.titulo}>Bem-vindo! 🍓</Text>

          <Text style={styles.subtitulo}>
            Entre na sua conta da Moranguinho
          </Text>

          {/* Card do formulário */}
          <View style={styles.card}>

            {/* E-mail */}
            <Text style={styles.label}>E-mail</Text>

            <View style={styles.inputContainer}>
              <Text style={styles.icone}>✉️</Text>

              <TextInput
                placeholder="Digite seu e-mail"
                placeholderTextColor="#b98a9b"
                value={email}
                onChangeText={(texto) => {
                  setEmail(texto);
                  setErro('');
                }}
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            {/* Senha */}
            <Text style={styles.label}>Senha</Text>

            <View style={styles.inputContainer}>
              <Text style={styles.icone}>🔒</Text>

              <TextInput
                placeholder="Digite sua senha"
                placeholderTextColor="#b98a9b"
                value={senha}
                onChangeText={(texto) => {
                  setSenha(texto);
                  setErro('');
                }}
                style={styles.input}
                secureTextEntry
              />
            </View>

            {/* Esqueci a senha */}
            <TouchableOpacity
              style={styles.esqueciContainer}
              onPress={() => {
                // Coloque aqui a navegação para recuperação de senha
              }}
            >
              <Text style={styles.esqueci}>
                Esqueci minha senha
              </Text>
            </TouchableOpacity>

            {/* Mensagem de erro */}
            {erro !== '' && (
              <View style={styles.erroContainer}>
                <Text style={styles.erro}>⚠️ {erro}</Text>
              </View>
            )}

            {/* Botão Entrar */}
            <TouchableOpacity
              style={[
                styles.botao,
                !camposPreenchidos && styles.botaoDesabilitado,
              ]}
              onPress={fazerLogin}
              disabled={!camposPreenchidos}
              activeOpacity={0.8}
            >
              <Text style={styles.textoBotao}>
                Entrar 🍓
              </Text>
            </TouchableOpacity>

          </View>

          {/* Cadastro */}
          <View style={styles.cadastroContainer}>
            <Text style={styles.cadastroTexto}>
              Ainda não possui uma conta?
            </Text>

            <TouchableOpacity
              onPress={() => navigation.navigate('Cadastro')}
            >
              <Text style={styles.cadastrar}>
                Criar conta
              </Text>
            </TouchableOpacity>
          </View>

          {/* Rodapé */}
          <Text style={styles.rodape}>
            🍓 Feito com carinho 🍓
          </Text>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#f8b6cd',
  },

  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
  },

  container: {
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 35,
  },

  logoContainer: {
    width: 145,
    height: 145,
    borderRadius: 75,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,

    shadowColor: '#a52b58',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },

  imagem: {
    width: 125,
    height: 125,
    borderRadius: 65,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#e93676',
    marginBottom: 5,
  },

  subtitulo: {
    fontSize: 14,
    color: '#8f4d65',
    marginBottom: 25,
    textAlign: 'center',
  },

  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 22,

    shadowColor: '#8d3154',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
  },

  label: {
    color: '#d93670',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 7,
    marginLeft: 4,
  },

  inputContainer: {
    width: '100%',
    height: 52,
    backgroundColor: '#fff5f8',
    borderWidth: 1.5,
    borderColor: '#f0a2ba',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 17,
    paddingHorizontal: 12,
  },

  icone: {
    fontSize: 19,
    marginRight: 9,
  },

  input: {
    flex: 1,
    height: '100%',
    fontSize: 15,
    color: '#5f3042',
  },

  esqueciContainer: {
    alignItems: 'flex-end',
    marginTop: -5,
    marginBottom: 20,
  },

  esqueci: {
    color: '#e93676',
    fontSize: 13,
    fontWeight: 'bold',
  },

  erroContainer: {
    backgroundColor: '#ffe4eb',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },

  erro: {
    color: '#c92755',
    fontSize: 13,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  botao: {
    width: '100%',
    height: 52,
    backgroundColor: '#ee467e',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#c72c60',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },

  botaoDesabilitado: {
    backgroundColor: '#e5b4c2',
    shadowOpacity: 0,
    elevation: 0,
  },

  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  cadastroContainer: {
    marginTop: 25,
    alignItems: 'center',
  },

  cadastroTexto: {
    color: '#8f4d65',
    fontSize: 13,
    marginBottom: 5,
  },

  cadastrar: {
    color: '#e93676',
    fontSize: 15,
    fontWeight: 'bold',
  },

  rodape: {
    marginTop: 25,
    color: '#a34d69',
    fontSize: 12,
  },
});


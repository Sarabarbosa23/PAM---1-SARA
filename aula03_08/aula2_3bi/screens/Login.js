import React from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://www.nicelembrancinhas.com.br/image/cache/catalog/MORANGUINHO/MORANGUINHO%20LOGO-650x650.jpg'
        }}
        style={styles.imagem}
      />

      <Text style={styles.titulo}>🍓 Login Moranguinho 🍓</Text>

      <Text style={styles.label}>Digite o e-mail</Text>
      <TextInput
        placeholder="fulano@hotmail.com"
        style={styles.input}
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        placeholder="abc@123"
        secureTextEntry
        style={styles.input}
      />

      <Button
        title="Entrar 🍓"
        color="#ee467e"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7b2c9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  imagem: {
    width: 180,
    height: 180,
    borderRadius: 90,
    marginBottom: 20,
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#f14682',
    marginBottom: 25,
  },

  label: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    color: '#f02777',
    fontWeight: 'bold',
    marginBottom: 5,
  },

  input: {
    width: '100%',
    height: 45,
    backgroundColor: '#FFF',
    borderColor: '#e2789b',
    borderWidth: 2,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
});


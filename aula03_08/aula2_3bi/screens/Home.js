import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>

      <Image
        source={{
          uri: 'https://dublagem.fandom.com/wiki/Moranguinho:_Aventuras_em_Tutti_Frutti'
        }}
        style={styles.imagem}
      />

      <Text style={styles.titulo}>🍓 Bem-vinda 🍓</Text>

      <Text style={styles.texto}>
        Esse é o mundo mágico da Moranguinho!
      </Text>

      <View style={styles.botao}>
        <Button
          title="Ver Perfil 🍓"
          color="#e84393"
          onPress={() => navigation.navigate('Perfil')}
        />
      </View>

      <View style={styles.botao}>
        <Button
          title="Sair"
          color="#d63031"
          onPress={() => navigation.navigate('Login')}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffd6e7',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  imagem: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#c2185b',
    marginBottom: 10,
  },

  texto: {
    fontSize: 16,
    color: '#880e4f',
    textAlign: 'center',
    marginBottom: 20,
  },

  botao: {
    width: '100%',
    marginTop: 10,
  },
});
import React from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView } from 'react-native';

export default function Home({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Image
        source={{
          uri: 'https://i.pinimg.com/originals/8c/2c/4c/8c2c4c9d5e6f4dcbdb1f9f5b4b0f6b0f.png'
        }}
        style={styles.imagem}
      />

      <Text style={styles.titulo}>🍓 Mundo da Moranguinho 🍓</Text>

      <Text style={styles.texto}>
        Bem-vinda ao mundo mais doce e divertido! 💕
      </Text>

      <Text style={styles.subtitulo}>🌸 As Amigas 🌸</Text>

      <View style={styles.card}>
        <Text style={styles.nome}>🍓 Moranguinho</Text>
        <Text style={styles.desc}>Ama morangos, cozinhar e ajudar os amigos 🍰</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.nome}>🍊 Laranjinha</Text>
        <Text style={styles.desc}>Ama música, dança e festas 🎶</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.nome}>🍇 Uvinha</Text>
        <Text style={styles.desc}>Ama moda, estilo e roupas lindas 👗</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.nome}>🍋 Limãozinho</Text>
        <Text style={styles.desc}>Ama patinar e aventuras radicais 🛼</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.nome}>🫐 Amora</Text>
        <Text style={styles.desc}>Ama tecnologia e inventar coisas 💻</Text>
      </View>

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

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#ffd6e7',
    alignItems: 'center',
  },

  imagem: {
    width: 200,
    height: 200,
    marginBottom: 15,
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
    marginBottom: 20,
    textAlign: 'center',
  },

  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ad1457',
    marginBottom: 10,
  },

  card: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    borderColor: '#f48fb1',
    borderWidth: 2,
  },

  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#d81b60',
  },

  desc: {
    fontSize: 14,
    color: '#880e4f',
  },

  botao: {
    width: '100%',
    marginTop: 10,
  },
});
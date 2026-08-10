import React from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView } from 'react-native';

export default function Perfil({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFsBtFah_o-2tMslm0XOu9oTmVjp4nB2xM2PEp1U_CcQ&s=10'
        }}
        style={styles.imagem}
      />

      <Text style={styles.nome}>🍓 Moranguinho 🍓</Text>

      <Text style={styles.descricao}>
        Doce, alegre e sempre pronta para ajudar 💕
      </Text>

      <View style={styles.card}>
        <Text style={styles.titulo}>🍰 O que ela gosta:</Text>
        <Text style={styles.texto}>• Fazer bolos e doces deliciosos</Text>
        <Text style={styles.texto}>• Cuidar do jardim 🌸</Text>
        <Text style={styles.texto}>• Passar tempo com as amigas</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.titulo}>💖 Personalidade:</Text>
        <Text style={styles.texto}>• Gentil</Text>
        <Text style={styles.texto}>• Corajosa</Text>
        <Text style={styles.texto}>• Muito amiga</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.titulo}>🌈 Curiosidades:</Text>
        <Text style={styles.texto}>• Mora em uma terra mágica 🍓</Text>
        <Text style={styles.texto}>• Tem várias amigas especiais</Text>
        <Text style={styles.texto}>• Sempre resolve problemas com carinho</Text>
      </View>

      <View style={styles.botao}>
        <Button
          title="Voltar 🍓"
          color="#e84393"
          onPress={() => navigation.navigate('Home')}
        />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#ffe0f0',
    alignItems: 'center',
  },

  imagem: {
    width: 180,
    height: 180,
    marginBottom: 20,
  },

  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#d81b60',
    marginBottom: 10,
  },

  descricao: {
    fontSize: 16,
    color: '#ad1457',
    marginBottom: 20,
    textAlign: 'center',
  },

  card: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    borderColor: '#f48fb1',
    borderWidth: 2,
  },

  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#c2185b',
    marginBottom: 5,
  },

  texto: {
    fontSize: 14,
    color: '#880e4f',
  },

  botao: {
    width: '100%',
    marginTop: 10,
  },
});
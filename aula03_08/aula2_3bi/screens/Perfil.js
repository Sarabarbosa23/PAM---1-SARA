import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

export default function Perfil({ navigation }) {
  return (
    <View style={styles.container}>

      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFsBtFah_o-2tMslm0XOu9oTmVjp4nB2xM2PEp1U_CcQ&s=10'
        }}
        style={styles.imagem}
      />

      <Text style={styles.nome}>🍓 Moranguinho 🍓</Text>

      <Text style={styles.descricao}>
        Doce, alegre e cheia de aventuras! 🌸
      </Text>

      <Text style={styles.info}>
        🍰 Ama cozinhar doces  
        🌼 Ama seus amigos  
        🍓 Ama morangos!
      </Text>

      <View style={styles.botao}>
        <Button
          title="Voltar 🍓"
          color="#e84393"
          onPress={() => navigation.navigate('Home')}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe0f0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
    marginBottom: 10,
    textAlign: 'center',
  },

  info: {
    fontSize: 15,
    color: '#880e4f',
    textAlign: 'center',
    marginBottom: 20,
  },

  botao: {
    width: '100%',
  },
});
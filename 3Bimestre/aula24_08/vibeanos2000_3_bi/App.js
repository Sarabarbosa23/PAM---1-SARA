import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [resultado, setResultado] = useState('');

  function mostrarResultado(tipo) {
    if (tipo === 'paty') {
      setResultado(
        '💖 Patricinha Y2K\n\n✨ Domingo: shopping + fotos\n📍 Lugares: café, shopping\n💫 Vibe: estilosa, social, fashion'
      );
    }

    if (tipo === 'rock') {
      setResultado(
        '🖤 Rock Y2K\n\n✨ Domingo: música alta\n📍 Lugares: shows\n💫 Vibe: intensa, rebelde, agitada'
      );
    }

    if (tipo === 'boho') {
      setResultado(
        '🌿 Boho Y2K\n\n✨ Domingo: natureza + café\n📍 Lugares: parques\n💫 Vibe: calma, vibe good energy'
      );
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Text style={styles.titulo}>✨ Y2K VIBE CHECK ✨</Text>
      <Text style={styles.subtitulo}>Escolha seu acessório</Text>

      <View style={styles.imagens}>
        <TouchableOpacity onPress={() => mostrarResultado('paty')}>
          <Image
            source={{ uri: 'https://i.imgur.com/1Xq9BiK.png' }}
            style={styles.img}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => mostrarResultado('rock')}>
          <Image
            source={{ uri: 'https://i.imgur.com/v7sR7yU.png' }}
            style={styles.img}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => mostrarResultado('boho')}>
          <Image
            source={{ uri: 'https://i.imgur.com/5cX1R8P.png' }}
            style={styles.img}
          />
        </TouchableOpacity>
      </View>

      {resultado !== '' && (
        <View style={styles.resultadoBox}>
          <Text style={styles.resultado}>{resultado}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#54ffe8', // marrom escuro base
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  titulo: {
    fontSize: 28,
    color: '#7e51df',
    fontWeight: 'bold',
    textShadowColor: '#ff00cc',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10, // brilho Y2K
  },

  subtitulo: {
    fontSize: 16,
    color: '#ff87e1',
    marginBottom: 20,
  },

  imagens: {
    flexDirection: 'row',
  },

  img: {
    width: 110,
    height: 110,
    margin: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#ffb347',
    backgroundColor: '#fff',
  },

  resultadoBox: {
    marginTop: 30,
    backgroundColor: '#374d49',
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ff00cc',
  },

  resultado: {
    color: '#f5d7b2',
    textAlign: 'center',
  },
});
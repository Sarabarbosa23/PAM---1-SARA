// screens/Detalhes.js
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  SafeAreaView,
  Alert 
} from 'react-native';

export default function Detalhes({ route, navigation }) {
  const { doce } = route.params;

  const handleAdicionarAoCarrinho = () => {
    Alert.alert(
      "Sucesso! 🎉",
      `${doce.nome} foi adicionado ao seu carrinho!`,
      [{ text: "OK", onPress: () => navigation.goBack() }]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.detailsContainer}>
        <Image source={{ uri: doce.imagem }} style={styles.detailsImage} />
        
        <View style={styles.detailsInfo}>
          <Text style={styles.detailsTitle}>{doce.nome}</Text>
          <Text style={styles.detailsPrice}>{doce.preco}</Text>
          <Text style={styles.detailsDescription}>{doce.descricao}</Text>

          <TouchableOpacity 
            style={styles.buttonBlue}
            onPress={handleAdicionarAoCarrinho}
          >
            <Text style={styles.buttonText}>Adicionar ao Carrinho 🛒</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.buttonOutline}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonOutlineText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
  },
  detailsContainer: {
    flex: 1,
    padding: 16,
  },
  detailsImage: {
    width: '100%',
    height: 240,
    borderRadius: 15,
  },
  detailsInfo: {
    marginTop: 16,
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 15,
    elevation: 2,
  },
  detailsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  detailsPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF69B4',
    marginVertical: 8,
  },
  detailsDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  buttonBlue: {
    backgroundColor: '#64B5F6',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  buttonOutline: {
    borderWidth: 1.5,
    borderColor: '#FF8DA1',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
  buttonOutlineText: {
    color: '#FF8DA1',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
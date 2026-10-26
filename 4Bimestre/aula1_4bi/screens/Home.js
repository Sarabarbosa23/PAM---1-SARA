// screens/Home.js
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList, 
  Image, 
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';

const DOCES = [
  {
    id: '1',
    nome: 'Cupcake de Morango',
    preco: 'R$ 12,00',
    descricao: 'Delicioso cupcake de massa fofinha com recheio de morango e cobertura rosa de chantilly.',
    imagem: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '2',
    nome: 'Donut de Mirtilo Azul',
    preco: 'R$ 9,50',
    descricao: 'Donut macio com confeitos coloridos e uma maravilhosa cobertura azul de mirtilo.',
    imagem: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '3',
    nome: 'Macarons Sortidos',
    preco: 'R$ 18,00',
    descricao: 'Caixa com 4 macarons artesanais franceses nos sabores morango, baunilha e blueberry.',
    imagem: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '4',
    nome: 'Bolo de Aniversário Rosa',
    preco: 'R$ 45,00',
    descricao: 'Fatia de bolo com camadas recheadas de creme e confeitado em tons pastel.',
    imagem: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?q=80&w=400&auto=format&fit=crop',
  },
];

export default function Home({ navigation }) {
  const renderDoce = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imagem }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.nome}</Text>
        <Text style={styles.cardPrice}>{item.preco}</Text>
        
        <TouchableOpacity 
          style={styles.buttonPink}
          onPress={() => navigation.navigate('Detalhes', { doce: item })}
        >
          <Text style={styles.buttonText}>Ver Detalhes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🍭 Loja de Doces 🍬</Text>
        <Text style={styles.headerSubtitle}>Escolha suas guloseimas favoritas!</Text>
      </View>

      <FlatList
        data={DOCES}
        keyExtractor={(item) => item.id}
        renderItem={renderDoce}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
  },
  header: {
    padding: 16,
    backgroundColor: '#B4E1FF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#D81B60',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#4A4A4A',
    marginTop: 4,
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: '#FFD1DC',
  },
  cardImage: {
    width: '100%',
    height: 160,
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF69B4',
    marginVertical: 6,
  },
  buttonPink: {
    backgroundColor: '#FF8DA1',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
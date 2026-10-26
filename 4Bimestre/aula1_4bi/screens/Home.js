// screens/Home.js
import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList, 
  Image, 
  TouchableOpacity, 
  SafeAreaView,
  ScrollView 
} from 'react-native';

const CATEGORIAS = ['Todos', 'Bolos', 'Chocolates', 'Gelados'];

const DOCES = [
  {
    id: '1',
    nome: 'Cupcake de Morango',
    preco: 12.00,
    categoria: 'Bolos',
    descricao: 'Delicioso cupcake de massa fofinha com recheio de morango e cobertura rosa de chantilly.',
    imagem: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '2',
    nome: 'Donut de Mirtilo Azul',
    preco: 9.50,
    categoria: 'Bolos',
    descricao: 'Donut macio com confeitos coloridos e uma maravilhosa cobertura azul de mirtilo.',
    imagem: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '3',
    nome: 'Macarons Sortidos',
    preco: 18.00,
    categoria: 'Chocolates',
    descricao: 'Caixa com 4 macarons artesanais franceses nos sabores morango, baunilha e blueberry.',
    imagem: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '4',
    nome: 'Bolo de Aniversário Rosa',
    preco: 45.00,
    categoria: 'Bolos',
    descricao: 'Fatia de bolo com camadas recheadas de creme e confeitado em tons pastel.',
    imagem: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '5',
    nome: 'Sorvete Azul Blue Ice',
    preco: '10.00',
    categoria: 'Gelados',
    descricao: 'Sorvete cremoso sabor tutti-frutti com calda azul vibrante e confeitos.',
    imagem: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '6',
    nome: 'Brigadeiro Gourmet Rosa',
    preco: '5.00',
    categoria: 'Chocolates',
    descricao: 'Brigadeiro cremoso de chocolate branco com essência de morango e confeitos especiais.',
    imagem: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '7',
    nome: 'Bolo de Cenoura com Chocolate',
    preco: 14.00,
    categoria: 'Bolos',
    descricao: 'Bolo de cenoura fofinho coberto com uma generosa camada de calda de chocolate.',
    imagem: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '8',
    nome: 'Fatia de Bolo Red Velvet',
    preco: 16.00,
    categoria: 'Bolos',
    descricao: 'Massa red velvet macia em camadas com recheio cremoso de cream cheese.',
    imagem: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '9',
    nome: 'Trufas de Chocolate',
    preco: 8.00,
    categoria: 'Chocolates',
    descricao: 'Trufas artesanais de chocolate ao leite com recheio cremoso de ganache.',
    imagem: 'https://images.unsplash.com/photo-1548907040-4d42bfcf8f38?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '10',
    nome: 'Barra de Chocolate com Avelã',
    preco: 11.00,
    categoria: 'Chocolates',
    descricao: 'Chocolate ao leite com pedaços crocantes de avelã.',
    imagem: 'https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '11',
    nome: 'Picolé de Morango',
    preco: 7.00,
    categoria: 'Gelados',
    descricao: 'Picolé refrescante feito com morangos e uma cobertura fina de chocolate.',
    imagem: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '12',
    nome: 'Milkshake de Baunilha',
    preco: 13.00,
    categoria: 'Gelados',
    descricao: 'Milkshake cremoso de baunilha servido gelado com chantilly.',
    imagem: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '13',
    nome: 'Bolo de Limão',
    preco: 15.00,
    categoria: 'Bolos',
    descricao: 'Bolo macio de limão com cobertura leve e toque cítrico.',
    imagem: 'https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '14',
    nome: 'Cupcake de Chocolate',
    preco: 8.00,
    categoria: 'Bolos',
    descricao: 'Cupcake de chocolate com cobertura cremosa e raspas de chocolate.',
    imagem: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '15',
    nome: 'Bolo de Coco Gelado',
    preco: 12.00,
    categoria: 'Bolos',
    descricao: 'Fatia de bolo fofinho de coco, molhadinha e coberta com coco ralado.',
    imagem: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '16',
    nome: 'Bolo de Fubá com Goiabada',
    preco: 10.00,
    categoria: 'Bolos',
    descricao: 'Bolo caseiro de fubá com pedaços doces de goiabada.',
    imagem: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '17',
    nome: 'Torta de Morango',
    preco: 18.00,
    categoria: 'Bolos',
    descricao: 'Fatia de torta com creme suave, morangos frescos e massa crocante.',
    imagem: 'https://images.unsplash.com/photo-1464195244916-405fa0a82545?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '18',
    nome: 'Brownie com Nozes',
    preco: 9.00,
    categoria: 'Bolos',
    descricao: 'Brownie de chocolate com interior macio e pedaços de nozes.',
    imagem: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '19',
    nome: 'Brigadeiro Tradicional',
    preco: 4.00,
    categoria: 'Chocolates',
    descricao: 'Brigadeiro clássico de chocolate coberto com granulado.',
    imagem: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '20',
    nome: 'Bombom de Morango',
    preco: 7.00,
    categoria: 'Chocolates',
    descricao: 'Morango envolto em creme e coberto com chocolate.',
    imagem: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '21',
    nome: 'Trufa de Chocolate Branco',
    preco: 8.00,
    categoria: 'Chocolates',
    descricao: 'Trufa delicada de chocolate branco com recheio cremoso.',
    imagem: 'https://images.unsplash.com/photo-1548907040-4d42bfcf8f38?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '22',
    nome: 'Chocolate Meio Amargo',
    preco: 10.00,
    categoria: 'Chocolates',
    descricao: 'Tablete artesanal de chocolate meio amargo com sabor intenso.',
    imagem: 'https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '23',
    nome: 'Copinho de Ganache',
    preco: 6.00,
    categoria: 'Chocolates',
    descricao: 'Porção individual de ganache cremosa com raspas de chocolate.',
    imagem: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '24',
    nome: 'Alfajor com Doce de Leite',
    preco: 9.00,
    categoria: 'Chocolates',
    descricao: 'Biscoitos macios recheados com doce de leite e cobertos com chocolate.',
    imagem: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '25',
    nome: 'Coração de Chocolate',
    preco: 12.00,
    categoria: 'Chocolates',
    descricao: 'Chocolate artesanal em formato de coração, perfeito para presentear.',
    imagem: 'https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '26',
    nome: 'Sorvete de Chocolate',
    preco: 9.00,
    categoria: 'Gelados',
    descricao: 'Sorvete cremoso de chocolate servido em uma porção individual.',
    imagem: 'https://images.unsplash.com/photo-1501446529957-6226bd447c46?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '27',
    nome: 'Sorvete de Morango',
    preco: 9.00,
    categoria: 'Gelados',
    descricao: 'Sorvete refrescante de morango feito para adoçar o seu dia.',
    imagem: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '28',
    nome: 'Açaí com Granola',
    preco: 14.00,
    categoria: 'Gelados',
    descricao: 'Açaí gelado acompanhado de granola crocante e banana.',
    imagem: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '29',
    nome: 'Picolé de Limão',
    preco: 6.00,
    categoria: 'Gelados',
    descricao: 'Picolé de limão refrescante, com sabor cítrico e leve.',
    imagem: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '30',
    nome: 'Milkshake de Morango',
    preco: 14.00,
    categoria: 'Gelados',
    descricao: 'Milkshake gelado de morango batido até ficar bem cremoso.',
    imagem: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '31',
    nome: 'Sundae com Calda',
    preco: 12.00,
    categoria: 'Gelados',
    descricao: 'Sorvete com calda de chocolate, chantilly e confeitos.',
    imagem: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '32',
    nome: 'Frozen Yogurt com Frutas',
    preco: 13.00,
    categoria: 'Gelados',
    descricao: 'Iogurte gelado servido com frutas frescas da estação.',
    imagem: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '33',
    nome: 'Banana Split',
    preco: 16.00,
    categoria: 'Gelados',
    descricao: 'Banana com bolas de sorvete, calda de chocolate e chantilly.',
    imagem: 'https://images.unsplash.com/photo-1501446529957-6226bd447c46?q=80&w=400&auto=format&fit=crop',
  },
];

export default function Home({ navigation }) {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos');

  // Filtrar doces por categoria
  const docesFiltrados = categoriaSelecionada === 'Todos' 
    ? DOCES 
    : DOCES.filter(doce => doce.categoria === categoriaSelecionada);

  const renderDoce = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imagem }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.nome}</Text>
        <Text style={styles.cardPrice}>R$ {Number(item.preco).toFixed(2)}</Text>
        
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
      {/* Cabeçalho */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>🍭 Loja de Doces 🍬</Text>
          <Text style={styles.headerSubtitle}>Escolha suas guloseimas favoritas!</Text>
        </View>
        <TouchableOpacity 
          style={styles.cartButton}
          onPress={() => navigation.navigate('Carrinho')}
        >
          <Text style={styles.cartButtonText}>🛒</Text>
        </TouchableOpacity>
      </View>

      {/* Categorias (Filtros) */}
      <View style={styles.categoryContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {CATEGORIAS.map((cat, index) => (
            <TouchableOpacity 
              key={index} 
              style={[
                styles.categoryChip, 
                categoriaSelecionada === cat && styles.categoryChipActive
              ]}
              onPress={() => setCategoriaSelecionada(cat)}
            >
              <Text style={[
                styles.categoryText, 
                categoriaSelecionada === cat && styles.categoryTextActive
              ]}>
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Lista de Doces */}
      <FlatList
        data={docesFiltrados}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D81B60',
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#4A4A4A',
    marginTop: 2,
  },
  cartButton: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 50,
    elevation: 2,
  },
  cartButtonText: {
    fontSize: 20,
  },
  categoryContainer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#FFF',
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#FFD1DC',
  },
  categoryChipActive: {
    backgroundColor: '#FF8DA1',
    borderColor: '#FF8DA1',
  },
  categoryText: {
    color: '#666',
    fontWeight: '600',
  },
  categoryTextActive: {
    color: '#FFF',
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
    height: 150,
  },
  cardContent: {
    padding: 14,
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
    marginVertical: 4,
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
    fontSize: 14,
  },
});
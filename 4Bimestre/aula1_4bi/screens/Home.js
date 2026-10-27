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
    imagem: 'https://static.wixstatic.com/media/a4aa51_8c2b5eb9f7f84a3ca77e06de9488313a~mv2.jpg/v1/fill/w_720,h_480,al_c,lg_1,q_80/a4aa51_8c2b5eb9f7f84a3ca77e06de9488313a~mv2.jpg',
  },
  {
    id: '2',
    nome: 'Donut de Mirtilo Azul',
    preco: 9.50,
    categoria: 'Bolos',
    descricao: 'Donut macio com confeitos coloridos e uma maravilhosa cobertura azul de mirtilo.',
    imagem: 'https://i.pinimg.com/564x/8e/cb/2b/8ecb2bfbe64c41dd2edd75d20c58a132.jpg',
  },
  {
    id: '3',
    nome: 'Macarons Sortidos',
    preco: 18.00,
    categoria: 'Chocolates',
    descricao: 'Caixa com 4 macarons artesanais franceses nos sabores morango, baunilha e blueberry.',
    imagem: 'https://lovefoodfeed.com/wp-content/uploads/2023/01/Macarons-px-1200-01-1.jpg',
  },
  {
    id: '4',
    nome: 'Bolo de Aniversário Rosa',
    preco: 45.00,
    categoria: 'Bolos',
    descricao: 'Fatia de bolo com camadas recheadas de creme e confeitado em tons pastel.',
    imagem: 'https://static.wixstatic.com/media/cede00_c80fd173e48140a99b470a214a9e50b5~mv2.jpg/v1/fill/w_980,h_1470,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cede00_c80fd173e48140a99b470a214a9e50b5~mv2.jpg',
  },
  {
    id: '5',
    nome: 'Sorvete Azul Blue Ice',
    preco: '10.00',
    categoria: 'Gelados',
    descricao: 'Sorvete cremoso sabor tutti-frutti com calda azul vibrante e confeitos.',
    imagem: 'https://davipan.cdn.magazord.com.br/img/2025/05/produto/912/12.png?ims=600x600',
  },
  {
    id: '6',
    nome: 'Brigadeiro Gourmet Rosa',
    preco: '5.00',
    categoria: 'Chocolates',
    descricao: 'Brigadeiro cremoso de chocolate branco com essência de morango e confeitos especiais.',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFdK42ciRJ9BGBQxQ-ZVTsQ_magRfFgwI8vaiYRilOL5vksIGLYc69wC01&s=10',
  },
  {
    id: '7',
    nome: 'Bolo de Cenoura com Chocolate',
    preco: 14.00,
    categoria: 'Bolos',
    descricao: 'Bolo de cenoura fofinho coberto com uma generosa camada de calda de chocolate.',
    imagem: 'https://ncavalhieri.com/wp-content/uploads/2021/08/bolo-de-cenoura-com-calda-de-brigadeiro_NATHALIACAVALHIERI-2.jpg',
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
    imagem: 'https://pubimg.band.com.br/files/f5922c565218182fae76.png',
  },
  {
    id: '10',
    nome: 'Bolo de Chocolate com Avelã',
    preco: 11.00,
    categoria: 'Chocolates',
    descricao: 'Chocolate ao leite com pedaços crocantes de avelã.',
    imagem: 'https://storage.googleapis.com/imagens_videos_gou_cooking_prod/production/cooking/3wapogQE7qJBaW48SFCwBU8yrqsAE7jATS2vzJg3.jpeg',
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
    imagem: 'https://thumbs.dreamstime.com/b/o-milk-shake-da-baunilha-com-chantiliy-e-polvilha-73538062.jpg',
  },
  {
    id: '13',
    nome: 'Bolo de Limão',
    preco: 15.00,
    categoria: 'Bolos',
    descricao: 'Bolo macio de limão com cobertura leve e toque cítrico.',
    imagem: 'https://i0.wp.com/comidinhasdochef.com/wp-content/uploads/2018/12/Bolo-Lim%C3%A3o-Fofinho.jpg?fit=650%2C650&ssl=1',
  },
  {
    id: '14',
    nome: 'Cupcake de Chocolate',
    preco: 8.00,
    categoria: 'Bolos',
    descricao: 'Cupcake de chocolate com cobertura cremosa e raspas de chocolate.',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5NLDtYD13N5bAV_Ci5K7rqxIiWZxPr36InOX_w2u82mETasJ2V5sBC_w&s=10',
  },
  {
    id: '15',
    nome: 'Bolo de Coco Gelado',
    preco: 12.00,
    categoria: 'Bolos',
    descricao: 'Fatia de bolo fofinho de coco, molhadinha e coberta com coco ralado.',
    imagem: 'https://sabordivino.com.br/r2/images/KCD5dNSNiZMIM6fhYyCmliJ524PbNpOmX9z0hhRY.webp',
  },
  {
    id: '16',
    nome: 'Bolo de Fubá com Goiabada',
    preco: 10.00,
    categoria: 'Bolos',
    descricao: 'Bolo caseiro de fubá com pedaços doces de goiabada.',
    imagem: 'https://areademulher.r7.com/wp-content/uploads/2019/08/confira-duas-receitas-de-dar-agua-na-boca-de-bolo-de-fuba-com-goiabada-3.jpg',
  },
  {
    id: '17',
    nome: 'Torta de Morango',
    preco: 18.00,
    categoria: 'Bolos',
    descricao: 'Fatia de torta com creme suave, morangos frescos e massa crocante.',
    imagem: 'https://conteudo.imguol.com.br/c/entretenimento/86/2020/09/25/torta-de-morango-1601050530119_v2_1x1.jpg',
  },
  {
    id: '18',
    nome: 'Brownie com Nozes',
    preco: 9.00,
    categoria: 'Bolos',
    descricao: 'Brownie de chocolate com interior macio e pedaços de nozes.',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfT9eo_qxdXv8rVx4-BBN_zulOjaB0Bz2vJwGcVsIqsbgMwk5OFCy0KKU&s=10',
  },
  {
    id: '19',
    nome: 'Brigadeiro Tradicional',
    preco: 4.00,
    categoria: 'Chocolates',
    descricao: 'Brigadeiro clássico de chocolate coberto com granulado.',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_35rQ6urNIBS-4wBn-HNv7z-3GM0AZmEsMl_Hyko9UCBi5P2G8i1gY0RX&s=10',
  },
  {
    id: '20',
    nome: 'Bombom de Morango',
    preco: 7.00,
    categoria: 'Chocolates',
    descricao: 'Morango envolto em creme e coberto com chocolate.',
    imagem: 'https://receitatodahora.com.br/wp-content/uploads/2025/08/bombom-de-morango-04-08.jpeg',
  },
  {
    id: '21',
    nome: 'Trufa de Chocolate Branco',
    preco: 8.00,
    categoria: 'Chocolates',
    descricao: 'Trufa delicada de chocolate branco com recheio cremoso.',
    imagem: 'https://i.pinimg.com/736x/6d/4b/2d/6d4b2d2283474c7723ebf579cacd3407.jpg',
  },
  {
    id: '22',
    nome: '',
    preco: 10.00,
    categoria: 'Chocolates',
    descricao: 'Tablete artesanal de chocolate meio amargo com sabor intenso.',
    imagem: '',
  },
  {
    id: '23',
    nome: 'Copinho de Ganache',
    preco: 6.00,
    categoria: 'Chocolates',
    descricao: 'Porção individual de ganache cremosa com raspas de chocolate.',
    imagem: 'https://i.pinimg.com/474x/d0/cb/1a/d0cb1ab2222008e1fd0265dd81d63cce.jpg',
  },
  {
    id: '24',
    nome: 'Alfajor com Doce de Leite',
    preco: 9.00,
    categoria: 'Chocolates',
    descricao: 'Biscoitos macios recheados com doce de leite e cobertos com chocolate.',
    imagem: 'https://i.ytimg.com/vi/-kCxCMae-xk/sddefault.jpg',
  },
  {
    id: '25',
    nome: 'Coração de Chocolate',
    preco: 12.00,
    categoria: 'Chocolates',
    descricao: 'Chocolate artesanal em formato de coração, perfeito para presentear.',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkH6sxgsyglbloaG3AfOcMn9PcRk0J52-WkccFQablCc9fqdWs73-D9ACz&s=10',
  },
  {
    id: '26',
    nome: 'Sorvete de Chocolate',
    preco: 9.00,
    categoria: 'Gelados',
    descricao: 'Sorvete cremoso de chocolate servido em uma porção individual.',
    imagem: 'https://blog.gsuplementos.com.br/wp-content/uploads/2020/11/iStock-1173381958.jpg',
  },
  {
    id: '27',
    nome: 'Sorvete de Morango',
    preco: 9.00,
    categoria: 'Gelados',
    descricao: 'Sorvete refrescante de morango feito para adoçar o seu dia.',
    imagem: 'https://www.receitasnestle.com.br/sites/default/files/srh_recipes/a8ab002875c44a0a45943803c4485507.jpg',
  },
  {
    id: '28',
    nome: 'Açaí com Granola',
    preco: 14.00,
    categoria: 'Gelados',
    descricao: 'Açaí gelado acompanhado de granola crocante e banana.',
    imagem: 'https://swiftbr.vteximg.com.br/arquivos/617247-acai_1.jpg?v=638727402397800000',
  },
  {
    id: '29',
    nome: 'Picolé de Limão',
    preco: 6.00,
    categoria: 'Gelados',
    descricao: 'Picolé de limão refrescante, com sabor cítrico e leve.',
    imagem: 'https://s2-receitas.glbimg.com/fKCppysz3FTfNtwEGUfgmRIFmWA=/0x0:6000x4000/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2021/K/v/j0EE8VRKa7kWkztxhKHw/picole-de-limao.jpg',
  },
  {
    id: '30',
    nome: 'Milkshake de Morango',
    preco: 14.00,
    categoria: 'Gelados',
    descricao: 'Milkshake gelado de morango batido até ficar bem cremoso.',
    imagem: 'https://www.receiteria.com.br/wp-content/uploads/milkshake-de-morango-0.jpg',
  },
  {
    id: '31',
    nome: 'Sundae com Calda',
    preco: 12.00,
    categoria: 'Gelados',
    descricao: 'Sorvete com calda de chocolate, chantilly e confeitos.',
    imagem: 'https://polosulsc.com.br/wp-content/webp-express/webp-images/uploads/2018/08/Sundaes-para-vender-mais-1.jpg.webp',
  },
  {
    id: '32',
    nome: 'Frozen Yogurt com Frutas',
    preco: 13.00,
    categoria: 'Gelados',
    descricao: 'Iogurte gelado servido com frutas frescas da estação.',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB9qDoKbtjS-7WGtpA7a5-r63Altc5puOGdDr8B_PMLF0oCx_ZMKfyLZQ&s=10',
  },
  {
    id: '33',
    nome: 'Banana Split',
    preco: 16.00,
    categoria: 'Gelados',
    descricao: 'Banana com bolas de sorvete, calda de chocolate e chantilly.',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUWNNYfLQAUmkiA2Nq_NYf4zSj8SoWev0fOHFGrKZXDFa1iwQb4GCEeMjl&s=10',
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
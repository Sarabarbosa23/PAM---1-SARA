import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export default function Home({ navigation, route }) {
  const usuario = route.params?.usuario || {};
  const [termoPesquisa, setTermoPesquisa] = useState('');

  const listaPersonagens = [
    {
      id: '1',
      nome: 'Frankie Stein',
      tipo: 'Monstro de Frankenstein',
      descricao:
        'Criada em laboratório, Frankie tem apenas 15 dias de idade quando entra na escola. É bondosa, otimista e às vezes solta um parafuso (literalmente).',
      imagem:
        'https://th.bing.com/th/id/OIP.CmYQlcpMA3AQWlQuX2oqBgHaLf?w=186&h=289&c=7&r=0&o=7&dpr=1.7&pid=1.7&rm=3',
    },
    {
      id: '2',
      nome: 'Draculaura',
      tipo: 'Vampira (Vegetariana)',
      descricao:
        "Filha do Conde Drácula. Tem 1600 anos, ama a cor rosa e é vegetariana — desmaia ao ouvir a palavra 'carne' ou ver sangue.",
      imagem:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjmAxA2Qs5bySU5T1kZ1KrmFBsemY50BHpHAVE3B0R-4OMX56_VIRPdY8&s=10',
    },
    {
      id: '3',
      nome: 'Clawdeen Wolf',
      tipo: 'Lobisomem',
      descricao:
        'Filha do Lobisomem. Apaixonada por moda, feroz, confiante e extremamente leal às suas amigas. Tem uma família gigantesca.',
      imagem:
        'https://i.pinimg.com/736x/62/b2/45/62b2454e377093d6f15256f542d2dd4a.jpg',
    },
    {
      id: '4',
      nome: 'Cleo de Nile',
      tipo: 'Múmia',
      descricao:
        'Filha da Múmia e princesa do Egito. Comanda as líderes de torcida e aparenta ser mandona, mas protege profundamente suas amigas.',
      imagem:
        'https://i.pinimg.com/736x/df/61/6e/df616e5b2e30d9d7bd78d54c5794f0b8.jpg',
    },
  ];

  const filmes = [
    { id: '1', titulo: 'O Monstro de Nova York', ano: '2010' },
    { id: '2', titulo: 'Choque de Cultura: Vampiros vs Lobisomens', ano: '2011' },
    { id: '3', titulo: '13 Desejos', ano: '2013' },
    { id: '4', titulo: 'Festa de Horror em Scaris', ano: '2013' },
    { id: '5', titulo: 'Fusão Monstruosa', ano: '2014' },
    { id: '6', titulo: 'Assustada de Novo', ano: '2015' },
  ];

  // Filtra personagens pelo termo de pesquisa
  const personagensFiltrados = listaPersonagens.filter((p) =>
    p.nome.toLowerCase().includes(termoPesquisa.toLowerCase())
  );

  const renderPersonagem = ({ item }) => (
    <View style={styles.characterCard}>
      <Image source={{ uri: item.imagem }} style={styles.characterImage} />
      <View style={styles.characterBody}>
        <Text style={styles.characterName}>{item.nome}</Text>
        <View style={styles.tag}>
          <Text style={styles.tagText}>{item.tipo}</Text>
        </View>
        <Text style={styles.characterDescription}>{item.descricao}</Text>
      </View>
    </View>
  );

  const renderFilme = ({ item }) => (
    <View style={styles.seasonCard}>
      <View style={styles.seasonNumber}>
        <Text style={styles.seasonNumberText}>#{item.id}</Text>
      </View>
      <View style={styles.seasonInfo}>
        <Text style={styles.seasonName}>{item.titulo}</Text>
        <Text style={styles.seasonEpisodes}>Ano: {item.ano}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* CABEÇALHO */}
        <View style={styles.headerContainer}>
          <View style={styles.headerTop}>
            <View style={styles.logoArea}>
              <Text style={styles.logoSymbol}>☠️</Text>
              <View>
                <Text style={styles.logoTitle}>MONSTER HIGH</Text>
                <Text style={styles.logoSubtitle}>
                  WIKIPÉDIA FREAKY FABULOUS
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.profileBadge}
              onPress={() => navigation.navigate('Perfil', { usuario })}
            >
              <Text style={styles.profileBadgeText}>
                👤 {usuario?.nome ? usuario.nome.split(' ')[0] : 'Monstrinho'}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.searchBarContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Pesquisar alunas..."
              placeholderTextColor="#666666"
              value={termoPesquisa}
              onChangeText={setTermoPesquisa}
            />
            <TouchableOpacity style={styles.searchButton}>
              <Text style={styles.searchButtonText}>🔍</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* HERO */}
        <View style={styles.hero}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/pt/e/e5/MonsterHigh_Characters.png',
            }}
            style={styles.heroImage}
          />
          <View style={styles.heroOverlay}>
            <Text style={styles.heroTitle}>BEM-VINDO A MONSTER HIGH</Text>
            <Text style={styles.heroText}>
              A maior enciclopédia sobre o universo dos monstros.
            </Text>
          </View>
        </View>

        {/* VISÃO GERAL */}
        <View style={styles.content}>
          <Text style={styles.articleTitle}>Visão Geral de Monster High</Text>
          <Text style={styles.articleText}>
            Monster High é uma escola onde os filhos de monstros famosos
            frequentam aulas, expressam seus estilos únicos e aprendem a abraçar
            suas imperfeições sob o lema "Seja você mesmo, seja único, seja um
            monstro!".
          </Text>
        </View>

        {/* PERSONAGENS COM FLATLIST */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ESTUDANTES DESTACADOS</Text>

          <FlatList
            data={personagensFiltrados}
            keyExtractor={(item) => item.id}
            renderItem={renderPersonagem}
            scrollEnabled={false}
            ListEmptyComponent={
              <Text style={styles.emptyText}>
                Nenhuma aluna encontrada ☠️
              </Text>
            }
          />
        </View>

        {/* ESCOLA */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>O COLÉGIO MONSTER HIGH</Text>

          <View style={styles.infoBox}>
            <Text style={styles.locationName}>
              📍 O Creepateria (Refeitório)
            </Text>
            <Text style={styles.locationDescription}>
              Onde todos os estudantes se reúnem no almoço.
            </Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.locationName}>📍 As Catacumbas</Text>
            <Text style={styles.locationDescription}>
              Um labirinto gigante localizado abaixo do colégio.
            </Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.locationName}>
              📍 Campo de Susto-Corrente
            </Text>
            <Text style={styles.locationDescription}>
              Onde as equipes esportivas da escola treinam.
            </Text>
          </View>
        </View>

        {/* FILMES COM FLATLIST */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>FILMES E ESPECIAIS</Text>

          <FlatList
            data={filmes}
            keyExtractor={(item) => item.id}
            renderItem={renderFilme}
            scrollEnabled={false}
          />
        </View>

        {/* BOTÕES */}
        <View style={styles.botao}>
          <TouchableOpacity
            style={styles.pinkButton}
            onPress={() => navigation.navigate('Perfil', { usuario })}
          >
            <Text style={styles.pinkButtonText}>Ver Perfil ☠️</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.botao}>
          <TouchableOpacity
            style={[styles.pinkButton, { backgroundColor: '#a30052' }]}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.pinkButtonText}>Sair</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0d0a12' },

  // Cabeçalho
  headerContainer: {
    backgroundColor: '#2a1b3d',
    borderBottomWidth: 1,
    borderBottomColor: '#4a235a',
    paddingTop: 10,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  logoArea: { flexDirection: 'row', alignItems: 'center' },
  logoSymbol: { fontSize: 22, marginRight: 8 },
  logoTitle: {
    color: '#ff007f',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  },
  logoSubtitle: { color: '#b3b3b3', fontSize: 9, letterSpacing: 1 },
  profileBadge: {
    backgroundColor: '#1f172d',
    borderWidth: 1,
    borderColor: '#a30052',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  profileBadgeText: {
    color: '#ff66b2',
    fontSize: 12,
    fontWeight: 'bold',
  },
  searchBarContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    height: 38,
    backgroundColor: '#15101f',
    borderWidth: 1,
    borderColor: '#4a235a',
    color: '#ffffff',
    paddingHorizontal: 10,
    fontSize: 12,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  searchButton: {
    width: 45,
    height: 38,
    backgroundColor: '#a30052',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  searchButtonText: { color: '#ffffff', fontSize: 14 },

  // Hero
  hero: { height: 180, position: 'relative' },
  heroImage: { width: '100%', height: '100%' },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(13, 10, 18, 0.75)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  heroTitle: { color: '#ff007f', fontSize: 22, fontWeight: 'bold' },
  heroText: {
    color: '#ff66b2',
    fontSize: 13,
    marginTop: 5,
    textAlign: 'center',
  },

  // Conteúdo
  content: { padding: 15 },
  articleTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  articleText: { color: '#b3b3b3', fontSize: 14, lineHeight: 20 },

  // Seções
  section: { padding: 15 },
  sectionTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    letterSpacing: 1,
  },

  // Personagens
  characterCard: {
    backgroundColor: '#1f172d',
    borderWidth: 1,
    borderColor: '#4a235a',
    marginBottom: 15,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  characterImage: { width: 100, height: 130 },
  characterBody: { flex: 1, padding: 12 },
  characterName: { color: '#ffffff', fontSize: 16, fontWeight: 'bold' },
  tag: {
    backgroundColor: '#a30052',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 3,
    marginVertical: 6,
  },
  tagText: { color: '#ffffff', fontSize: 10, fontWeight: 'bold' },
  characterDescription: { color: '#b3b3b3', fontSize: 12, lineHeight: 16 },
  emptyText: {
    color: '#666666',
    fontSize: 13,
    textAlign: 'center',
    padding: 20,
  },

  // Escola
  infoBox: {
    backgroundColor: '#1f172d',
    borderWidth: 1,
    borderColor: '#4a235a',
    padding: 15,
    marginBottom: 10,
  },
  locationName: { color: '#ffffff', fontWeight: 'bold', fontSize: 14 },
  locationDescription: { color: '#b3b3b3', fontSize: 12, marginTop: 2 },

  // Filmes
  seasonCard: {
    backgroundColor: '#1f172d',
    borderWidth: 1,
    borderColor: '#4a235a',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
  },
  seasonNumber: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#a30052',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  seasonNumberText: { color: '#ffffff', fontWeight: 'bold', fontSize: 14 },
  seasonInfo: { flex: 1 },
  seasonName: { color: '#ffffff', fontWeight: 'bold', fontSize: 15 },
  seasonEpisodes: { color: '#b3b3b3', fontSize: 12, marginTop: 2 },

  // Botões
  botao: { paddingHorizontal: 15, marginTop: 10 },
  pinkButton: {
    backgroundColor: '#ff007f',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginBottom: 10,
  },
  pinkButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 1,
  },
});
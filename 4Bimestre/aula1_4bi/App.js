import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
  StatusBar,
  Alert,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// === TEMA DE CORES (Monster High Style) ===
const COLORS = {
  background: "#0d0a12", // Fundo super escuro (estilo gótico/gloom)
  panel: "#161120",      // Painel principal
  panelDark: "#1f172d",  // Painel secundário
  header: "#2a1b3d",     // Cabeçalho
  border: "#4a235a",     // Borda roxa
  pink: "#ff007f",       // Rosa choque / Magenta
  pinkDark: "#a30052",   // Rosa escuro
  pinkLight: "#ff66b2",  // Rosa claro
  purple: "#8e44ad",     // Roxo Monster High
  white: "#ffffff",
  gray: "#b3b3b3",
  grayDark: "#666666",
};

// === COMPONENTE DE CABEÇALHO DA WIKI ===
const WikiHeader = ({ navigation, usuario, termoPesquisa, setTermoPesquisa }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerTop}>
        <View style={styles.logoArea}>
          <Text style={styles.logoSymbol}>☠️</Text>
          <View>
            <Text style={styles.logoTitle}>MONSTER HIGH</Text>
            <Text style={styles.logoSubtitle}>WIKIPÉDIA FREAKY FABULOUS</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.profileBadge}
          onPress={() => navigation.navigate("Perfil", { usuario })}
        >
          <Text style={styles.profileBadgeText}>
            👤 {usuario?.nome ? usuario.nome.split(" ")[0] : "Monstrinho"}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar alunas, monstros, aulas..."
          placeholderTextColor={COLORS.grayDark}
          value={termoPesquisa}
          onChangeText={setTermoPesquisa}
        />
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => navigation.navigate("Personagens")}
        >
          <Text style={styles.searchButtonText}>🔍</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.navBar}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Inicio", { usuario })}
        >
          <Text style={styles.navText}>INÍCIO</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Personagens")}
        >
          <Text style={styles.navText}>ALUNOS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Salem")}
        >
          <Text style={styles.navText}>A ESCOLA</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Temporadas")}
        >
          <Text style={styles.navText}>FILMES/SERIES</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// === TELA 1: LOGIN ===
function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    if (!email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos para entrar em Monster High.");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      Alert.alert("Erro", "Digite um e-mail válido.");
      return;
    }

    // Navega para o Perfil
    navigation.navigate("Perfil", {
      usuario: { email },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      <ScrollView contentContainerStyle={styles.loginScroll}>
        <View style={styles.loginCard}>
          <Text style={styles.loginLogo}>☠️</Text>
          <Text style={styles.loginTitle}>MONSTER HIGH</Text>
          <Text style={styles.loginSubtitle}>
            Acesse o arquivo assustadoramente fabuloso
          </Text>

          <View style={styles.formGroup}>
            <Text style={styles.label}>E-MAIL DO ESTUDANTE</Text>
            <TextInput
              style={styles.input}
              placeholder="ex: frankie@monsterhigh.com"
              placeholderTextColor={COLORS.grayDark}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>SENHA SECRETA</Text>
            <TextInput
              style={styles.input}
              placeholder="••••••••"
              placeholderTextColor={COLORS.grayDark}
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
            />
          </View>

          <TouchableOpacity style={styles.pinkButton} onPress={handleLogin}>
            <Text style={styles.pinkButtonText}>ENTRAR EM MONSTER HIGH</Text>
          </TouchableOpacity>

          <Text style={styles.footerText}>
            Seja você mesmo, seja único, seja um monstro.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// === TELA 2: COMPLEMENTO DE PERFIL ===
function PerfilScreen({ navigation, route }) {
  const usuarioExistente = route.params?.usuario || {};

  const [nome, setNome] = useState(usuarioExistente.nome || "");
  const [idade, setIdade] = useState(usuarioExistente.idade || "");
  const [personagemFavorito, setPersonagemFavorito] = useState(
    usuarioExistente.personagemFavorito || ""
  );
  const [biografia, setBiografia] = useState(usuarioExistente.biografia || "");

  const handleSalvarPerfil = () => {
    if (!nome || !idade || !personagemFavorito) {
      Alert.alert("Campos obrigatórios", "Por favor, preencha nome, idade e seu monstro favorito.");
      return;
    }

    const numIdade = parseInt(idade, 10);
    if (isNaN(numIdade) || numIdade < 10 || numIdade > 2000) {
      Alert.alert("Idade inválida", "Digite uma idade válida de monstro.");
      return;
    }

    const usuarioAtualizado = {
      ...usuarioExistente,
      nome,
      idade,
      personagemFavorito,
      biografia,
    };

    navigation.navigate("Inicio", { usuario: usuarioAtualizado });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.profileContainer}>
        <View style={styles.loginCard}>
          <Text style={styles.loginTitle}>CARTEIRINHA ESCOLAR</Text>
          <Text style={styles.loginSubtitle}>
            Complete sua inscrição para ter acesso total aos arquivos da escola
          </Text>

          <View style={styles.formGroup}>
            <Text style={styles.label}>NOME COMPLETO</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: Draculaura"
              placeholderTextColor={COLORS.grayDark}
              value={nome}
              onChangeText={setNome}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>IDADE (EM ANOS OU SÉCULOS)</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: 1600"
              placeholderTextColor={COLORS.grayDark}
              value={idade}
              onChangeText={setIdade}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>MONSTRO FAVORITO</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: Clawdeen Wolf, Frankie Stein..."
              placeholderTextColor={COLORS.grayDark}
              value={personagemFavorito}
              onChangeText={setPersonagemFavorito}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>SOBRE VOCÊ / DEFEITO PERFEITO</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Conte um pouco sobre suas peculiaridades monstruosas..."
              placeholderTextColor={COLORS.grayDark}
              value={biografia}
              onChangeText={setBiografia}
              multiline
              numberOfLines={3}
            />
          </View>

          <TouchableOpacity style={styles.pinkButton} onPress={handleSalvarPerfil}>
            <Text style={styles.pinkButtonText}>SALVAR E IR PARA O INÍCIO</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// === TELA 3: INÍCIO (HOMEPAGE DA WIKI) ===
function InicioScreen({ navigation, route }) {
  const usuario = route.params?.usuario || {};
  const [termoPesquisa, setTermoPesquisa] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <WikiHeader
        navigation={navigation}
        usuario={usuario}
        termoPesquisa={termoPesquisa}
        setTermoPesquisa={setTermoPesquisa}
      />

      <ScrollView contentContainerStyle={styles.mainContainer}>
        {/* HERO SECTION */}
        <View style={styles.hero}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=1000",
            }}
            style={styles.heroImage}
          />
          <View style={styles.heroOverlay}>
            <Text style={styles.heroTitle}>BEM-VINDO A MONSTER HIGH</Text>
            <Text style={styles.heroText}>
              A maior enciclopédia sobre o universo dos monstros e seres mitológicos.
            </Text>
          </View>
        </View>

        {/* ARTIGO EM DESTAQUE */}
        <View style={styles.content}>
          <View style={styles.article}>
            <Text style={styles.articleTitle}>Visão Geral de Monster High</Text>
            <Text style={styles.articleText}>
              Monster High é uma escola de ensino médio onde os filhos de monstros famosos
              frequentam aulas, expressam seus estilos únicos e aprendem a abraçar suas
              imperfeições sob o lema "Seja você mesmo, seja único, seja um monstro!".
            </Text>
          </View>

          {/* CAIXA LATERAL ESTILO WIKI */}
          <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>NAVEGAÇÃO RÁPIDA</Text>
            <Text style={styles.infoText}>
              Explore dados sobre alunas, turmas e misteriosos segredos katacúmbicos.
            </Text>

            <TouchableOpacity
              style={styles.wikiLink}
              onPress={() => navigation.navigate("Personagens")}
            >
              <Text style={styles.wikiLinkText}>➔ Ver Coleção de Alunos</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.wikiLink}
              onPress={() => navigation.navigate("Salem")}
            >
              <Text style={styles.wikiLinkText}>➔ Explorar o Colégio</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.wikiLink}
              onPress={() => navigation.navigate("Temporadas")}
            >
              <Text style={styles.wikiLinkText}>➔ Guia de Filmes e Séries</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.wikiLink}
              onPress={() =>
                navigation.navigate("Erro", {
                  mensagem: "Seção de Livros Bloqueada por Névoa Katacúmbica!",
                })
              }
            >
              <Text style={styles.wikiLinkText}>➔ Livros e HQs (Erro)</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* CARACTERÍSTICAS PRINCIPAIS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>TÓPICOS PRINCIPAIS</Text>
          <View style={styles.highlightGrid}>
            <View style={styles.highlight}>
              <Text style={styles.highlightIcon}>🎀</Text>
              <Text style={styles.highlightTitle}>Freaky Fabulous</Text>
              <Text style={styles.highlightText}>
                Moda, estilo único e expressão sem medo de ser diferente.
              </Text>
            </View>

            <View style={styles.highlight}>
              <Text style={styles.highlightIcon}>🦇</Text>
              <Text style={styles.highlightTitle}>Linhagens Monstruosas</Text>
              <Text style={styles.highlightText}>
                Lobisomens, Vampiros, Fantasmas, Zumbis, Múmias e Górgonas.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// === TELA 4: LISTA DE PERSONAGENS ===
function PersonagensScreen({ navigation, route }) {
  const usuario = route.params?.usuario;
  const [termoPesquisa, setTermoPesquisa] = useState("");

  const listaPersonagens = [
    {
      id: "1",
      nome: "Frankie Stein",
      tipo: "Monstro de Frankenstein",
      descricao:
        "Criada em laboratório, Frankie tem apenas 15 dias de idade quando entra na escola. É bondosa, otimista e às vezes solta um parafuso (literalmente).",
      imagem: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400",
    },
    {
      id: "2",
      nome: "Draculaura",
      tipo: "Vampira (Vegetariana)",
      descricao:
        "Filha do Conde Drácula. Tem 1600 anos, ama a cor rosa e é vegetariana — desmaia ao ouvir a palavra 'carne' ou ver sangue.",
      imagem: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=400",
    },
    {
      id: "3",
      nome: "Clawdeen Wolf",
      tipo: "Lobisomem",
      descricao:
        "Filha do Lobisomem. Apaixonada por moda, feroz, confiante e extremamente leal às suas amigas. Tem uma família gigantesca.",
      imagem: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=400",
    },
    {
      id: "4",
      nome: "Cleo de Nile",
      tipo: "Múmia",
      descricao:
        "Filha da Múmia e princesa do Egito. Comanda as líderes de torcida e aparenta ser mandona, mas protege profundamente suas amigas.",
      imagem: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=400",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <WikiHeader
        navigation={navigation}
        usuario={usuario}
        termoPesquisa={termoPesquisa}
        setTermoPesquisa={setTermoPesquisa}
      />

      <ScrollView contentContainerStyle={styles.characterList}>
        <View style={styles.pageHeading}>
          <Text style={styles.pageHeadingTitle}>Estudantes Destacados</Text>
          <Text style={styles.pageHeadingText}>
            Confira a ficha dos monstros mais populares do campus
          </Text>
        </View>

        {listaPersonagens.map((item) => (
          <View key={item.id} style={styles.characterCard}>
            <Image source={{ uri: item.imagem }} style={styles.characterImage} />
            <View style={styles.characterBody}>
              <Text style={styles.characterName}>{item.nome}</Text>
              <View style={styles.tag}>
                <Text style={styles.tagText}>{item.tipo}</Text>
              </View>
              <Text style={styles.characterDescription}>{item.descricao}</Text>

              <TouchableOpacity
                style={styles.smallButton}
                onPress={() =>
                  navigation.navigate("Erro", {
                    mensagem: `Detalhes estendidos de ${item.nome} requerem permissão do Conselho Escolar!`,
                  })
                }
              >
                <Text style={styles.smallButtonText}>Ver Ficha Completa ➔</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

// === TELA 5: SOBRE A ESCOLA ===
function SalemScreen({ navigation, route }) {
  const usuario = route.params?.usuario;
  const [termoPesquisa, setTermoPesquisa] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <WikiHeader
        navigation={navigation}
        usuario={usuario}
        termoPesquisa={termoPesquisa}
        setTermoPesquisa={setTermoPesquisa}
      />

      <ScrollView contentContainerStyle={styles.articlePage}>
        <View style={styles.articleHeader}>
          <Text style={styles.articlePageTitle}>O Colégio Monster High</Text>
          <Text style={styles.articlePageSubtitle}>
            Um refúgio para monstros de todos os cantos do mundo
          </Text>
        </View>

        <View style={styles.wikiArticleBox}>
          <Text style={styles.articleSectionTitle}>LOCAIS FASCINANTES</Text>

          <View style={styles.locationItem}>
            <Text style={styles.locationName}>📍 O Creepateria (Refeitório)</Text>
            <Text style={styles.locationDescription}>
              Onde todos os estudantes se reúnem no almoço. Servindo desde saladas
              frescas até Gororoba Monstruosa.
            </Text>
          </View>

          <View style={styles.locationItem}>
            <Text style={styles.locationName}>📍 As Catacumbas</Text>
            <Text style={styles.locationDescription}>
              Um labirinto gigante localizado abaixo do colégio. Repleto de segredos
              antigos, mistérios e salas secretas.
            </Text>
          </View>

          <View style={styles.locationItem}>
            <Text style={styles.locationName}>📍 Campo de Susto-Corrente</Text>
            <Text style={styles.locationDescription}>
              Onde as equipes esportivas da escola treinam para as competições regionais
              contra colégios rivais.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// === TELA 6: TEMPORADAS / FILMES ===
function TemporadasScreen({ navigation, route }) {
  const usuario = route.params?.usuario;
  const [termoPesquisa, setTermoPesquisa] = useState("");

  const filmes = [
    { id: "1", titulo: "O Monstro de Nova York", ano: "2010" },
    { id: "2", titulo: "Choque de Cultura: Vampiros vs Lobisomens", ano: "2011" },
    { id: "3", titulo: "13 Desejos", ano: "2013" },
    { id: "4", titulo: "Festa de Horror em Scaris", ano: "2013" },
    { id: "5", titulo: "Fusão Monstruosa", ano: "2014" },
    { id: "6", titulo: "Assustada de Novo", ano: "2015" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <WikiHeader
        navigation={navigation}
        usuario={usuario}
        termoPesquisa={termoPesquisa}
        setTermoPesquisa={setTermoPesquisa}
      />

      <ScrollView contentContainerStyle={styles.seasonList}>
        <View style={styles.pageHeading}>
          <Text style={styles.pageHeadingTitle}>Filmes e Especiais</Text>
          <Text style={styles.pageHeadingText}>
            Principais produções cinematográficas do universo Monster High
          </Text>
        </View>

        {filmes.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.seasonCard}
            onPress={() =>
              navigation.navigate("Erro", {
                mensagem: `O filme "${item.titulo}" está indisponível nos arquivos secretos no momento.`,
              })
            }
          >
            <View style={styles.seasonNumber}>
              <Text style={styles.seasonNumberText}>#{item.id}</Text>
            </View>
            <View style={styles.seasonInfo}>
              <Text style={styles.seasonName}>{item.titulo}</Text>
              <Text style={styles.seasonEpisodes}>Ano de Lançamento: {item.ano}</Text>
            </View>
            <Text style={styles.arrow}>➔</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

// === TELA 7: ERRO / ROTA NÃO ENCONTRADA ===
function ErroScreen({ navigation, route }) {
  const mensagem = route.params?.mensagem || "Caminho não encontrado no arquivo escolar!";

  return (
    <SafeAreaView style={styles.errorPage}>
      <Text style={styles.errorIcon}>☠️</Text>
      <Text style={styles.errorTitle}>ERRO MONSTRUOSO</Text>
      <View style={styles.errorBox}>
        <Text style={styles.errorMessage}>{mensagem}</Text>
      </View>

      <TouchableOpacity
        style={styles.pinkButton}
        onPress={() => navigation.navigate("Inicio")}
      >
        <Text style={styles.pinkButtonText}>VOLTAR PARA O INÍCIO</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// === NAVEGAÇÃO PRINCIPAL (STACK) ===
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Perfil" component={PerfilScreen} />
        <Stack.Screen name="Inicio" component={InicioScreen} />
        <Stack.Screen name="Personagens" component={PersonagensScreen} />
        <Stack.Screen name="Salem" component={SalemScreen} />
        <Stack.Screen name="Temporadas" component={TemporadasScreen} />
        <Stack.Screen name="Erro" component={ErroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// === ESTILOS (STYLESHEET) ===
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  loginScroll: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },
  loginCard: {
    backgroundColor: COLORS.panel,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 20,
    borderRadius: 8,
  },
  loginLogo: {
    fontSize: 40,
    textAlign: "center",
    marginBottom: 5,
  },
  loginTitle: {
    color: COLORS.pink,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 2,
  },
  loginSubtitle: {
    color: COLORS.gray,
    fontSize: 12,
    textAlign: "center",
    marginBottom: 25,
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    color: COLORS.pinkLight,
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 5,
    letterSpacing: 1,
  },
  input: {
    height: 45,
    backgroundColor: "#15101f",
    borderWidth: 1,
    borderColor: COLORS.border,
    color: COLORS.white,
    paddingHorizontal: 12,
    fontSize: 14,
    borderRadius: 4,
  },
  textArea: {
    height: 90,
    textAlignVertical: "top",
    paddingTop: 10,
  },
  pinkButton: {
    backgroundColor: COLORS.pink,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 4,
  },
  pinkButtonText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 14,
    letterSpacing: 1,
  },
  footerText: {
    color: COLORS.grayDark,
    fontSize: 12,
    textAlign: "center",
    marginTop: 20,
  },
  headerContainer: {
    backgroundColor: COLORS.header,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    paddingTop: 10,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  logoArea: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoSymbol: {
    fontSize: 22,
    marginRight: 8,
  },
  logoTitle: {
    color: COLORS.pink,
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 1,
  },
  logoSubtitle: {
    color: COLORS.gray,
    fontSize: 9,
    letterSpacing: 1,
  },
  profileBadge: {
    backgroundColor: COLORS.panelDark,
    borderWidth: 1,
    borderColor: COLORS.pinkDark,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  profileBadgeText: {
    color: COLORS.pinkLight,
    fontSize: 12,
    fontWeight: "bold",
  },
  searchBarContainer: {
    flexDirection: "row",
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    height: 38,
    backgroundColor: "#15101f",
    borderWidth: 1,
    borderColor: COLORS.border,
    color: COLORS.white,
    paddingHorizontal: 10,
    fontSize: 12,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  searchButton: {
    width: 45,
    height: 38,
    backgroundColor: COLORS.pinkDark,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  searchButtonText: {
    color: COLORS.white,
    fontSize: 14,
  },
  navBar: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  navItem: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
  },
  navText: {
    color: COLORS.pinkLight,
    fontSize: 10,
    fontWeight: "bold",
  },
  profileContainer: {
    paddingBottom: 40,
  },
  mainContainer: {
    paddingBottom: 40,
  },
  hero: {
    height: 180,
    position: "relative",
  },
  heroImage: {
    width: "100%",
    height: "100%",
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(13, 10, 18, 0.75)",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  heroTitle: {
    color: COLORS.pink,
    fontSize: 22,
    fontWeight: "bold",
  },
  heroText: {
    color: COLORS.pinkLight,
    fontSize: 13,
    marginTop: 5,
    textAlign: "center",
  },
  content: {
    padding: 15,
  },
  article: {
    marginBottom: 20,
  },
  articleTitle: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  articleText: {
    color: COLORS.gray,
    fontSize: 14,
    lineHeight: 20,
  },
  infoBox: {
    backgroundColor: COLORS.panel,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 15,
  },
  infoTitle: {
    color: COLORS.pink,
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 5,
  },
  infoText: {
    color: COLORS.gray,
    fontSize: 12,
    marginBottom: 15,
  },
  wikiLink: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  wikiLinkText: {
    color: COLORS.pinkLight,
    fontSize: 14,
  },
  section: {
    padding: 15,
  },
  sectionTitle: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
    letterSpacing: 1,
  },
  highlightGrid: {
    gap: 12,
  },
  highlight: {
    backgroundColor: COLORS.panelDark,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 15,
  },
  highlightIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  highlightTitle: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 5,
  },
  highlightText: {
    color: COLORS.gray,
    fontSize: 12,
  },
  characterList: {
    padding: 15,
  },
  pageHeading: {
    marginBottom: 20,
  },
  pageHeadingTitle: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: "bold",
  },
  pageHeadingText: {
    color: COLORS.gray,
    fontSize: 13,
    marginTop: 4,
  },
  characterCard: {
    backgroundColor: COLORS.panelDark,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 15,
    flexDirection: "row",
    overflow: "hidden",
  },
  characterImage: {
    width: 100,
    height: 130,
  },
  characterBody: {
    flex: 1,
    padding: 12,
  },
  characterName: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  tag: {
    backgroundColor: COLORS.pinkDark,
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 3,
    marginVertical: 6,
  },
  tagText: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: "bold",
  },
  characterDescription: {
    color: COLORS.gray,
    fontSize: 12,
    lineHeight: 16,
  },
  smallButton: {
    marginTop: 10,
    alignSelf: "flex-start",
  },
  smallButtonText: {
    color: COLORS.pinkLight,
    fontSize: 11,
    fontWeight: "bold",
  },
  articlePage: {
    paddingBottom: 30,
  },
  articleHeader: {
    padding: 20,
    backgroundColor: COLORS.header,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  articlePageTitle: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: "bold",
  },
  articlePageSubtitle: {
    color: COLORS.gray,
    fontSize: 12,
    marginTop: 4,
  },
  wikiArticleBox: {
    margin: 15,
    backgroundColor: COLORS.panelDark,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 15,
  },
  articleSectionTitle: {
    color: COLORS.pink,
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 10,
    letterSpacing: 1,
  },
  locationItem: {
    marginBottom: 12,
  },
  locationName: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 14,
  },
  locationDescription: {
    color: COLORS.gray,
    fontSize: 12,
    marginTop: 2,
  },
  seasonList: {
    padding: 15,
  },
  seasonCard: {
    backgroundColor: COLORS.panelDark,
    borderWidth: 1,
    borderColor: COLORS.border,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginBottom: 10,
  },
  seasonNumber: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.pinkDark,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  seasonNumberText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 14,
  },
  seasonInfo: {
    flex: 1,
  },
  seasonName: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 15,
  },
  seasonEpisodes: {
    color: COLORS.gray,
    fontSize: 12,
    marginTop: 2,
  },
  arrow: {
    color: COLORS.gray,
    fontSize: 20,
  },
  errorPage: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  errorIcon: {
    fontSize: 48,
    marginBottom: 10,
  },
  errorTitle: {
    color: COLORS.pink,
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  errorBox: {
    backgroundColor: COLORS.panelDark,
    borderWidth: 1,
    borderColor: COLORS.pink,
    padding: 15,
    marginVertical: 20,
    width: "100%",
    maxWidth: 400,
  },
  errorMessage: {
    color: COLORS.white,
    fontSize: 14,
    textAlign: "center",
  },
});
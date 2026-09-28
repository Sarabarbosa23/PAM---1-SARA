import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
  FlatList,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// ==========================================
// 1. TELA DE LOGIN
// ==========================================
function LoginScreen({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (usuario.trim() !== '' && senha.trim() !== '') {
      Alert.alert('Bem-vinda a Monster High!', `Olá, ${usuario}!`);
      navigation.replace('Home', { nomeUsuario: usuario });
    } else {
      Alert.alert('Aviso', 'Por favor, preencha o nome e a senha!');
    }
  };

  return (
    <View style={styles.loginContainer}>
      <StatusBar style="light" />
      <Text style={styles.loginTitle}>MONSTER HIGH </Text>
      <Text style={styles.loginSubtitle}>Faça login para acessar a escola</Text>

      <Image
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/pt/e/e5/MonsterHigh_Characters.png?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original',
        }}
        style={styles.logoImage}
      />

      <View style={styles.inputCard}>
        <Text style={styles.inputLabel}>Nome Mostruoso :</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Ex: Frankie Stein"
          placeholderTextColor="#A8A8A8"
          value={usuario}
          onChangeText={setUsuario}
        />

        <Text style={styles.inputLabel}>Senha Secreta:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="••••••••"
          placeholderTextColor="#A8A8A8"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity style={styles.primaryButton} onPress={handleLogin}>
          <Text style={styles.primaryButtonText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// ==========================================
// 2. TELA PRINCIPAL (HOME & INTERAÇÕES)
// ==========================================
function HomeScreen({ route, navigation }) {
  const nomeUsuario = route.params?.nomeUsuario || 'Monstro';

  const [showDetails, setShowDetails] = useState(false);
  const [displayText, setDisplayText] = useState(
    'Clique nos botões abaixo para explorar o universo de Monster High!'
  );
  const [currentImage, setCurrentImage] = useState(
    'https://static.wikia.nocookie.net/international-entertainment-project/images/c/cf/Monster_High_%282010%29_poster.jpg/revision/latest/scale-to-width-down/1200?cb=20250719013433'
  );
  const [inputText, setInputText] = useState('');
  const [submittedText, setSubmittedText] = useState('');

  const showInfo = (info, imageUrl) => {
    setDisplayText(info);
    setCurrentImage(imageUrl);
    setShowDetails(false);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
    if (!showDetails) {
      setDisplayText('📖 Informações detalhadas sobre Monster High!');
      setCurrentImage(
        'https://static.wikia.nocookie.net/monsterhigh/images/d/d7/Monster_High_G1_logo.png'
      );
    } else {
      setDisplayText(
        'Clique nos botões abaixo para explorar o universo de Monster High!'
      );
    }
  };

  const handleSubmit = () => {
    if (inputText.trim()) {
      setSubmittedText(inputText);
      Alert.alert('Recado Enviado!', `Você publicou no mural: ${inputText}`);
      setInputText('');
    } else {
      Alert.alert('Aviso', 'Por favor, digite algum recado para o mural!');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="light" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>MONSTER HIGH</Text>
        <Text style={styles.userGreeting}>Bem-vinda, {nomeUsuario}!</Text>
      </View>

      {/* Imagem Principal */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: currentImage }} style={styles.mainImage} />
      </View>

      {/* Caixa de Informação Dinâmica */}
      <View style={styles.textContainer}>
        <Text style={styles.infoText}>{displayText}</Text>

        <TouchableOpacity style={styles.vejaMaisButton} onPress={toggleDetails}>
          <Text style={styles.vejaMaisText}>
            {showDetails ? '🔽 Ver menos' : '📚 Ver segredos da escola'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Detalhes Expansíveis */}
      {showDetails && (
        <View style={styles.detailsContainer}>
          <View style={styles.detailSection}>
            <Text style={styles.detailTitle}>🏰 A Escola Monster High</Text>
            <Text style={styles.detailText}>
              Monster High é uma escola secundária para monstros onde filhos e
              filhas de criaturas famosas estudam juntos. O lema da escola é "Seja
              você mesma, seja única, seja um monstro!".
            </Text>
          </View>

          <View style={styles.detailSection}>
            <Text style={styles.detailTitle}>🦇 Frankie Stein e Draculaura</Text>
            <Text style={styles.detailText}>
              Frankie Stein é a filha do Monstro de Frankenstein, conhecida por seu
              estilo costurado e otimismo. Draculaura é a filha do Conde Drácula, uma
              vampira vegetariana apaixonada por rosa!
            </Text>
          </View>
        </View>
      )}

      {/* Formulário / TextInput */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>✏️ Deixe seu recado no Mural da Escola:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Escreva algo monstruoso..."
          placeholderTextColor="#A8A8A8"
          value={inputText}
          onChangeText={setInputText}
          multiline={true}
          numberOfLines={3}
        />

        <View style={styles.buttonWrapper}>
          <Button
            title="Publicar no Mural"
            color="#FF007F"
            onPress={handleSubmit}
          />
        </View>

        {submittedText ? (
          <View style={styles.submittedContainer}>
            <Text style={styles.submittedLabel}>💌 Seu recado no mural:</Text>
            <Text style={styles.submittedText}>"{submittedText}"</Text>
          </View>
        ) : null}
      </View>

      {/* Botões Temáticos de Informação */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.buttonPink]}
          onPress={() =>
            showInfo(
              'Draculaura é a filha do Conde Drácula! Ela é vegana, adora a cor rosa e não consome sangue.',
              'https://static.wikia.nocookie.net/tudo-sobre-monster-high/images/a/a0/Draculaura.png/revision/latest/scale-to-width-down/300?cb=20131222192548&path-prefix=pt-br'
            )
          }
        >
          <Text style={styles.buttonText}>💖 Draculaura</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.buttonPurple]}
          onPress={() =>
            showInfo(
              'Clawdeen Wolf é a filha do Lobisomem! Ela é apaixonada por moda, super estilosa e leal às suas amigas.',
              'https://static.wikia.nocookie.net/monsterhigh/images/2/25/Clawdeen_basic.png/revision/latest?cb=20200528181001&path-prefix=pt-br'
            )
          }
        >
          <Text style={styles.buttonText}>💜 Clawdeen Wolf</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.buttonBlack]}
          onPress={() =>
            showInfo(
              'Frankie Stein é a filha do Frankenstein! Ela é feita de peças montadas e tem uma energia eletrizante.',
              'https://static.wikia.nocookie.net/mhuniverse/images/3/38/Frankie_Stein_profile_art.png/revision/latest/thumbnail/width/360/height/360?cb=20200808181333'
            )
          }
        >
          <Text style={styles.buttonText}>⚡ Frankie Stein</Text>
        </TouchableOpacity>
      </View>

      {/* Navegação para a Lista de Personagens */}
      <TouchableOpacity
        style={styles.listNavigationButton}
        onPress={() => navigation.navigate('Personagens')}
      >
        <Text style={styles.listNavigationButtonText}>
          📋 VER LISTA DE ALUNOS (FLATLIST) ➔
        </Text>
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Seja você mesma. Seja única. Seja monstruoso! 💖
        </Text>
      </View>
    </ScrollView>
  );
}

// ==========================================
// 3. TELA DE LISTA DE PERSONAGENS (FLATLIST)
// ==========================================
function CharactersScreen() {
  const personagens = [
    {
      id: '1',
      nome: 'Draculaura',
      pai: 'Conde Drácula',
      estilo: 'Gótico Lolita Rosa',
      imagem: 'https://static.wikia.nocookie.net/monster-high/images/b/ba/Draculaura%E2%84%A2.png/revision/latest?cb=20260330201957&path-prefix=pt-br',
    },
    {
      id: '2',
      nome: 'Clawdeen Wolf',
      pai: 'Lobisomem',
      estilo: 'Fashionista Audaciosa',
      imagem: 'https://static.wikia.nocookie.net/monsterhigh/images/2/25/Clawdeen_basic.png/revision/latest?cb=20200528181001&path-prefix=pt-br',
    },
    {
      id: '3',
      nome: 'Frankie Stein',
      pai: 'Monstro de Frankenstein',
      estilo: 'Xadrez & Costuras Neon',
      imagem: 'https://static.wikia.nocookie.net/monsterhigh/images/b/bd/Frankie_Basic.png/revision/latest?cb=20200616205416&path-prefix=pt-br',
    },
    {
      id: '4',
      nome: 'Cleo de Nile',
      pai: 'A Múmia',
      estilo: 'Acessórios Dourados & Ataduras',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLPdmS-r25QLwWhOX6OY0hSRCc1F3IES0t_5Gga8zLaHiLdKRIXOfFS_WC&s=10',
    },
    {
      id: '5',
      nome: 'Lagoona Blue',
      pai: 'Monstro do Mar',
      estilo: 'Surfista Subaquática',
      imagem: 'https://static.wikia.nocookie.net/monsterhigh/images/3/38/Lagoona_basic.png/revision/latest?cb=20200531235449&path-prefix=pt-br',
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>🧟‍♀️ Alunos Registrados 🧟‍♂️</Text>

      <FlatList
        data={personagens}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.cardItem}>
            <Image source={{ uri: item.imagem }} style={styles.cardImage} />
            <View style={styles.cardInfo}>
              <Text style={styles.cardName}>{item.nome}</Text>
              <Text style={styles.cardSub}>Monstro: {item.pai}</Text>
              <Text style={styles.cardStyle}>Estilo: {item.estilo}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

// ==========================================
// NAVEGADOR PRINCIPAL (STACK NAVIGATOR)
// ==========================================
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: '#121212' },
          headerTintColor: '#FF007F',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Início - Monster High' }}
        />
        <Stack.Screen
          name="Personagens"
          component={CharactersScreen}
          options={{ title: 'Lista de Personagens' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// ==========================================
// ESTILOS (CORES: PRETO, ROSA CHOQUE, ROXO)
// ==========================================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 10,
  },
  loginContainer: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loginTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF007F',
    marginBottom: 5,
    textAlign: 'center',
  },
  loginSubtitle: {
    fontSize: 14,
    color: '#BD00FF',
    marginBottom: 20,
  },
  logoImage: {
    width: 220,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  inputCard: {
    width: '100%',
    backgroundColor: '#1E1E1E',
    padding: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#BD00FF',
  },
  header: {
    backgroundColor: '#1E1E1E',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FF007F',
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF007F',
    textAlign: 'center',
  },
  userGreeting: {
    fontSize: 14,
    color: '#BD00FF',
    fontWeight: '600',
    marginTop: 4,
  },
  imageContainer: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#1E1E1E',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#BD00FF',
    marginBottom: 10,
  },
  mainImage: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  textContainer: {
    padding: 15,
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FF007F',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 15,
    textAlign: 'center',
    color: '#FFFFFF',
    lineHeight: 22,
    marginBottom: 10,
  },
  vejaMaisButton: {
    backgroundColor: '#BD00FF',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  vejaMaisText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  detailsContainer: {
    backgroundColor: '#1E1E1E',
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#BD00FF',
    marginBottom: 10,
  },
  detailSection: {
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
    paddingBottom: 8,
  },
  detailTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF007F',
    marginBottom: 4,
  },
  detailText: {
    fontSize: 14,
    color: '#CCCCCC',
    lineHeight: 20,
  },
  inputContainer: {
    backgroundColor: '#1E1E1E',
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FF007F',
    marginBottom: 10,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF007F',
    marginBottom: 6,
  },
  textInput: {
    backgroundColor: '#2A2A2A',
    borderWidth: 1,
    borderColor: '#BD00FF',
    borderRadius: 8,
    padding: 10,
    fontSize: 15,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  buttonWrapper: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  submittedContainer: {
    marginTop: 12,
    padding: 10,
    backgroundColor: '#2A2A2A',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#BD00FF',
  },
  submittedLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FF007F',
  },
  submittedText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontStyle: 'italic',
    marginTop: 2,
  },
  buttonContainer: {
    gap: 8,
    marginBottom: 10,
  },
  button: {
    padding: 12,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonPink: {
    backgroundColor: '#FF007F',
  },
  buttonPurple: {
    backgroundColor: '#BD00FF',
  },
  buttonBlack: {
    backgroundColor: '#2A2A2A',
    borderWidth: 1,
    borderColor: '#FF007F',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  primaryButton: {
    backgroundColor: '#FF007F',
    padding: 14,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  listNavigationButton: {
    backgroundColor: '#BD00FF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#FF007F',
  },
  listNavigationButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  cardItem: {
    flexDirection: 'row',
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    padding: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#BD00FF',
    alignItems: 'center',
  },
  cardImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#FF007F',
  },
  cardInfo: {
    marginLeft: 15,
    flex: 1,
  },
  cardName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF007F',
  },
  cardSub: {
    fontSize: 14,
    color: '#BD00FF',
    marginTop: 2,
  },
  cardStyle: {
    fontSize: 12,
    color: '#CCCCCC',
    marginTop: 2,
  },
  footer: {
    backgroundColor: '#1E1E1E',
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#BD00FF',
  },
  footerText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FF007F',
  },
});
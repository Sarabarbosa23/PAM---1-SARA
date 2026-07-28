import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  // Estados para controlar o que é exibido
  const [showDetails, setShowDetails] = useState(false);
  const [displayText, setDisplayText] = useState('Clique nos botões para saber mais sobre o Bob Esponja!');
  const [currentImage, setCurrentImage] = useState('https://cinemacao.com/wp-content/uploads/2016/12/bob-esponja-3-1130x590.jpg');

  // Função para mostrar informações
  const showInfo = (info, imageUrl) => {
    setDisplayText(info);
    setCurrentImage(imageUrl);
    setShowDetails(false); // Esconde detalhes extras quando clicar em outro botão
  };

  // Função para alternar "Veja Mais"
  const toggleDetails = () => {
    setShowDetails(!showDetails);
    if (!showDetails) {
      setDisplayText('📖 Informações completas sobre o Bob Esponja!');
      setCurrentImage('https://cinemacao.com/wp-content/uploads/2016/12/bob-esponja-3-1130x590.jpg');
    } else {
      setDisplayText('Clique nos botões para saber mais sobre o Bob Esponja!');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      
      {/* Título */}
      <View style={styles.header}>
        <Text style={styles.title}>🌟 Bob Esponja Calça Quadrada 🌟</Text>
      </View>

      {/* Imagem Principal */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: currentImage }}
          style={styles.mainImage}
        />
      </View>

      {/* Área de texto dinâmico */}
      <View style={styles.textContainer}>
        <Text style={styles.infoText}>{displayText}</Text>
        
        {/* Botão Veja Mais */}
        <TouchableOpacity 
          style={styles.vejaMaisButton}
          onPress={toggleDetails}
        >
          <Text style={styles.vejaMaisText}>
            {showDetails ? '🔽 Ver menos' : '📚 Veja mais'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Conteúdo extra quando "Veja Mais" é ativado */}
      {showDetails && (
        <View style={styles.detailsContainer}>
          <View style={styles.detailSection}>
            <Text style={styles.detailTitle}>🏖️ A Fenda do Biquíni</Text>
            <Text style={styles.detailText}>
              A Fenda do Biquíni é uma cidade subaquática fictícia onde vive Bob Esponja e seus amigos. 
              Localizada no fundo do Oceano Pacífico, embaixo do Atol de Biquíni (daí seu nome), 
              a cidade é conhecida por suas construções em forma de bolhas e por ser o lar do 
              famoso Siri Cascudo. A Fenda do Biquíni é um lugar vibrante e cheio de vida, 
              onde acontecem todas as aventuras da série!
            </Text>
          </View>

          <View style={styles.detailSection}>
            <Text style={styles.detailTitle}>⭐ Patrick Estrela - O Melhor Amigo</Text>
            <Text style={styles.detailText}>
              Patrick Estrela é o melhor amigo de Bob Esponja. Uma estrela-do-mar rosa, 
              Patrick é conhecido por ser um pouco lerdo e ingênuo, mas tem um coração enorme 
              e é extremamente leal. Ele mora debaixo de uma pedra na Fenda do Biquíni e 
              adora passar o tempo com Bob, seja caçando águas-vivas, jogando bolhas ou 
              apenas relaxando. Apesar de sua falta de inteligência, Patrick sempre está 
              presente para ajudar seu amigo quando ele mais precisa.
            </Text>
          </View>

          <View style={styles.detailSection}>
            <Text style={styles.detailTitle}>🍔 O Siri Cascudo e o Trabalho do Bob</Text>
            <Text style={styles.detailText}>
              O Siri Cascudo é o restaurante mais famoso da Fenda do Biquíni, e Bob Esponja 
              trabalha lá como cozinheiro. Seu trabalho é fazer os famosos Hambúrgueres de Siri, 
              que são tão deliciosos que os clientes viajam de longe para experimentá-los. 
              Bob adora seu trabalho e faz os hambúrgueres com muito amor e dedicação. 
              Seu chefe é o Sr. Siriguejo, um caranguejo extremamente econômico que adora 
              dinheiro. Bob também trabalha com seu colega Lula Molusco, que é o caixa do 
              restaurante.
            </Text>
          </View>
        </View>
      )}

      {/* Botões de informação rápida */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.buttonBlue]}
          onPress={() => showInfo(
            'Bob Esponja é um personagem fictício e protagonista da série animada homônima. Criado por Stephen Hillenburg em 1996, ele vive na Fenda do Biquíni e trabalha no Siri Cascudo como cozinheiro.',
            'https://th.bing.com/th/id/OIP.99reDgnm2wBZrU4OnzyiHQHaHZ?w=159&h=180&c=7&r=0&o=7&dpr=1.7&pid=1.7&rm=3'
          )}
        >
          <Text style={styles.buttonText}>📖 Quem é Bob?</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.buttonYellow]}
          onPress={() => showInfo(
            'Bob Esponja tem 36 anos (nascido em 14 de julho de 1986). É uma esponja do mar amarela, alegre e otimista que adora fazer hambúrgueres de siri!',
            'https://th.bing.com/th/id/OIP.AAJEJUjTjHEHAwEEn0GCUQHaHZ?w=187&h=186&c=7&r=0&o=7&dpr=1.7&pid=1.7&rm=3'
          )}
        >
          <Text style={styles.buttonText}>🎂 Idade e Características</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.buttonPink]}
          onPress={() => showInfo(
            'Stephen Hillenburg, biólogo marinho e cartunista, criou Bob Esponja em 1996. A série estreou em 1º de maio de 1999 e se tornou um fenômeno mundial!',
            'data:image/webp;base64,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'
          )}
        >
          <Text style={styles.buttonText}>🎨 Criação do Personagem</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.buttonGreen]}
          onPress={() => showInfo(
            'O nome original é SpongeBob SquarePants. No Brasil é conhecido como Bob Esponja Calça Quadrada. Seu nome foi inspirado em uma tira cômica chamada "Bob, a Esponja"',
            'https://th.bing.com/th/id/OIP.bM_6-cEZf9Jct5KHkiAIGgHaFy?w=245&h=192&c=7&r=0&o=7&dpr=1.7&pid=1.7&rm=3'
           )}
        >
          <Text style={styles.buttonText}>🌍 Curiosidades</Text>
        </TouchableOpacity>
      </View>

      {/* Grid de imagens extras */}
      <View style={styles.imageGrid}>
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/OIP.hiYEBVT8oZ2fOPi69wuTywHaHa?w=177&h=180&c=7&r=0&o=7&dpr=1.7&pid=1.7&rm=3'}}
          style={styles.gridImage}
        />
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/OIP.luppkEMAyqmzHBeuj5c-cwHaFj?w=237&h=180&c=7&r=0&o=7&dpr=1.7&pid=1.7&rm=3'  }}
          style={styles.gridImage}
        />
      </View>

      {/* Rodapé */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Feito com 💛 para fãs do Bob Esponja!</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD700',
  },
  header: {
    backgroundColor: '#FFA500',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#FF6B00',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  imageContainer: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFE44D',
    marginHorizontal: 10,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#FF6B00',
  },
  mainImage: {
    width: 350,
    height: 250,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#FF6B00',
  },
  textContainer: {
    padding: 20,
    backgroundColor: '#FFFACD',
    margin: 10,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#FF6B00',
    minHeight: 100,
  },
  infoText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    lineHeight: 24,
    fontWeight: '500',
    marginBottom: 15,
  },
  vejaMaisButton: {
    backgroundColor: '#FF6B00',
    padding: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 5,
  },
  vejaMaisText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailsContainer: {
    backgroundColor: '#FFFACD',
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#FF6B00',
    marginBottom: 10,
  },
  detailSection: {
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#FFD700',
  },
  detailTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6B00',
    marginBottom: 8,
  },
  detailText: {
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
    textAlign: 'justify',
  },
  buttonContainer: {
    padding: 10,
    gap: 10,
  },
  button: {
    padding: 15,
    borderRadius: 25,
    marginVertical: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonBlue: {
    backgroundColor: '#4169E1',
  },
  buttonYellow: {
    backgroundColor: '#FFD700',
  },
  buttonPink: {
    backgroundColor: '#FF69B4',
  },
  buttonGreen: {
    backgroundColor: '#32CD32',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  imageGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    marginTop: 10,
    backgroundColor: '#FFE44D',
    marginHorizontal: 10,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#FF6B00',
  },
  gridImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#FF6B00',
  },
  footer: {
    backgroundColor: '#FFA500',
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
    borderTopWidth: 3,
    borderTopColor: '#FF6B00',
  },
  footerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput, Button, Alert } from 'react-native';
import { useState } from 'react';

export default function App() {
 
  const [showDetails, setShowDetails] = useState(false);
  const [displayText, setDisplayText] = useState('Clique nos botões para saber mais sobre o Bob Esponja!');
  const [currentImage, setCurrentImage] = useState('https://th.bing.com/th/id/OIP.IVGQ18-smD1gApr-TYCOhgHaHZ?w=159&h=180&c=7&r=0&o=7&dpr=1.7&pid=1.7&rm=3');
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
      setDisplayText('📖 Informações completas sobre o Bob Esponja!');
      setCurrentImage('https://i.pinimg.com/1200x/a7/4e/f4/a74ef443a10ebcd23b0e9f693406bf7a.jpg');
    } else {
      setDisplayText('Clique nos botões para saber mais sobre o Bob Esponja!');
    }
  };

  
  const handleSubmit = () => {
    if (inputText.trim()) {
      setSubmittedText(inputText);
      Alert.alert('Mensagem enviada!', `Você disse: ${inputText}`);
      setInputText('');
    } else {
      Alert.alert('Aviso', 'Por favor, digite algo sobre o Bob Esponja!');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      
     
      <View style={styles.header}>
        <Text style={styles.title}>🌟 Bob Esponja Calça Quadrada 🌟</Text>
      </View>

      
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: currentImage }}
          style={styles.mainImage}
        />
      </View>

      
      <View style={styles.textContainer}>
        <Text style={styles.infoText}>{displayText}</Text>
        
        
        <TouchableOpacity 
          style={styles.vejaMaisButton}
          onPress={toggleDetails}
        >
          <Text style={styles.vejaMaisText}>
            {showDetails ? '🔽 Ver menos' : '📚 Veja mais'}
          </Text>
        </TouchableOpacity>
      </View>

      
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

      
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>✏️ Deixe sua mensagem sobre o Bob Esponja:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Digite algo sobre o Bob Esponja..."
          placeholderTextColor="#999"
          value={inputText}
          onChangeText={setInputText}
          multiline={true}
          numberOfLines={3}
        />
        
    
        <View style={styles.buttonWrapper}>
          <Button
            title="Enviar Mensagem"
            color="#FF6B00"
            onPress={handleSubmit}
          />
        </View>
        
        
        {submittedText ? (
          <View style={styles.submittedContainer}>
            <Text style={styles.submittedLabel}>📨 Sua mensagem:</Text>
            <Text style={styles.submittedText}>"{submittedText}"</Text>
          </View>
        ) : null}
      </View>

     
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
            'https://i.pinimg.com/1200x/3c/d4/16/3cd416723d83b74f12420c1f057676da.jpg'
          )}
        >
          <Text style={styles.buttonText}>🎂 Idade e Características</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.buttonPink]}
          onPress={() => showInfo(
            'Stephen Hillenburg, biólogo marinho e cartunista, criou Bob Esponja em 1996. A série estreou em 1º de maio de 1999 e se tornou um fenômeno mundial!',
            'https://i.pinimg.com/736x/f7/68/4a/f7684a4db6972affd83beedace83fb44.jpg'
          )}
        >
          <Text style={styles.buttonText}>🎨 Criação do Personagem</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.buttonGreen]}
          onPress={() => showInfo(
            'O nome original é SpongeBob SquarePants. No Brasil é conhecido como Bob Esponja Calça Quadrada. Seu nome foi inspirado em uma tira cômica chamada "Bob, a Esponja"',
            'https://i.pinimg.com/1200x/0d/b5/64/0db56472f806f11d7b56a4bf2f8e4eac.jpg'
          )}
        >
          <Text style={styles.buttonText}>🌍 Curiosidades</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.imageGrid}>
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/OIP.hiYEBVT8oZ2fOPi69wuTywHaHa?w=177&h=180&c=7&r=0&o=7&dpr=1.7&pid=1.7&rm=3'
          }}
          style={styles.gridImage}
        />
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/OIP.luppkEMAyqmzHBeuj5c-cwHaFj?w=237&h=180&c=7&r=0&o=7&dpr=1.7&pid=1.7&rm=3'
          }}
          style={styles.gridImage}
        />
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/OIP.IVGQ18-smD1gApr-TYCOhgHaHZ?w=159&h=180&c=7&r=0&o=7&dpr=1.7&pid=1.7&rm=3'
          }}
          style={styles.gridImage}
        />
      </View>

     
      <View style={styles.footer}>
        <Text style={styles.footerText}>Feito com amor para todos os fãs do Bob!</Text>
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
    resizeMode: 'contain',
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
  inputContainer: {
    backgroundColor: '#FFFACD',
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#FF6B00',
    marginBottom: 10,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#FFD700',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    minHeight: 80,
    textAlignVertical: 'top',
  },
  buttonWrapper: {
    marginTop: 10,
    borderRadius: 25,
    overflow: 'hidden',
  },
  submittedContainer: {
    marginTop: 15,
    padding: 12,
    backgroundColor: '#FFE44D',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FF6B00',
  },
  submittedLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  submittedText: {
    fontSize: 16,
    color: '#FF6B00',
    fontStyle: 'italic',
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
    flexWrap: 'wrap',
  },
  gridImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#FF6B00',
    margin: 5,
    resizeMode: 'contain',
    backgroundColor: '#FFFFFF',
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
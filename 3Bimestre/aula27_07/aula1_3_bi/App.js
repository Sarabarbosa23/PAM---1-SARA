

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, Button } from 'react-native';

export default function App() {
  return (
    <View>
      <Image 
        source={{
          uri: 'https://cinemacao.com/wp-content/uploads/2016/12/bob-esponja-3-1130x590.jpg',
        }}
        style={{width: 500, height: 500}}
      />
      <Text>Bob esponja!</Text>
      <Text> SpongeBob SquarePants (português europeu) ou Bob Esponja Calça Quadrada (português brasileiro) (14 de julho de 1986) é um personagem fictício e protagonista da série animada estadunidense homônima. O personagem é dublado em inglês pelo comediante Tom Kenny desde sua estreia juntamente com a série em 1 de maio de 1999.

Bob Esponja, como é conhecido no Brasil, foi criado e desenvolvido pelo cartunista e biólogo marinho Stephen Hillenburg em 1996 logo após a suspensão de Rocko's Modern Life. Hillenburg pretendia criar uma série sobre uma esponja marinha ingênua cujo otimismo acaba por irritar os demais personagens. 
O cartunista, então, comparou seu conceito aos trabalhados previamente em Laurel & Hardy e Pee-wee's Big Adventure, 
posteriormente alterando a aparência do personagem para uma esponja de cozinha. O nome do personagem é inspirado em "Bob, a Esponja", uma tira cômica criada por Hillenburg na década de 1980 para suas palestras no Instituto Oceânico de Dana Point.</Text>
      <TextInput placeholder='veja mais'/>
      <Button onPress={() => {}} />
    </View>
   
  );
}


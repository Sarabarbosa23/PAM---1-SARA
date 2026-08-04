import { View, Text, TextInput, Button, Image } from 'react-native';


export default function Login({ navigation }) {
  return (
    <View style={styles.container}>

      <Image
        source={{
          uri: 'https://raw.githubusercontent.com/github/explore/main/topics/strawberry/strawberry.png'
        }}
        style={styles.logo}
      />

      <Text style={styles.titulo}>🍓 Bem-vindo!</Text>
      <Text style={styles.subtitulo}>Faça login para continuar</Text>

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        placeholder="fulano@hotmail.com"
        style={styles.input}
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        placeholder="********"
        secureTextEntry
        style={styles.input}
      />

      <View style={styles.botao}>
        <Button
          title="Entrar 🍓"
          color="#E91E63"
          onPress={() => navigation.navigate('Home')}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE4EC',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },

  logo: {
    width: 180,
    height: 180,
    marginBottom: 20,
    borderRadius: 90,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#D81B60',
  },

  subtitulo: {
    fontSize: 16,
    color: '#4CAF50',
    marginBottom: 25,
  },

  label: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#C2185B',
    marginBottom: 5,
  },

  input: {
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 12,
    marginBottom: 18,
    borderWidth: 2,
    borderColor: '#F48FB1',
  },

  botao: {
    width: '100%',
    marginTop: 10,
  },
});


import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  atualizarPersonagem,
  criarPersonagem,
  excluirPersonagem,
  listarPersonagens,
} from '../firebase/personagensService';

export default function Personagens() {
  const [personagens, setPersonagens] = useState([]);
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');
  const [personagemEditando, setPersonagemEditando] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [salvando, setSalvando] = useState(false);

  async function carregarPersonagens() {
    try {
      setPersonagens(await listarPersonagens());
    } catch (erro) {
      Alert.alert('Erro ao consultar', erro.message);
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    carregarPersonagens();
  }, []);

  async function salvarPersonagem() {
    if (!nome.trim() || !tipo.trim()) {
      Alert.alert('Campos obrigatórios', 'Preencha o nome e o tipo.');
      return;
    }

    try {
      setSalvando(true);

      if (personagemEditando) {
        await atualizarPersonagem(personagemEditando.id, { nome, tipo });
      } else {
        await criarPersonagem({ nome, tipo });
      }

      setNome('');
      setTipo('');
      setPersonagemEditando(null);
      await carregarPersonagens();
    } catch (erro) {
      Alert.alert('Erro ao salvar', erro.message);
    } finally {
      setSalvando(false);
    }
  }

  function editarPersonagem(personagem) {
    setPersonagemEditando(personagem);
    setNome(personagem.nome);
    setTipo(personagem.tipo);
  }

  function confirmarExclusao(personagem) {
    Alert.alert(
      'Excluir personagem?',
      `Deseja excluir ${personagem.nome}?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: async () => {
            try {
              await excluirPersonagem(personagem.id);
              await carregarPersonagens();
            } catch (erro) {
              Alert.alert('Erro ao excluir', erro.message);
            }
          },
        },
      ]
    );
  }

  function cancelarEdicao() {
    setPersonagemEditando(null);
    setNome('');
    setTipo('');
  }

  function renderPersonagem({ item }) {
    return (
      <View style={styles.personagemItem}>
        <View style={styles.personagemInfo}>
          <Text style={styles.personagemNome}>{item.nome}</Text>
          <Text style={styles.personagemTipo}>{item.tipo}</Text>
        </View>
        <View style={styles.acoes}>
          <TouchableOpacity
            accessibilityRole="button"
            onPress={() => editarPersonagem(item)}
            style={styles.botaoEditar}
          >
            <Text style={styles.textoAcao}>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityRole="button"
            onPress={() => confirmarExclusao(item)}
            style={styles.botaoExcluir}
          >
            <Text style={styles.textoAcao}>Excluir</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.conteudo}>
        <Text style={styles.titulo}>PERSONAGENS</Text>
        <Text style={styles.subtitulo}>Cadastro conectado ao Firestore</Text>

        <View style={styles.formulario}>
          <Text style={styles.rotulo}>NOME</Text>
          <TextInput
            accessibilityLabel="Nome do personagem"
            style={styles.input}
            value={nome}
            onChangeText={setNome}
            placeholder="Ex.: Frankie Stein"
            placeholderTextColor="#8a8292"
          />

          <Text style={styles.rotulo}>TIPO</Text>
          <TextInput
            accessibilityLabel="Tipo do personagem"
            style={styles.input}
            value={tipo}
            onChangeText={setTipo}
            placeholder="Ex.: Frankenstein"
            placeholderTextColor="#8a8292"
          />

          <TouchableOpacity
            accessibilityRole="button"
            disabled={salvando}
            style={styles.botaoSalvar}
            onPress={salvarPersonagem}
          >
            <Text style={styles.textoBotao}>
              {salvando
                ? 'Salvando...'
                : personagemEditando
                  ? 'Atualizar personagem'
                  : 'Cadastrar personagem'}
            </Text>
          </TouchableOpacity>

          {personagemEditando && (
            <TouchableOpacity
              accessibilityRole="button"
              onPress={cancelarEdicao}
              style={styles.botaoCancelar}
            >
              <Text style={styles.textoCancelar}>Cancelar edição</Text>
            </TouchableOpacity>
          )}
        </View>

        <Text style={styles.tituloLista}>LISTA CADASTRADA</Text>
        {carregando ? (
          <ActivityIndicator color="#ff66b2" style={styles.carregando} />
        ) : (
          <FlatList
            data={personagens}
            keyExtractor={(item) => item.id}
            renderItem={renderPersonagem}
            contentContainerStyle={styles.lista}
            ListEmptyComponent={
              <Text style={styles.vazio}>
                Nenhum personagem cadastrado ainda.
              </Text>
            }
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0d0a12' },
  conteudo: { flex: 1, padding: 20 },
  titulo: {
    color: '#ff66b2',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitulo: {
    color: '#b3b3b3',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 20,
  },
  formulario: {
    backgroundColor: '#161120',
    borderColor: '#4a235a',
    borderWidth: 1,
    borderRadius: 6,
    padding: 16,
  },
  rotulo: {
    color: '#ff66b2',
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  input: {
    height: 44,
    backgroundColor: '#15101f',
    borderColor: '#4a235a',
    borderWidth: 1,
    borderRadius: 4,
    color: '#fff',
    paddingHorizontal: 12,
    marginBottom: 14,
  },
  botaoSalvar: {
    minHeight: 46,
    backgroundColor: '#ff007f',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  textoBotao: { color: '#fff', fontWeight: 'bold' },
  botaoCancelar: { alignItems: 'center', paddingTop: 12 },
  textoCancelar: { color: '#ff9acb', fontWeight: '600' },
  tituloLista: {
    color: '#ff66b2',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 10,
  },
  lista: { paddingBottom: 24, flexGrow: 1 },
  personagemItem: {
    backgroundColor: '#161120',
    borderColor: '#4a235a',
    borderWidth: 1,
    borderRadius: 6,
    padding: 12,
    marginBottom: 10,
  },
  personagemInfo: { marginBottom: 10 },
  personagemNome: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  personagemTipo: { color: '#b3b3b3', fontSize: 13, marginTop: 3 },
  acoes: { flexDirection: 'row', gap: 8 },
  botaoEditar: {
    backgroundColor: '#713d73',
    borderRadius: 4,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  botaoExcluir: {
    backgroundColor: '#a30052',
    borderRadius: 4,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  textoAcao: { color: '#fff', fontSize: 12, fontWeight: 'bold' },
  carregando: { marginTop: 24 },
  vazio: { color: '#b3b3b3', paddingVertical: 20, textAlign: 'center' },
});
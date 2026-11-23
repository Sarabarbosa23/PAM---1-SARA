
import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Keyboard,
} from 'react-native';

import { consultarPrevisao } from './screens/funcoes';
import styles from './screens/estilo';

function obterIcone(codigo) {
  if (codigo === 0) return '☀️';
  if ([1, 2].includes(codigo)) return '🌤️';
  if (codigo === 3) return '☁️';
  if ([45, 48].includes(codigo)) return '🌫️';
  if ([51, 53, 55, 56, 57].includes(codigo)) return '🌦️';
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(codigo)) return '🌧️';
  if ([71, 73, 75, 77, 85, 86].includes(codigo)) return '❄️';
  if ([95, 96, 99].includes(codigo)) return '⛈️';

  return '🌡️';
}

export default function App() {
  const [cidade, setCidade] = useState('');
  const [previsao, setPrevisao] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [mensagem, setMensagem] = useState('');

  async function pesquisar() {
    if (carregando) return;

    Keyboard.dismiss();

    setMensagem('');
    setPrevisao(null);

    if (!cidade.trim()) {
      setMensagem('Digite o nome de uma cidade.');
      return;
    }

    setCarregando(true);

    try {
      const dados = await consultarPrevisao(cidade);
      setPrevisao(dados);

    } catch (erro) {
      setMensagem(erro.message);

    } finally {
      setCarregando(false);
    }
  }

  function renderDia(item, indice) {
    const data = new Date(`${item.data}T12:00:00`);

    const dia = indice === 0
      ? 'Hoje'
      : data.toLocaleDateString('pt-BR', {
          weekday: 'short'
        });

    return (
      <View style={styles.cardDia} key={item.data}>
        <Text style={styles.diaSemana}>{dia}</Text>

        <Text style={styles.iconeDia}>
          {obterIcone(item.codigo)}
        </Text>

        <Text style={styles.temperaturaDia}>
          {Math.round(item.maxima)}° / {Math.round(item.minima)}°
        </Text>

        <Text style={styles.chuvaDia}>
          Chuva: {item.chuva}%
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scroll}
    >

      <View style={styles.header}>
        <Text style={styles.marca}>
          CLIMATEMPO
        </Text>

        <Text style={styles.titulo}>
          Previsão do tempo
        </Text>

        <Text style={styles.subtitulo}>
          Consulte as condições meteorológicas da sua cidade.
        </Text>
      </View>

      <View style={styles.conteudo}>

        <Text style={styles.label}>
          Nome da cidade
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Ex: Rio Grande da Serra"
          placeholderTextColor="#8795A8"
          value={cidade}
          onChangeText={setCidade}
          autoCapitalize="words"
          returnKeyType="search"
          onSubmitEditing={pesquisar}
        />

        <TouchableOpacity
          style={[
            styles.botao,
            carregando && styles.botaoDesabilitado
          ]}
          onPress={pesquisar}
          disabled={carregando}
        >
          {carregando ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text style={styles.textoBotao}>
              Consultar previsão
            </Text>
          )}
        </TouchableOpacity>

        {mensagem !== '' && (
          <Text style={styles.mensagem}>
            {mensagem}
          </Text>
        )}

        {previsao && (
          <View style={styles.resultados}>

            <Text style={styles.local}>
              {previsao.cidade}, {previsao.pais}
            </Text>

            <View style={styles.cardPrincipal}>

              <Text style={styles.condicaoIcone}>
                {obterIcone(previsao.atual.codigo)}
              </Text>

              <Text style={styles.temperaturaAtual}>
                {Math.round(previsao.atual.temperatura)}°
              </Text>

              <Text style={styles.condicao}>
                {previsao.atual.descricao}
              </Text>

              <Text style={styles.sensacao}>
                Sensação térmica: {Math.round(previsao.atual.sensacao)}°C
              </Text>

              <Text style={styles.maxMin}>
                Máx. {Math.round(previsao.hoje.maxima)}°
                {'  •  '}
                Mín. {Math.round(previsao.hoje.minima)}°
              </Text>

            </View>

            <Text style={styles.secaoTitulo}>
              Condições atuais
            </Text>

            <View style={styles.grade}>

              <View style={styles.infoCard}>
                <Text style={styles.infoIcone}>💧</Text>
                <Text style={styles.infoRotulo}>Umidade</Text>
                <Text style={styles.infoValor}>
                  {previsao.atual.umidade}%
                </Text>
              </View>

              <View style={styles.infoCard}>
                <Text style={styles.infoIcone}>💨</Text>
                <Text style={styles.infoRotulo}>Vento</Text>
                <Text style={styles.infoValor}>
                  {Math.round(previsao.atual.vento)} km/h
                </Text>
              </View>

              <View style={styles.infoCard}>
                <Text style={styles.infoIcone}>🌧️</Text>
                <Text style={styles.infoRotulo}>Chuva hoje</Text>
                <Text style={styles.infoValor}>
                  {previsao.hoje.chuva}%
                </Text>
              </View>

              <View style={styles.infoCard}>
                <Text style={styles.infoIcone}>🌡️</Text>
                <Text style={styles.infoRotulo}>Sensação</Text>
                <Text style={styles.infoValor}>
                  {Math.round(previsao.atual.sensacao)}°C
                </Text>
              </View>

            </View>

            <Text style={styles.secaoTitulo}>
              Próximos 7 dias
            </Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.listaDias}>
                {previsao.proximosDias.map(renderDia)}
              </View>
            </ScrollView>

            <Text style={styles.atualizacao}>
              Dados meteorológicos fornecidos pela Open-Meteo.
            </Text>

          </View>
        )}

        {!previsao && mensagem === '' && !carregando && (
          <Text style={styles.vazio}>
            Pesquise uma cidade para visualizar a previsão do tempo.
          </Text>
        )}

      </View>
    </ScrollView>
  );
}

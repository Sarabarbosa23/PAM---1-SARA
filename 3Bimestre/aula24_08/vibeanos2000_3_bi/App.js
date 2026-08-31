import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { useState } from 'react';

export default function App() {

  const [nome, setNome] = useState('');
  const [acessorio, setAcessorio] = useState('');
  const [role, setRole] = useState('');
  const [comida, setComida] = useState('');
  const [tema, setTema] = useState('');
  const [roupa, setRoupa] = useState('');
  const [cor, setCor] = useState('');
  const [musica, setMusica] = useState('');
  const [filme, setFilme] = useState('');
  const [resultado, setResultado] = useState(null);

  const estilos = {
    paty: {
      titulo: '💖 PATRICINHA Y2K',
      cor: '#ff4fc3',
      vibe: 'Estilosa, social e fashion ✨',
    },
    rock: {
      titulo: '🖤 ROCK Y2K',
      cor: '#7e51df',
      vibe: 'Rebelde e intensa 🎸',
    },
    boho: {
      titulo: '🌿 BOHO Y2K',
      cor: '#19b89a',
      vibe: 'Leve e natural ☀️',
    },
    soft: {
      titulo: '🌸 SOFT GIRL',
      cor: '#ff9ecb',
      vibe: 'Fofa e delicada 💕',
    },
    baddie: {
      titulo: '💄 BADDIE',
      cor: '#ff2e63',
      vibe: 'Confiante e poderosa 💋',
    },
    luxury: {
      titulo: '💎 LUXURY',
      cor: '#ffd700',
      vibe: 'Elegante e chique ✨',
    },
    street: {
      titulo: '🏙️ STREET Y2K',
      cor: '#ff6b35',
      vibe: 'Descolada e urbana 🛹',
    },
    kpop: {
      titulo: '🎤 KPOP Y2K',
      cor: '#ff1493',
      vibe: 'Brilhante e coreográfica ✨',
    },
    gamer: {
      titulo: '🎮 GAMER Y2K',
      cor: '#00ff88',
      vibe: 'Geek e competitiva 🕹️',
    },
    indie: {
      titulo: '🎸 INDIE Y2K',
      cor: '#ffa07a',
      vibe: 'Alternativa e criativa 🎨',
    },
    vintage: {
      titulo: '📻 VINTAGE Y2K',
      cor: '#deb887',
      vibe: 'Clássica e nostálgica 🌟',
    },
    tropical: {
      titulo: '🌴 TROPICAL Y2K',
      cor: '#ff6b6b',
      vibe: 'Animada e praiana 🏖️',
    },
  };

  function calcularVibe() {

    let pontos = {
      paty: 0,
      rock: 0,
      boho: 0,
      soft: 0,
      baddie: 0,
      luxury: 0,
      street: 0,
      kpop: 0,
      gamer: 0,
      indie: 0,
      vintage: 0,
      tropical: 0,
    };

    // ACESSÓRIOS
    if (acessorio === 'bolsa' || acessorio === 'óculos') pontos.paty++;
    if (acessorio === 'corrente' || acessorio === 'coturno') pontos.rock++;
    if (acessorio === 'flor' || acessorio === 'colar floral') pontos.boho++;
    if (acessorio === 'laço' || acessorio === 'pulseira de contas') pontos.soft++;
    if (acessorio === 'gloss' || acessorio === 'brinco grande') pontos.baddie++;
    if (acessorio === 'bolsa chique' || acessorio === 'relógio') pontos.luxury++;
    if (acessorio === 'boné' || acessorio === 'mochila') pontos.street++;
    if (acessorio === 'tira de cabelo' || acessorio === 'luvas sem dedos') pontos.kpop++;
    if (acessorio === 'headset' || acessorio === 'mochila gamer') pontos.gamer++;
    if (acessorio === 'colar de contas' || acessorio === 'brinco de pena') pontos.indie++;
    if (acessorio === 'broche' || acessorio === 'lenço') pontos.vintage++;
    if (acessorio === 'pulseira de concha' || acessorio === 'colar de semente') pontos.tropical++;

    // ROLÊS
    if (role === 'shopping' || role === 'desfile') pontos.paty++;
    if (role === 'show' || role === 'rave') pontos.rock++;
    if (role === 'parque' || role === 'praia') pontos.boho++;
    if (role === 'café' || role === 'livraria') pontos.soft++;
    if (role === 'fotos' || role === 'clube') pontos.baddie++;
    if (role === 'restaurante' || role === 'hotel') pontos.luxury++;
    if (role === 'skatepark' || role === 'galeria') pontos.street++;
    if (role === 'concurso de dança' || role === 'convenção kpop') pontos.kpop++;
    if (role === 'lan house' || role === 'campeonato') pontos.gamer++;
    if (role === 'feira de arte' || role === 'parque de diversões') pontos.indie++;
    if (role === 'museu' || role === 'cinema') pontos.vintage++;
    if (role === 'piscina' || role === 'churrasco') pontos.tropical++;

    // COMIDAS
    if (comida === 'milkshake' || comida === 'frapuccino') pontos.paty++;
    if (comida === 'pizza' || comida === 'hambúrguer') pontos.rock++;
    if (comida === 'salada' || comida === 'smoothie') pontos.boho++;
    if (comida === 'cupcake' || comida === 'bubble tea') pontos.soft++;
    if (comida === 'iced coffee' || comida === 'açaí') pontos.baddie++;
    if (comida === 'gourmet' || comida === 'sushi') pontos.luxury++;
    if (comida === 'taco' || comida === 'hot dog') pontos.street++;
    if (comida === 'ramen' || comida === 'kimbap') pontos.kpop++;
    if (comida === 'energético' || comida === 'pizza de gamer') pontos.gamer++;
    if (comida === 'sanduíche artesanal' || comida === 'brownie') pontos.indie++;
    if (comida === 'torta de maçã' || comida === 'chá') pontos.vintage++;
    if (comida === 'frutas' || comida === 'picolé') pontos.tropical++;

    // TEMAS
    if (tema === 'rosa' || tema === 'glitter') pontos.paty++;
    if (tema === 'preto' || tema === 'crânio') pontos.rock++;
    if (tema === 'flores' || tema === 'natureza') pontos.boho++;
    if (tema === 'pastel' || tema === 'nuvens') pontos.soft++;
    if (tema === 'vermelho' || tema === 'poder') pontos.baddie++;
    if (tema === 'ouro' || tema === 'cristais') pontos.luxury++;
    if (tema === 'grafite' || tema === 'cidade') pontos.street++;
    if (tema === 'brilho' || tema === 'corações') pontos.kpop++;
    if (tema === 'pixels' || tema === 'espaço') pontos.gamer++;
    if (tema === 'retrô' || tema === 'polaroid') pontos.indie++;
    if (tema === 'vintage' || tema === 'preto e branco') pontos.vintage++;
    if (tema === 'fogo' || tema === 'sol') pontos.tropical++;

    // ROUPAS
    if (roupa === 'vestido' || roupa === 'salto') pontos.paty++;
    if (roupa === 'jaqueta de couro' || roupa === 'calça cargo') pontos.rock++;
    if (roupa === 'vestido floral' || roupa === 'saia longa') pontos.boho++;
    if (roupa === 'cardigã' || roupa === 'saia rodada') pontos.soft++;
    if (roupa === 'vestido justo' || roupa === 'blazer') pontos.baddie++;
    if (roupa === 'terno' || roupa === 'vestido de gala') pontos.luxury++;
    if (roupa === 'calça larga' || roupa === 'camiseta oversized') pontos.street++;
    if (roupa === 'blusa cropped' || roupa === 'calça larga com listras') pontos.kpop++;
    if (roupa === 'moletom' || roupa === 'calça de abrigo') pontos.gamer++;
    if (roupa === 'camisa xadrez' || roupa === 'calça de sarja') pontos.indie++;
    if (roupa === 'vestido de bolinhas' || roupa === 'blusa de crochê') pontos.vintage++;
    if (roupa === 'short' || roupa === 'regata') pontos.tropical++;

    // COR FAVORITA
    if (cor === 'rosa' || cor === 'violeta') pontos.paty++;
    if (cor === 'preto' || cor === 'roxo escuro') pontos.rock++;
    if (cor === 'verde' || cor === 'laranja') pontos.boho++;
    if (cor === 'rosa claro' || cor === 'azul bebê') pontos.soft++;
    if (cor === 'vermelho' || cor === 'preto') pontos.baddie++;
    if (cor === 'dourado' || cor === 'prata') pontos.luxury++;
    if (cor === 'cinza' || cor === 'preto') pontos.street++;
    if (cor === 'rosa choque' || cor === 'roxo') pontos.kpop++;
    if (cor === 'verde neon' || cor === 'azul elétrico') pontos.gamer++;
    if (cor === 'mostarda' || cor === 'vermelho queimado') pontos.indie++;
    if (cor === 'marrom' || cor === 'bege') pontos.vintage++;
    if (cor === 'amarelo' || cor === 'turquesa') pontos.tropical++;

    // ESTILO MUSICAL
    if (musica === 'pop' || musica === 'eletrônica') pontos.paty++;
    if (musica === 'rock' || musica === 'metal') pontos.rock++;
    if (musica === 'indie' || musica === 'folk') pontos.boho++;
    if (musica === 'lo-fi' || musica === 'mpb') pontos.soft++;
    if (musica === 'rap' || musica === 'trap') pontos.baddie++;
    if (musica === 'jazz' || musica === 'mpb') pontos.luxury++;
    if (musica === 'hip hop' || musica === 'grime') pontos.street++;
    if (musica === 'k-pop' || musica === 'j-pop') pontos.kpop++;
    if (musica === 'edm' || musica === 'videogame') pontos.gamer++;
    if (musica === 'indie rock' || musica === 'alternativa') pontos.indie++;
    if (musica === 'samba' || musica === 'bossa nova') pontos.vintage++;
    if (musica === 'reggae' || musica === 'soca') pontos.tropical++;

    // GÊNEROS DE FILME
    if (filme === 'romance' || filme === 'comédia romântica') pontos.paty++;
    if (filme === 'terror' || filme === 'suspense') pontos.rock++;
    if (filme === 'natureza' || filme === 'aventura') pontos.boho++;
    if (filme === 'animação' || filme === 'fantasia') pontos.soft++;
    if (filme === 'thriller' || filme === 'drama') pontos.baddie++;
    if (filme === 'clássico' || filme === 'filme europeu') pontos.luxury++;
    if (filme === 'ação' || filme === 'policial') pontos.street++;
    if (filme === 'musical' || filme === 'romance coreano') pontos.kpop++;
    if (filme === 'ficção científica' || filme === 'anime') pontos.gamer++;
    if (filme === 'independente' || filme === 'documentário') pontos.indie++;
    if (filme === 'clássico hollywoodiano' || filme === 'filme mudo') pontos.vintage++;
    if (filme === 'filme de praia' || filme === 'comédia') pontos.tropical++;

    let maior = 'paty';
    for (let tipo in pontos) {
      if (pontos[tipo] > pontos[maior]) maior = tipo;
    }

    setResultado(estilos[maior]);
  }

  function reiniciar() {
    setNome('');
    setAcessorio('');
    setRole('');
    setComida('');
    setTema('');
    setRoupa('');
    setCor('');
    setMusica('');
    setFilme('');
    setResultado(null);
  }

  function Botao({ texto, valor, estado, setEstado }) {
    return (
      <TouchableOpacity
        style={[
          styles.card,
          estado === valor && styles.cardSelecionado
        ]}
        onPress={() => setEstado(valor)}
      >
        <Text style={styles.cardTexto}>{texto}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <ScrollView contentContainerStyle={styles.scroll}>

        <Text style={styles.titulo}>✨ Y2K VIBE ✨</Text>

        <TextInput
          style={styles.input}
          placeholder="Seu nome..."
          placeholderTextColor="#ffb6ff"
          value={nome}
          onChangeText={setNome}
        />

        {/* ACESSÓRIOS */}
        <Text style={styles.sub}>💿 Acessórios</Text>
        <View style={styles.linha}>
          <Botao texto="Bolsa" valor="bolsa" estado={acessorio} setEstado={setAcessorio}/>
          <Botao texto="Óculos" valor="óculos" estado={acessorio} setEstado={setAcessorio}/>
          <Botao texto="Corrente" valor="corrente" estado={acessorio} setEstado={setAcessorio}/>
          <Botao texto="Flor" valor="flor" estado={acessorio} setEstado={setAcessorio}/>
          <Botao texto="Laço" valor="laço" estado={acessorio} setEstado={setAcessorio}/>
          <Botao texto="Gloss" valor="gloss" estado={acessorio} setEstado={setAcessorio}/>
          <Botao texto="Bolsa chique" valor="bolsa chique" estado={acessorio} setEstado={setAcessorio}/>
          <Botao texto="Coturno" valor="coturno" estado={acessorio} setEstado={setAcessorio}/>
          <Botao texto="Colar floral" valor="colar floral" estado={acessorio} setEstado={setAcessorio}/>
          <Botao texto="Pulseira de contas" valor="pulseira de contas" estado={acessorio} setEstado={setAcessorio}/>
          <Botao texto="Brinco grande" valor="brinco grande" estado={acessorio} setEstado={setAcessorio}/>
          <Botao texto="Relógio" valor="relógio" estado={acessorio} setEstado={setAcessorio}/>
          <Botao texto="Boné" valor="boné" estado={acessorio} setEstado={setAcessorio}/>
          <Botao texto="Mochila" valor="mochila" estado={acessorio} setEstado={setAcessorio}/>
          <Botao texto="Tira de cabelo" valor="tira de cabelo" estado={acessorio} setEstado={setAcessorio}/>
          <Botao texto="Luvas sem dedos" valor="luvas sem dedos" estado={acessorio} setEstado={setAcessorio}/>
          <Botao texto="Headset" valor="headset" estado={acessorio} setEstado={setAcessorio}/>
          <Botao texto="Mochila gamer" valor="mochila gamer" estado={acessorio} setEstado={setAcessorio}/>
          <Botao texto="Colar de contas" valor="colar de contas" estado={acessorio} setEstado={setAcessorio}/>
          <Botao texto="Brinco de pena" valor="brinco de pena" estado={acessorio} setEstado={setAcessorio}/>
          <Botao texto="Broche" valor="broche" estado={acessorio} setEstado={setAcessorio}/>
          <Botao texto="Lenço" valor="lenço" estado={acessorio} setEstado={setAcessorio}/>
          <Botao texto="Pulseira de concha" valor="pulseira de concha" estado={acessorio} setEstado={setAcessorio}/>
          <Botao texto="Colar de semente" valor="colar de semente" estado={acessorio} setEstado={setAcessorio}/>
        </View>

        {/* ROLÊS */}
        <Text style={styles.sub}>🎧 Rolês</Text>
        <View style={styles.linha}>
          <Botao texto="Shopping" valor="shopping" estado={role} setEstado={setRole}/>
          <Botao texto="Show" valor="show" estado={role} setEstado={setRole}/>
          <Botao texto="Parque" valor="parque" estado={role} setEstado={setRole}/>
          <Botao texto="Café" valor="café" estado={role} setEstado={setRole}/>
          <Botao texto="Fotos" valor="fotos" estado={role} setEstado={setRole}/>
          <Botao texto="Restaurante" valor="restaurante" estado={role} setEstado={setRole}/>
          <Botao texto="Desfile" valor="desfile" estado={role} setEstado={setRole}/>
          <Botao texto="Rave" valor="rave" estado={role} setEstado={setRole}/>
          <Botao texto="Praia" valor="praia" estado={role} setEstado={setRole}/>
          <Botao texto="Livraria" valor="livraria" estado={role} setEstado={setRole}/>
          <Botao texto="Clube" valor="clube" estado={role} setEstado={setRole}/>
          <Botao texto="Hotel" valor="hotel" estado={role} setEstado={setRole}/>
          <Botao texto="Skatepark" valor="skatepark" estado={role} setEstado={setRole}/>
          <Botao texto="Galeria" valor="galeria" estado={role} setEstado={setRole}/>
          <Botao texto="Concurso de dança" valor="concurso de dança" estado={role} setEstado={setRole}/>
          <Botao texto="Convenção Kpop" valor="convenção kpop" estado={role} setEstado={setRole}/>
          <Botao texto="Lan house" valor="lan house" estado={role} setEstado={setRole}/>
          <Botao texto="Campeonato" valor="campeonato" estado={role} setEstado={setRole}/>
          <Botao texto="Feira de arte" valor="feira de arte" estado={role} setEstado={setRole}/>
          <Botao texto="Parque de diversões" valor="parque de diversões" estado={role} setEstado={setRole}/>
          <Botao texto="Museu" valor="museu" estado={role} setEstado={setRole}/>
          <Botao texto="Cinema" valor="cinema" estado={role} setEstado={setRole}/>
          <Botao texto="Piscina" valor="piscina" estado={role} setEstado={setRole}/>
          <Botao texto="Churrasco" valor="churrasco" estado={role} setEstado={setRole}/>
        </View>

        {/* COMIDAS */}
        <Text style={styles.sub}>🍓 Comidas</Text>
        <View style={styles.linha}>
          <Botao texto="Milkshake" valor="milkshake" estado={comida} setEstado={setComida}/>
          <Botao texto="Pizza" valor="pizza" estado={comida} setEstado={setComida}/>
          <Botao texto="Salada" valor="salada" estado={comida} setEstado={setComida}/>
          <Botao texto="Cupcake" valor="cupcake" estado={comida} setEstado={setComida}/>
          <Botao texto="Iced Coffee" valor="iced coffee" estado={comida} setEstado={setComida}/>
          <Botao texto="Gourmet" valor="gourmet" estado={comida} setEstado={setComida}/>
          <Botao texto="Frapuccino" valor="frapuccino" estado={comida} setEstado={setComida}/>
          <Botao texto="Hambúrguer" valor="hambúrguer" estado={comida} setEstado={setComida}/>
          <Botao texto="Smoothie" valor="smoothie" estado={comida} setEstado={setComida}/>
          <Botao texto="Bubble Tea" valor="bubble tea" estado={comida} setEstado={setComida}/>
          <Botao texto="Açaí" valor="açaí" estado={comida} setEstado={setComida}/>
          <Botao texto="Sushi" valor="sushi" estado={comida} setEstado={setComida}/>
          <Botao texto="Taco" valor="taco" estado={comida} setEstado={setComida}/>
          <Botao texto="Hot Dog" valor="hot dog" estado={comida} setEstado={setComida}/>
          <Botao texto="Ramen" valor="ramen" estado={comida} setEstado={setComida}/>
          <Botao texto="Kimbap" valor="kimbap" estado={comida} setEstado={setComida}/>
          <Botao texto="Energético" valor="energético" estado={comida} setEstado={setComida}/>
          <Botao texto="Pizza de gamer" valor="pizza de gamer" estado={comida} setEstado={setComida}/>
          <Botao texto="Sanduíche artesanal" valor="sanduíche artesanal" estado={comida} setEstado={setComida}/>
          <Botao texto="Brownie" valor="brownie" estado={comida} setEstado={setComida}/>
          <Botao texto="Torta de maçã" valor="torta de maçã" estado={comida} setEstado={setComida}/>
          <Botao texto="Chá" valor="chá" estado={comida} setEstado={setComida}/>
          <Botao texto="Frutas" valor="frutas" estado={comida} setEstado={setComida}/>
          <Botao texto="Picolé" valor="picolé" estado={comida} setEstado={setComida}/>
        </View>

        {/* TEMAS */}
        <Text style={styles.sub}>🎨 Temas</Text>
        <View style={styles.linha}>
          <Botao texto="Rosa" valor="rosa" estado={tema} setEstado={setTema}/>
          <Botao texto="Glitter" valor="glitter" estado={tema} setEstado={setTema}/>
          <Botao texto="Preto" valor="preto" estado={tema} setEstado={setTema}/>
          <Botao texto="Crânio" valor="crânio" estado={tema} setEstado={setTema}/>
          <Botao texto="Flores" valor="flores" estado={tema} setEstado={setTema}/>
          <Botao texto="Natureza" valor="natureza" estado={tema} setEstado={setTema}/>
          <Botao texto="Pastel" valor="pastel" estado={tema} setEstado={setTema}/>
          <Botao texto="Nuvens" valor="nuvens" estado={tema} setEstado={setTema}/>
          <Botao texto="Vermelho" valor="vermelho" estado={tema} setEstado={setTema}/>
          <Botao texto="Poder" valor="poder" estado={tema} setEstado={setTema}/>
          <Botao texto="Ouro" valor="ouro" estado={tema} setEstado={setTema}/>
          <Botao texto="Cristais" valor="cristais" estado={tema} setEstado={setTema}/>
          <Botao texto="Grafite" valor="grafite" estado={tema} setEstado={setTema}/>
          <Botao texto="Cidade" valor="cidade" estado={tema} setEstado={setTema}/>
          <Botao texto="Brilho" valor="brilho" estado={tema} setEstado={setTema}/>
          <Botao texto="Corações" valor="corações" estado={tema} setEstado={setTema}/>
          <Botao texto="Pixels" valor="pixels" estado={tema} setEstado={setTema}/>
          <Botao texto="Espaço" valor="espaço" estado={tema} setEstado={setTema}/>
          <Botao texto="Retrô" valor="retrô" estado={tema} setEstado={setTema}/>
          <Botao texto="Polaroid" valor="polaroid" estado={tema} setEstado={setTema}/>
          <Botao texto="Vintage" valor="vintage" estado={tema} setEstado={setTema}/>
          <Botao texto="Preto e branco" valor="preto e branco" estado={tema} setEstado={setTema}/>
          <Botao texto="Fogo" valor="fogo" estado={tema} setEstado={setTema}/>
          <Botao texto="Sol" valor="sol" estado={tema} setEstado={setTema}/>
        </View>

        {/* ROUPAS */}
        <Text style={styles.sub}>👗 Roupas</Text>
        <View style={styles.linha}>
          <Botao texto="Vestido" valor="vestido" estado={roupa} setEstado={setRoupa}/>
          <Botao texto="Salto" valor="salto" estado={roupa} setEstado={setRoupa}/>
          <Botao texto="Jaqueta de couro" valor="jaqueta de couro" estado={roupa} setEstado={setRoupa}/>
          <Botao texto="Calça cargo" valor="calça cargo" estado={roupa} setEstado={setRoupa}/>
          <Botao texto="Vestido floral" valor="vestido floral" estado={roupa} setEstado={setRoupa}/>
          <Botao texto="Saia longa" valor="saia longa" estado={roupa} setEstado={setRoupa}/>
          <Botao texto="Cardigã" valor="cardigã" estado={roupa} setEstado={setRoupa}/>
          <Botao texto="Saia rodada" valor="saia rodada" estado={roupa} setEstado={setRoupa}/>
          <Botao texto="Vestido justo" valor="vestido justo" estado={roupa} setEstado={setRoupa}/>
          <Botao texto="Blazer" valor="blazer" estado={roupa} setEstado={setRoupa}/>
          <Botao texto="Terno" valor="terno" estado={roupa} setEstado={setRoupa}/>
          <Botao texto="Vestido de gala" valor="vestido de gala" estado={roupa} setEstado={setRoupa}/>
          <Botao texto="Calça larga" valor="calça larga" estado={roupa} setEstado={setRoupa}/>
          <Botao texto="Camiseta oversized" valor="camiseta oversized" estado={roupa} setEstado={setRoupa}/>
          <Botao texto="Blusa cropped" valor="blusa cropped" estado={roupa} setEstado={setRoupa}/>
          <Botao texto="Calça larga com listras" valor="calça larga com listras" estado={roupa} setEstado={setRoupa}/>
          <Botao texto="Moletom" valor="moletom" estado={roupa} setEstado={setRoupa}/>
          <Botao texto="Calça de abrigo" valor="calça de abrigo" estado={roupa} setEstado={setRoupa}/>
          <Botao texto="Camisa xadrez" valor="camisa xadrez" estado={roupa} setEstado={setRoupa}/>
          <Botao texto="Calça de sarja" valor="calça de sarja" estado={roupa} setEstado={setRoupa}/>
          <Botao texto="Vestido de bolinhas" valor="vestido de bolinhas" estado={roupa} setEstado={setRoupa}/>
          <Botao texto="Blusa de crochê" valor="blusa de crochê" estado={roupa} setEstado={setRoupa}/>
          <Botao texto="Short" valor="short" estado={roupa} setEstado={setRoupa}/>
          <Botao texto="Regata" valor="regata" estado={roupa} setEstado={setRoupa}/>
        </View>

        {/* COR FAVORITA */}
        <Text style={styles.sub}>🎨 Cor Favorita</Text>
        <View style={styles.linha}>
          <Botao texto="Rosa" valor="rosa" estado={cor} setEstado={setCor}/>
          <Botao texto="Violeta" valor="violeta" estado={cor} setEstado={setCor}/>
          <Botao texto="Preto" valor="preto" estado={cor} setEstado={setCor}/>
          <Botao texto="Roxo escuro" valor="roxo escuro" estado={cor} setEstado={setCor}/>
          <Botao texto="Verde" valor="verde" estado={cor} setEstado={setCor}/>
          <Botao texto="Laranja" valor="laranja" estado={cor} setEstado={setCor}/>
          <Botao texto="Rosa claro" valor="rosa claro" estado={cor} setEstado={setCor}/>
          <Botao texto="Azul bebê" valor="azul bebê" estado={cor} setEstado={setCor}/>
          <Botao texto="Vermelho" valor="vermelho" estado={cor} setEstado={setCor}/>
          <Botao texto="Dourado" valor="dourado" estado={cor} setEstado={setCor}/>
          <Botao texto="Prata" valor="prata" estado={cor} setEstado={setCor}/>
          <Botao texto="Cinza" valor="cinza" estado={cor} setEstado={setCor}/>
          <Botao texto="Rosa choque" valor="rosa choque" estado={cor} setEstado={setCor}/>
          <Botao texto="Verde neon" valor="verde neon" estado={cor} setEstado={setCor}/>
          <Botao texto="Azul elétrico" valor="azul elétrico" estado={cor} setEstado={setCor}/>
          <Botao texto="Mostarda" valor="mostarda" estado={cor} setEstado={setCor}/>
          <Botao texto="Vermelho queimado" valor="vermelho queimado" estado={cor} setEstado={setCor}/>
          <Botao texto="Marrom" valor="marrom" estado={cor} setEstado={setCor}/>
          <Botao texto="Bege" valor="bege" estado={cor} setEstado={setCor}/>
          <Botao texto="Amarelo" valor="amarelo" estado={cor} setEstado={setCor}/>
          <Botao texto="Turquesa" valor="turquesa" estado={cor} setEstado={setCor}/>
        </View>

        {/* ESTILO MUSICAL */}
        <Text style={styles.sub}>🎵 Estilo Musical</Text>
        <View style={styles.linha}>
          <Botao texto="Pop" valor="pop" estado={musica} setEstado={setMusica}/>
          <Botao texto="Eletrônica" valor="eletrônica" estado={musica} setEstado={setMusica}/>
          <Botao texto="Rock" valor="rock" estado={musica} setEstado={setMusica}/>
          <Botao texto="Metal" valor="metal" estado={musica} setEstado={setMusica}/>
          <Botao texto="Indie" valor="indie" estado={musica} setEstado={setMusica}/>
          <Botao texto="Folk" valor="folk" estado={musica} setEstado={setMusica}/>
          <Botao texto="Lo-fi" valor="lo-fi" estado={musica} setEstado={setMusica}/>
          <Botao texto="MPB" valor="mpb" estado={musica} setEstado={setMusica}/>
          <Botao texto="Rap" valor="rap" estado={musica} setEstado={setMusica}/>
          <Botao texto="Trap" valor="trap" estado={musica} setEstado={setMusica}/>
          <Botao texto="Jazz" valor="jazz" estado={musica} setEstado={setMusica}/>
          <Botao texto="Hip Hop" valor="hip hop" estado={musica} setEstado={setMusica}/>
          <Botao texto="Grime" valor="grime" estado={musica} setEstado={setMusica}/>
          <Botao texto="K-pop" valor="k-pop" estado={musica} setEstado={setMusica}/>
          <Botao texto="J-pop" valor="j-pop" estado={musica} setEstado={setMusica}/>
          <Botao texto="EDM" valor="edm" estado={musica} setEstado={setMusica}/>
          <Botao texto="Videogame" valor="videogame" estado={musica} setEstado={setMusica}/>
          <Botao texto="Indie rock" valor="indie rock" estado={musica} setEstado={setMusica}/>
          <Botao texto="Alternativa" valor="alternativa" estado={musica} setEstado={setMusica}/>
          <Botao texto="Samba" valor="samba" estado={musica} setEstado={setMusica}/>
          <Botao texto="Bossa nova" valor="bossa nova" estado={musica} setEstado={setMusica}/>
          <Botao texto="Reggae" valor="reggae" estado={musica} setEstado={setMusica}/>
          <Botao texto="Soca" valor="soca" estado={musica} setEstado={setMusica}/>
        </View>

        {/* GÊNEROS DE FILME */}
        <Text style={styles.sub}>🎬 Gêneros de Filme</Text>
        <View style={styles.linha}>
          <Botao texto="Romance" valor="romance" estado={filme} setEstado={setFilme}/>
          <Botao texto="Comédia romântica" valor="comédia romântica" estado={filme} setEstado={setFilme}/>
          <Botao texto="Terror" valor="terror" estado={filme} setEstado={setFilme}/>
          <Botao texto="Suspense" valor="suspense" estado={filme} setEstado={setFilme}/>
          <Botao texto="Natureza" valor="natureza" estado={filme} setEstado={setFilme}/>
          <Botao texto="Aventura" valor="aventura" estado={filme} setEstado={setFilme}/>
          <Botao texto="Animação" valor="animação" estado={filme} setEstado={setFilme}/>
          <Botao texto="Fantasia" valor="fantasia" estado={filme} setEstado={setFilme}/>
          <Botao texto="Thriller" valor="thriller" estado={filme} setEstado={setFilme}/>
          <Botao texto="Drama" valor="drama" estado={filme} setEstado={setFilme}/>
          <Botao texto="Clássico" valor="clássico" estado={filme} setEstado={setFilme}/>
          <Botao texto="Filme europeu" valor="filme europeu" estado={filme} setEstado={setFilme}/>
          <Botao texto="Ação" valor="ação" estado={filme} setEstado={setFilme}/>
          <Botao texto="Policial" valor="policial" estado={filme} setEstado={setFilme}/>
          <Botao texto="Musical" valor="musical" estado={filme} setEstado={setFilme}/>
          <Botao texto="Romance coreano" valor="romance coreano" estado={filme} setEstado={setFilme}/>
          <Botao texto="Ficção científica" valor="ficção científica" estado={filme} setEstado={setFilme}/>
          <Botao texto="Anime" valor="anime" estado={filme} setEstado={setFilme}/>
          <Botao texto="Independente" valor="independente" estado={filme} setEstado={setFilme}/>
          <Botao texto="Documentário" valor="documentário" estado={filme} setEstado={setFilme}/>
          <Botao texto="Clássico hollywoodiano" valor="clássico hollywoodiano" estado={filme} setEstado={setFilme}/>
          <Botao texto="Filme mudo" valor="filme mudo" estado={filme} setEstado={setFilme}/>
          <Botao texto="Filme de praia" valor="filme de praia" estado={filme} setEstado={setFilme}/>
          <Botao texto="Comédia" valor="comédia" estado={filme} setEstado={setFilme}/>
        </View>

        <TouchableOpacity style={styles.botao} onPress={calcularVibe}>
          <Text style={styles.botaoTexto}>VER MINHA VIBE 💖</Text>
        </TouchableOpacity>

        {resultado && (
          <View style={[styles.resultado, { borderColor: resultado.cor }]}>
            <Text style={[styles.resultadoTitulo, { color: resultado.cor }]}>
              {resultado.titulo}
            </Text>

            <Text style={styles.texto}>
              {nome ? `Oi ${nome}! ` : ''}{resultado.vibe}
            </Text>

            <TouchableOpacity style={styles.reset} onPress={reiniciar}>
              <Text style={styles.botaoTexto}>REINICIAR ✨</Text>
            </TouchableOpacity>
          </View>
        )}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#1a0026',
  },

  scroll: {
    padding: 25,
    alignItems: 'center',
  },

  titulo: {
    fontSize: 30,
    fontWeight: '900',
    color: '#ff4fc3',
    textShadowColor: '#ff00ff',
    textShadowRadius: 12,
    marginBottom: 20,
  },

  input: {
    width: '100%',
    backgroundColor: '#2b0040',
    borderRadius: 15,
    padding: 12,
    marginBottom: 20,
    color: '#fff',
    borderWidth: 2,
    borderColor: '#ff4fc3',
  },

  sub: {
    color: '#ffb6ff',
    fontWeight: '900',
    marginTop: 10,
    marginBottom: 10,
  },

  linha: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  card: {
    backgroundColor: '#ffffff20',
    padding: 10,
    borderRadius: 15,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ff4fc3',
  },

  cardSelecionado: {
    backgroundColor: '#ff4fc3',
  },

  cardTexto: {
    color: '#fff',
    fontWeight: '700',
  },

  botao: {
    backgroundColor: '#ff00cc',
    padding: 15,
    borderRadius: 25,
    marginTop: 20,
  },

  botaoTexto: {
    color: '#fff',
    fontWeight: '900',
    textAlign: 'center',
  },

  resultado: {
    marginTop: 25,
    padding: 20,
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: '#2b0040',
    width: '100%',
  },

  resultadoTitulo: {
    fontSize: 22,
    fontWeight: '900',
    textAlign: 'center',
  },

  texto: {
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
  },

  reset: {
    backgroundColor: '#7e51df',
    padding: 12,
    borderRadius: 20,
    marginTop: 15,
  },

});

const cache = new Map();

function descreverTempo(codigo) {
  const descricoes = {
    0: 'Céu limpo',
    1: 'Predominantemente limpo',
    2: 'Parcialmente nublado',
    3: 'Nublado',
    45: 'Neblina',
    48: 'Neblina com geada',
    51: 'Garoa fraca',
    53: 'Garoa moderada',
    55: 'Garoa intensa',
    56: 'Garoa congelante fraca',
    57: 'Garoa congelante intensa',
    61: 'Chuva fraca',
    63: 'Chuva moderada',
    65: 'Chuva forte',
    66: 'Chuva congelante fraca',
    67: 'Chuva congelante forte',
    71: 'Neve fraca',
    73: 'Neve moderada',
    75: 'Neve forte',
    77: 'Grãos de neve',
    80: 'Pancadas de chuva fracas',
    81: 'Pancadas de chuva moderadas',
    82: 'Pancadas de chuva fortes',
    85: 'Pancadas de neve fracas',
    86: 'Pancadas de neve fortes',
    95: 'Trovoada',
    96: 'Trovoada com granizo fraco',
    99: 'Trovoada com granizo forte',
  };

  return descricoes[codigo] || 'Condição não identificada';
}

export async function consultarPrevisao(nomeCidade) {
  const pesquisa = nomeCidade.trim();

  if (!pesquisa) {
    throw new Error('Digite o nome de uma cidade.');
  }

  const chave = pesquisa.toLowerCase();

  if (cache.has(chave)) {
    return cache.get(chave);
  }

  try {
    // Consulta para localizar a cidade.

    const urlCidade =
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(pesquisa)}&count=1&language=pt&format=json`;

    const respostaCidade = await fetch(urlCidade);

    if (!respostaCidade.ok) {
      throw new Error('Não foi possível localizar a cidade.');
    }

    const dadosCidade = await respostaCidade.json();

    if (!dadosCidade.results || dadosCidade.results.length === 0) {
      throw new Error('Cidade não encontrada. Confira o nome e tente novamente.');
    }

    const local = dadosCidade.results[0];

    // Consulta da previsão utilizando latitude e longitude.

    const urlTempo =
      `https://api.open-meteo.com/v1/forecast?latitude=${local.latitude}&longitude=${local.longitude}` +
      '&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m' +
      '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max' +
      '&timezone=auto&forecast_days=7';

    const respostaTempo = await fetch(urlTempo);

    if (!respostaTempo.ok) {
      throw new Error('Não foi possível consultar a previsão do tempo.');
    }

    const dadosTempo = await respostaTempo.json();

    if (!dadosTempo.current || !dadosTempo.daily) {
      throw new Error('A API retornou dados incompletos.');
    }

    const resultado = {
      cidade: local.name,
      pais: local.country || '',

      atual: {
        temperatura: dadosTempo.current.temperature_2m,
        sensacao: dadosTempo.current.apparent_temperature,
        umidade: dadosTempo.current.relative_humidity_2m,
        vento: dadosTempo.current.wind_speed_10m,
        codigo: dadosTempo.current.weather_code,
        descricao: descreverTempo(dadosTempo.current.weather_code),
      },

      hoje: {
        maxima: dadosTempo.daily.temperature_2m_max[0],
        minima: dadosTempo.daily.temperature_2m_min[0],
        chuva: dadosTempo.daily.precipitation_probability_max[0] ?? 0,
      },

      proximosDias: dadosTempo.daily.time.map((data, indice) => ({
        data,
        codigo: dadosTempo.daily.weather_code[indice],
        maxima: dadosTempo.daily.temperature_2m_max[indice],
        minima: dadosTempo.daily.temperature_2m_min[indice],
        chuva: dadosTempo.daily.precipitation_probability_max[indice] ?? 0,
      })),
    };

    cache.set(chave, resultado);

    return resultado;

  } catch (erro) {
    if (erro.message) {
      throw erro;
    }

    throw new Error('Erro ao consultar a previsão. Verifique sua conexão.');
  }
}

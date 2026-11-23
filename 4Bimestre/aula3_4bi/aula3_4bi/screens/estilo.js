
import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F1F6FC',
  },

  scroll: {
    paddingBottom: 30,
  },

  header: {
    backgroundColor: '#1769AA',
    paddingHorizontal: 24,
    paddingTop: 55,
    paddingBottom: 32,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },

  marca: {
    color: '#BFE5FF',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 12,
  },

  titulo: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: 'bold',
  },

  subtitulo: {
    color: '#DCEEFF',
    fontSize: 14,
    marginTop: 8,
    lineHeight: 21,
  },

  conteudo: {
    padding: 20,
  },

  label: {
    color: '#243B53',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D5E1ED',
    borderRadius: 12,
    height: 52,
    paddingHorizontal: 15,
    fontSize: 15,
    color: '#243B53',
  },

  botao: {
    backgroundColor: '#1769AA',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 14,
  },

  botaoDesabilitado: {
    backgroundColor: '#8CB9DD',
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  mensagem: {
    color: '#C0392B',
    textAlign: 'center',
    marginTop: 18,
    fontSize: 14,
  },

  vazio: {
    color: '#718096',
    textAlign: 'center',
    marginTop: 28,
    fontSize: 14,
    lineHeight: 21,
  },

  resultados: {
    marginTop: 25,
  },

  local: {
    color: '#243B53',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  cardPrincipal: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 22,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0EAF4',
  },

  condicaoIcone: {
    fontSize: 55,
  },

  temperaturaAtual: {
    color: '#1769AA',
    fontSize: 56,
    fontWeight: 'bold',
    marginTop: 3,
  },

  condicao: {
    color: '#243B53',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 2,
  },

  sensacao: {
    color: '#718096',
    fontSize: 13,
    marginTop: 8,
  },

  maxMin: {
    color: '#526579',
    fontSize: 14,
    marginTop: 12,
  },

  secaoTitulo: {
    color: '#243B53',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 12,
  },

  grade: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  infoCard: {
    backgroundColor: '#FFFFFF',
    width: '48%',
    borderRadius: 14,
    padding: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E0EAF4',
  },

  infoIcone: {
    fontSize: 22,
    marginBottom: 7,
  },

  infoRotulo: {
    color: '#718096',
    fontSize: 12,
  },

  infoValor: {
    color: '#243B53',
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 4,
  },

  listaDias: {
    flexDirection: 'row',
    paddingBottom: 5,
  },

  cardDia: {
    backgroundColor: '#FFFFFF',
    width: 112,
    borderRadius: 14,
    padding: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0EAF4',
    marginRight: 10,
  },

  diaSemana: {
    color: '#526579',
    fontSize: 13,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },

  iconeDia: {
    fontSize: 27,
    marginVertical: 10,
  },

  temperaturaDia: {
    color: '#243B53',
    fontSize: 13,
    fontWeight: 'bold',
  },

  chuvaDia: {
    color: '#718096',
    fontSize: 11,
    marginTop: 7,
  },

  atualizacao: {
    color: '#8795A8',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 22,
  },

});

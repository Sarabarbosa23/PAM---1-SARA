import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { carrinhoGlobal } from './Detalhes';

const FORMAS_PAGAMENTO = ['Pix', 'Cartão', 'Dinheiro'];

export default function Pagamento({ route, navigation }) {
  const { itens, total } = route.params;
  const [formaSelecionada, setFormaSelecionada] = useState(null);
  const [pagamentoConcluido, setPagamentoConcluido] = useState(false);

  const confirmarPagamento = () => {
    if (!formaSelecionada) {
      return;
    }

    carrinhoGlobal.length = 0;
    setPagamentoConcluido(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      {pagamentoConcluido ? (
        <View style={styles.confirmation}>
          <Text style={styles.successIcon}>✅</Text>
          <Text style={styles.title}>Pagamento simulado!</Text>
          <Text style={styles.description}>
            Forma escolhida: {formaSelecionada}. Obrigado pela compra!
          </Text>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.primaryButtonText}>Voltar ao início</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.title}>Resumo do pedido</Text>
          {itens.map((item, index) => (
            <View key={`${item.id}-${index}`} style={styles.itemRow}>
              <Text style={styles.itemName}>{item.nome}</Text>
              <Text style={styles.itemPrice}>
                R$ {Number(item.preco).toFixed(2)}
              </Text>
            </View>
          ))}

          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>R$ {Number(total).toFixed(2)}</Text>
          </View>

          <Text style={styles.sectionTitle}>Escolha a forma de pagamento</Text>
          {FORMAS_PAGAMENTO.map((forma) => {
            const selecionada = formaSelecionada === forma;

            return (
              <TouchableOpacity
                key={forma}
                accessibilityRole="radio"
                accessibilityState={{ checked: selecionada }}
                style={[
                  styles.paymentOption,
                  selecionada && styles.paymentOptionSelected,
                ]}
                onPress={() => setFormaSelecionada(forma)}
              >
                <Text
                  style={[
                    styles.paymentOptionText,
                    selecionada && styles.paymentOptionTextSelected,
                  ]}
                >
                  {forma}
                </Text>
                <Text style={styles.radioMark}>{selecionada ? '●' : '○'}</Text>
              </TouchableOpacity>
            );
          })}

          <Text style={styles.note}>
            Demonstração: nenhum pagamento real será processado.
          </Text>
          <TouchableOpacity
            style={[
              styles.primaryButton,
              !formaSelecionada && styles.primaryButtonDisabled,
            ]}
            onPress={confirmarPagamento}
            disabled={!formaSelecionada}
          >
            <Text style={styles.primaryButtonText}>Confirmar pagamento</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  itemName: {
    flex: 1,
    color: '#444',
    marginRight: 12,
  },
  itemPrice: {
    color: '#666',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 28,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF69B4',
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  paymentOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FFD1DC',
    marginBottom: 10,
  },
  paymentOptionSelected: {
    borderColor: '#FF8DA1',
    backgroundColor: '#FFF0F3',
  },
  paymentOptionText: {
    color: '#444',
    fontWeight: '600',
  },
  paymentOptionTextSelected: {
    color: '#D81B60',
  },
  radioMark: {
    color: '#D81B60',
    fontSize: 18,
  },
  note: {
    color: '#666',
    fontSize: 13,
    marginTop: 6,
    marginBottom: 16,
  },
  primaryButton: {
    backgroundColor: '#64B5F6',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  primaryButtonDisabled: {
    opacity: 0.5,
  },
  primaryButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
  confirmation: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  successIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  description: {
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 20,
  },
});

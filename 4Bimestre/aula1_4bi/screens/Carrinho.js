// screens/Carrinho.js
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import { carrinhoGlobal } from './Detalhes';

export default function Carrinho({ navigation }) {
  const [carrinho, setCarrinho] = useState([...carrinhoGlobal]);

  // Função para remover item do carrinho
  const removerItem = (index) => {
    carrinhoGlobal.splice(index, 1);
    setCarrinho([...carrinhoGlobal]);
  };

  // Calcular valor total
  const total = carrinho.reduce((sum, item) => sum + Number(item.preco), 0);

  const finalizarCompra = () => {
    if (carrinho.length === 0) {
      Alert.alert("Carrinho Vazio", "Adicione alguns doces antes de finalizar!");
      return;
    }
    navigation.navigate('Pagamento', { itens: carrinho, total });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🛒 Seu Carrinho</Text>
      </View>

      {carrinho.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Seu carrinho está vazio 😢</Text>
          <TouchableOpacity 
            style={styles.buttonPink}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>Escolher Doces</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <FlatList
            data={carrinho}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View style={styles.itemCard}>
                <View>
                  <Text style={styles.itemName}>{item.nome}</Text>
                  <Text style={styles.itemPrice}>R$ {Number(item.preco).toFixed(2)}</Text>
                </View>
                <TouchableOpacity onPress={() => removerItem(index)}>
                  <Text style={styles.deleteText}>❌ Remover</Text>
                </TouchableOpacity>
              </View>
            )}
            contentContainerStyle={styles.listContainer}
          />

          <View style={styles.footer}>
            <View style={styles.totalRow}>
              <Text style={styles.totalText}>Total:</Text>
              <Text style={styles.totalValue}>R$ {total.toFixed(2)}</Text>
            </View>

            <TouchableOpacity style={styles.buttonBlue} onPress={finalizarCompra}>
              <Text style={styles.buttonText}>Finalizar Compra 💳</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
  },
  header: {
    padding: 16,
    backgroundColor: '#FFB6C1',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  listContainer: {
    padding: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  itemCard: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#FFD1DC',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  itemPrice: {
    fontSize: 14,
    color: '#FF69B4',
    marginTop: 4,
    fontWeight: '600',
  },
  deleteText: {
    color: '#D81B60',
    fontWeight: 'bold',
  },
  footer: {
    padding: 16,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF69B4',
  },
  buttonPink: {
    backgroundColor: '#FF8DA1',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonBlue: {
    backgroundColor: '#64B5F6',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
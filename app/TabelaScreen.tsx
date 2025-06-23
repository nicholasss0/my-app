import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ThemedButton } from '@/components/ThemedButton';

const TabelaScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [dados, setDados] = useState([
    { nome: 'João', idade: 25, cidade: 'São Paulo' },
    { nome: 'Maria', idade: 30, cidade: 'Rio de Janeiro' },
    { nome: 'Pedro', idade: 22, cidade: 'Belo Horizonte' },
    { nome: 'Ana', idade: 28, cidade: 'Curitiba' },
  ]);

  useEffect(() => {
    if (route.params && (route.params as any).novoUsuario) {
      const { novoUsuario } = route.params as any;
      setDados((prevDados) => [...prevDados, novoUsuario]);
    }
  }, [route.params]);

  const excluirUsuario = (index: number) => {
    setDados((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Tabela de Usuários</Text>
      <ScrollView>
        <View>
          <View style={styles.header}>
            <Text style={[styles.celula, styles.headerTexto]}>Nome</Text>
            <Text style={[styles.celula, styles.headerTexto]}>Idade</Text>
            <Text style={[styles.celula, styles.headerTexto]}>Cidade</Text>
            <Text style={[styles.celula, styles.headerTexto]}>Ação</Text>
          </View>

          {dados.map((item, index) => (
            <View
              key={index}
              style={[styles.linha, index % 2 === 0 ? styles.linhaPar : styles.linhaImpar]}
            >
              <Text style={styles.celula}>{item.nome}</Text>
              <Text style={styles.celula}>{item.idade}</Text>
              <Text style={styles.celula}>{item.cidade}</Text>
              <TouchableOpacity
                onPress={() => excluirUsuario(index)}
                style={styles.botaoExcluir}
              >
                <Text style={styles.textoExcluir}>X</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <ThemedButton
          title="Adicionar"
          onPress={() => navigation.navigate('FormScreen')}
          lightColor="#fff44d"
          darkColor="#f7e600"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#e2e2e2',
    flexDirection: 'column',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  header: {
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: '#181e00',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  headerTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
  linha: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
  },
  linhaPar: {
    backgroundColor: '#b8ee3d',
  },
  linhaImpar: {
    backgroundColor: '#e2e2e2',
  },
  celula: {
    width: 100,
    padding: 10,
    textAlign: 'left',
  },
  botaoExcluir: {
    backgroundColor: '#ff4d4d',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 4,
  },
  textoExcluir: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default TabelaScreen;

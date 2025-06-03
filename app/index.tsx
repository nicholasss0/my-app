import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Button, GestureResponderEvent } from 'react-native';

import { ThemedButton } from '@/components/ThemedButton';


const TabelaScreen = () => {
  const dados = [
    { nome: 'João', idade: 25, cidade: 'São Paulo' },
    { nome: 'Maria', idade: 30, cidade: 'Rio de Janeiro' },
    { nome: 'Pedro', idade: 22, cidade: 'Belo Horizonte' },
    { nome: 'Ana', idade: 28, cidade: 'Curitiba' },
  ];

  function onPressLearnMore(event: GestureResponderEvent): void {
    throw new Error('Function not implemented.');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Tabela de Usuários</Text>
      <ScrollView>
        <View>
          <View style={styles.header}>
            <Text style={[styles.celula, styles.headerTexto]}>Nome</Text>
            <Text style={[styles.celula, styles.headerTexto]}>Idade</Text>
            <Text style={[styles.celula, styles.headerTexto]}>Cidade</Text>
          </View>
          {dados.map((item, index) => (
            <View
              key={index}
              style={[styles.linha, index % 2 === 0 ? styles.linhaPar : styles.linhaImpar]}
            >
              <Text style={styles.celula}>{item.nome}</Text>
              <Text style={styles.celula}>{item.idade}</Text>
              <Text style={styles.celula}>{item.cidade}</Text>
            </View>
          ))}
        </View>

      <ThemedButton
        title="Submit"
        onPress={() => console.log('clicado')}
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
    alignContent: 'center',
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
  },
  linhaPar: {
    backgroundColor: '#b8ee3d',
  },
  linhaImpar: {
    backgroundColor: '#e2e2e2',
  },

  celula: {
    flex: 1,
    padding: 10,
    textAlign: 'left',
  },

});

export default TabelaScreen;

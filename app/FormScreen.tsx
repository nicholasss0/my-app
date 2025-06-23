// FormScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function FormScreen({ route }: any) {
    const navigation = useNavigation();
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [cidade, setCidade] = useState('');

    const handleSubmit = () => {
        if (nome && idade && cidade) {
            const novoUsuario = {
                nome,
                idade: parseInt(idade),
                cidade,
            };

            navigation.navigate('TabelaScreen', { novoUsuario }); // envia os dados para TabelaScreen
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Adicionar Usuário</Text>
            <TextInput placeholder="Nome" style={styles.input} value={nome} onChangeText={setNome} />
            
            <TextInput placeholder="Idade" style={styles.input} keyboardType="numeric" value={idade} onChangeText={setIdade} />

            <TextInput placeholder="Cidade" style={styles.input} value={cidade} onChangeText={setCidade} />

            <Button title="Salvar" onPress={handleSubmit} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
         flex: 1, 
         padding: 16, 
         justifyContent: 'center' 
        },

    titulo: { 
        fontSize: 24, 
        marginBottom: 16, 
        textAlign: 'center' 
    },
    input: { 
        borderWidth: 1, 
        borderColor: '#ccc', 
        padding: 8, 
        marginBottom: 12, 
        borderRadius: 4 
    },
});

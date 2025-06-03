import { View, Text, StyleSheet } from 'react-native';

export default function Form() {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Formulário aqui</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        fontSize: 24,
    },
});
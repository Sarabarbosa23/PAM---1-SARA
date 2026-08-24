import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#141416',
        padding: 20,
    },

    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginTop: 30,
        marginBottom: 8,
    },

    subtitulo: {
        fontSize: 16,
        color: '#A8A8B3',
        marginBottom: 25,
    },

    item: {
        width: '100%',
        backgroundColor: '#24242e',
        borderRadius: 15,
        marginBottom: 18,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#37375c',
    },

    // Espaço da imagem
    imagem: {
        width: '100%',
        height: 420,
        resizeMode: 'cover',
    },

    informacoes: {
        padding: 15,
    },

    nome: {
        fontSize: 21,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 8,
    },

    ano: {
        fontSize: 15,
        color: '#B45CFF',
        fontWeight: 'bold',
        marginBottom: 6,
    },

    categoria: {
        fontSize: 14,
        color: '#FF4F81',
        fontWeight: '600',
        marginBottom: 10,
    },

    nota: {
        fontSize: 16,
        color: '#FFD700',
        fontWeight: 'bold',
    },

});

export default styles;
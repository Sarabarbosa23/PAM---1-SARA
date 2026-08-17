import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList, Image } from 'react-native';
import styles from './estilo/Estilo.js';

export default function App() {

    const series = [
        {
            id: '1',
            nome: 'The Last of Us',
            ano: '2023',
            genero: 'Drama • Ação',
            nota: '9.1',
            imagem: 'https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg'
        },
        {
            id: '2',
            nome: 'Wednesday',
            ano: '2022',
            genero: 'Fantasia • Mistério',
            nota: '8.0',
            imagem: 'https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg'
        },
        {
            id: '3',
            nome: 'Stranger Things',
            ano: '2022',
            genero: 'Ficção • Terror',
            nota: '8.7',
            imagem: 'https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg'
        },
        {
            id: '4',
            nome: 'Sterlig Point',
            ano: '2026',
            genero: 'Drama • Romance',
            nota: '8.0',
            imagem: 'https://br.web.img2.acsta.net/c_310_420/img/2f/14/2f149683778ffcef19e27fca0b7569cc.jpg'
        },
        {
            id: '5',
            nome: 'The White Lotus',
            ano: '2025',
            genero: 'Drama • Comédia',
            nota: '8.0',
            imagem: 'https://image.tmdb.org/t/p/w500/5s7sGz1o8Q8y9X7Y7x7x7x7x7x.jpg'
        },
        {
            id: '6',
            nome: 'House of the Dragon',
            ano: '2024',
            genero: 'Fantasia • Drama',
            nota: '8.3',
            imagem: 'https://image.tmdb.org/t/p/w500/7QMsOTMUswlwxJP0rTTZfmz2tX2.jpg'
        },
        {
            id: '7',
            nome: 'Bandi',
            ano: '2026',
            genero: 'Drama • Suspense',
            nota: '6 • 0',
            imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Ar2Goh86nNsoGv9oRLn8J9GsYLK0IhW0_aMrqVJS3g&s=10'
        },
    ];

    return (
        <View style={styles.container}>

            <StatusBar style="light" />

            <Text style={styles.titulo}>
                🎬 Séries em Destaque
            </Text>

            <Text style={styles.subtitulo}>
                As séries mais famosas de 2022 a 2026
            </Text>

            <FlatList
                data={series}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}

                renderItem={({ item }) => (

                    <View style={styles.item}>

                        {/* IMAGEM DA SÉRIE */}
                        <Image
                            source={{ uri: item.imagem }}
                            style={styles.imagem}
                        />

                        <View style={styles.informacoes}>

                            <Text style={styles.nome}>
                                {item.nome}
                            </Text>

                            <Text style={styles.ano}>
                                📅 {item.ano}
                            </Text>

                            <Text style={styles.categoria}>
                                {item.genero}
                            </Text>

                            <Text style={styles.nota}>
                                ⭐ {item.nota}
                            </Text>

                        </View>

                    </View>
                )}
            />

        </View>
    );
}
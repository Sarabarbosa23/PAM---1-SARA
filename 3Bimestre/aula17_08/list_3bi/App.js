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
            nome: 'Off campus',
            ano: '2026',
            genero: 'Romance • Comédia romântica',
            nota: '8.0',
            imagem: 'https://static.wikia.nocookie.net/offcampus/images/3/3d/Poster_T1x1.jpg/revision/latest?cb=20260501000121&path-prefix=pt-br'
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
            nome: 'Bridgerton',
            ano: '2020',
            genero: 'Romance • Drama de época',
            nota: '8.5',
            imagem: 'https://http2.mlstatic.com/D_NQ_NP_885863-MLB45511162747_042021-O.webp'
        },
        {
            id: '6',
            nome: 'La casa de papel',
            ano: '2017',
            genero: 'Drama policial • Suspense',
            nota: '8.0',
            imagem: 'https://www.quadrorama.com.br/wp-content/uploads/2021/10/La-Casa-De-Papel-capa-7778568d.png'
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
                As séries mais famosas de 2017 a 2026
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
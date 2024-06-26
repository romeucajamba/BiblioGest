import { View, Text, TextInput, ScrollView, Image, TouchableOpacity } from "react-native";

//Estilo da página
import styles from "./styles";

//Icones
// Biblioteca de icons
import { AntDesign,  SimpleLineIcons,  FontAwesome5 } from '@expo/vector-icons';

//Imagens
import livro1 from '../../../assets/AMaiorFlordoMundo1.png';
import livro2 from '../../../assets/AMaiorFlordoMundo2.png';
import livro3 from '../../../assets/AMaiorFlordoMundo4.png';
import livro4 from '../../../assets/JoséSaramago.png';
import livro5 from '../../../assets/AMaiorFlordoMundo4.png';
import livro6 from '../../../assets/AMaiorFlordoMundo1.png';
import livro7 from '../../../assets/JoséSaramago.png';
import livro8 from '../../../assets/AMaiorFlordoMundo2.png';



export function Books({navigation}){

    function goProfile(){
        navigation.navigate('Profile')
    }

    function goSearch(){
        navigation.navigate('Books')
    }
    function goHome(){
        navigation.navigate('Home')
    }

    function goReserva(){
        navigation.navigate('Reserva')
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Busca avançada</Text>

                <View style={styles.searchContainer}>
                    <TextInput placeholder="Pesquise pelo título ou autor" style={styles.serach}/>
                    <FontAwesome5 name="filter" size={30} color="#AA4700" style={styles.filter}/>
                </View>
            </View>

            <ScrollView>
                <View style={styles.livro}>
                    <View style={styles.containerImage}>
                        <Image source={livro1} style={styles.imageLeft} />
                        <Text style={styles.author}>A Maior Flor do Mundo</Text>
                        <Text style={styles.book}>José Saramago</Text>
                    </View>

                    <View style={styles.containerImageRigth}>
                         <Image source={livro2} style={styles.imageRight}/>
                         <Text style={styles.authorRight}>A Maior Flor do Mundo</Text>
                        <Text style={styles.bookLft}>José Saramago</Text>
                    </View>
                </View>

                <View style={styles.livro}>
                    <View style={styles.containerImage}>
                        <Image source={livro3} style={styles.imageLeft} />
                        <Text style={styles.author}>A Maior Flor do Mundo</Text>
                        <Text style={styles.book}>José Saramago</Text>
                    </View>

                    <View style={styles.containerImageRigth}>
                         <Image source={livro4} style={styles.imageRight}/>
                         <Text style={styles.authorRight}>A Maior Flor do Mundo</Text>
                        <Text style={styles.bookLft}>José Saramago</Text>
                    </View>
                </View>

                <View style={styles.livro}>
                    <View style={styles.containerImage}>
                        <Image source={livro5} style={styles.imageLeft} />
                        <Text style={styles.author}>A Maior Flor do Mundo</Text>
                        <Text style={styles.book}>José Saramago</Text>
                    </View>

                    <View style={styles.containerImageRigth}>
                         <Image source={livro6} style={styles.imageRight}/>
                         <Text style={styles.authorRight}>A Maior Flor do Mundo</Text>
                        <Text style={styles.bookLft}>José Saramago</Text>
                    </View>
                </View>

                <View style={styles.livro}>
                    <View style={styles.containerImage}>
                        <Image source={livro7} style={styles.imageLeft} />
                        <Text style={styles.author}>A Maior Flor do Mundo</Text>
                        <Text style={styles.book}>José Saramago</Text>
                    </View>

                    <View style={styles.containerImageRigth}>
                         <Image source={livro8} style={styles.imageRight}/>
                         <Text style={styles.authorRight}>A Maior Flor do Mundo</Text>
                        <Text style={styles.bookLft}>José Saramago</Text>
                    </View>
                </View>

           </ScrollView>

           <View style={styles.navigationBar}>
                <TouchableOpacity onPress={goHome}>
                    <AntDesign name="home" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={goProfile}>
                    <AntDesign name="user" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={goSearch}> 
                        <AntDesign name="search1" size={30} color="black" />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={goReserva}>
                        <SimpleLineIcons name="book-open" size={30} color="black" />
                </TouchableOpacity>
                
           </View>

        </View>
    )
}

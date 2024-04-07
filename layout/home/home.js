import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";

// Biblioteca de icons
import { AntDesign,  SimpleLineIcons } from '@expo/vector-icons';

import styles from './styles';


//Imagens
import livro1 from '../../assets/JoséSaramago.png';
import livro2 from  '../../assets/AMaiorFlordoMundo2.png';
import livro3  from '../../assets/AMaiorFlordoMundo1.png';
import livro4 from '../../assets/AMaiorFlordoMundo4.png';
import livro5 from '../../assets/AMaiorFlordoMundo4.png';
import livro6 from '../../assets/JoséSaramago.png';
import livro7 from '../../assets/AMaiorFlordoMundo4.png';
import livro8 from '../../assets/JoséSaramago.png';



export function Home({navigation}){
    
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
        <View style={styles.conatiner}>
           <View style={styles.header}>
                <Text style={styles.title}>Rosária Malheiro</Text>
                <ScrollView  horizontal showsHorizontalScrollIndicator={false} style={styles.scrool}>
                        <Text style={styles.options}>Todos</Text>
                        <Text style={styles.options}>Contos</Text>
                        <Text style={styles.options}>Ficção</Text>
                        <Text style={styles.options}>Novela</Text>
                        <Text style={styles.options}>Romace</Text>
                        <Text style={styles.options}>Drama</Text>
                        <Text style={styles.options}>Terror</Text>
                </ScrollView>
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
                        <SimpleLineIcons name="book-open" size={30} color="black" Weight={500} />
                </TouchableOpacity>
                
           </View>
        </View>
    )
}
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity } from "react-native";
//Icones
// Biblioteca de icons
import { AntDesign,  SimpleLineIcons,  FontAwesome5, Ionicons } from '@expo/vector-icons';

//meu estilo
import styles from "./styles";

//Imagens
const flower = require('../../../../assets/AMaiorFlordoMundo2.png');
const flower2 = require('../../../../assets/AMaiorFlordoMundo4.png');
const flowe3 = require('../../../../assets/JoséSaramago.png')



export function History({navigation}){

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
                <View style={styles.textAndBackButton}>
                    
                    <TouchableOpacity style={styles.back}>
                        <Ionicons name="chevron-back" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.myHistoryText}>O meu histórico</Text>
                </View>
                
                <View style={styles.searchContainer}>
                    <TextInput placeholder="Pesquise pelo título ou autor" style={styles.serach}/>
                    <FontAwesome5 name="filter" size={35} color="#AA4700" style={styles.filter}/>
                </View>
                
            </View>

            <ScrollView>
               <View style={styles.bookContainer}>
                    <View style={styles.containerImage}>
                        <Image source={flower} style={styles.image} />
                        <View style={styles.txtConatiner}>
                            <Text style={styles.author}>A Maior Flor do Mundo</Text>
                            <Text style={styles.book}>José Saramago</Text>
                            <Text style={styles.inf}>
                                Levante a obra dentro de 24h, ou a sua reserva será anulada!
                            </Text>
                        </View>
                    </View>

                    <View style={styles.containerImage}>
                        <Image source={flower2} style={styles.image}/>
                        <View style={styles.txtConatiner}>
                            <Text style={styles.author}>A Maior Flor do Mundo</Text>
                            <Text style={styles.book}>José Saramago</Text>
                            <Text style={styles.inf}>
                                Levante a obra dentro de 24h, ou a sua reserva será anulada!
                            </Text>
                        </View>
                    </View>

                    <View style={styles.containerImage}>
                        <Image source={flowe3} style={styles.image}/>
                        <View style={styles.txtConatiner}>
                            <Text style={styles.author}>A Maior Flor do Mundo</Text>
                            <Text style={styles.book}>José Saramago</Text>
                            <Text style={styles.inf}>
                                Levante a obra dentro de 24h, ou a sua reserva será anulada!
                            </Text>
                        </View>
                    </View>

               </View>
            </ScrollView>

            <View style={styles.navigationBar}>
                <TouchableOpacity onPress={goHome}>
                    <AntDesign name="home" size={35} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={goProfile}>
                    <AntDesign name="user" size={35} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={goSearch}> 
                        <AntDesign name="search1" size={35} color="black" />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={goReserva}>
                        <SimpleLineIcons name="book-open" size={35} color="black" />
                </TouchableOpacity>
                
           </View>
        </View>
    )
}
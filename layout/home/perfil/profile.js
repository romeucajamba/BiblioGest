import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
// Biblioteca de icons
import { AntDesign,  SimpleLineIcons, FontAwesome, Fontisto, Entypo } from '@expo/vector-icons'

//Estilo da página
import styles from './styles';


const profileImage = require('../../../assets/profile.png');

const perfil = require('../../../assets/Perfil.png')


export function Profile({navigation}){

    function goHome(){
        navigation.navigate('Home')
    }

    function out(){
        navigation.navigate('Login')
    }

    function goProfile(){
        navigation.navigate('Profile')
    }

    function goSearch(){
        navigation.navigate('Books')
    }

    function goReserva(){
        navigation.navigate('Reserva')
    }

    function goHistory(){
        navigation.navigate('History')
    }

    function goEdit(){
        navigation.navigate('Edit')
    }

    return(
        <View style={styles.container}>

            <View style={styles.header}>
                 <Text style={styles.status}>Minha conta</Text>

                 <View style={styles.userIformation}>

                    <Image source={profileImage} style={styles.imageProfile}/>
                    <Text style={styles.name}>Rosária Malheiro</Text>
                    <Text style={styles.nameAndemail}>rosariamalheiro@gmail.com</Text>

                 </View>
            </View>

            <ScrollView style={styles.editContainer}>

               <View style={styles.bottons}>
                     <TouchableOpacity style={styles.btn} onPress={goEdit}>
                        <FontAwesome name="edit" size={20} color="white" style={styles.icons}/>
                        <Text style={styles.texto}>Editar dados Pessoais</Text>
                    </TouchableOpacity>

                     <TouchableOpacity style={styles.btn} onPress={goHistory}>
                        <Fontisto name="history" size={20} color="white" style={styles.icons}/>
                        <Text style={styles.texto}>O meu histórico</Text>
                     </TouchableOpacity>

                    <TouchableOpacity onPress={out} style={styles.btn}>
                         <Entypo name="log-out" size={20} color="white" style={styles.icons}/>
                          <Text style={styles.texto}>Terminar sessão</Text>
                    </TouchableOpacity>
               </View>
                    <View style={styles.imgPerfil}>
                        <Image source={perfil} style={styles.vetorperfil}/>
                    </View>
            </ScrollView>
            
            <View style={styles.navigationBar}>
                <TouchableOpacity onPress={goHome}>
                    <AntDesign name="home" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={goProfile}>
                    <AntDesign name="user" size={30} color="black"/>
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
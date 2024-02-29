///Meus componentes nativos
import { View, Text, TextInput, TouchableOpacity, Image  } from "react-native";

//Meus estilos
import styles from "./styles";

//Imagens importadas
const vetorRedounded = require('../../../assets/Vector(1).svg');
const vetroRight = require('../../../assets/Vector.svg');
const vetorLeft = require('../../../assets/Vector(2).svg');
const draw = require('../../../assets/draw.svg');



export function LoginScreen({navigation}){
            function GoSignUp(){
                navigation.navigate('SingUp')
            }

            function getPassword(){
                navigation.navigate('PassWord')
            }

            function goHome(){
                navigation.navigate('Home')
            }

    return(
        <View style={styles.container}>
            <View style={styles.header}>

                <View style={styles.logo}>
                        <Image source={vetorRedounded} style={styles.redounded}/>
                    <View style={styles.books}>
                            <Image source={vetroRight} style={styles.vetorRight}/>
                            <Image source={vetorLeft} style={styles.vetorLeft}/>
                    </View>
                    <Text style={styles.title}>BIBLIOGEST</Text>
                </View>
            </View>

                <View style={styles.form}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput placeholder="Insira o seu email" style={styles.input}/>
                    <Text style={styles.labelPass}>Senha</Text>
                    <TextInput placeholder="Insira a sua senha" style={styles.inputPass}/>
                
                    <TouchableOpacity style={styles.btn} onPress={goHome}>
                        <Text style={styles.text}>Entrar</Text>
                    </TouchableOpacity>
                   
                    <TouchableOpacity style={styles.singUp} onPress={GoSignUp}>Criar conta</TouchableOpacity>
                    <TouchableOpacity style={styles.forgot} onPress={getPassword}>Esqueci a minha Senha</TouchableOpacity>
                </View>

                <Image source={draw} style={styles.draw}/>
               
        </View>
    )
}
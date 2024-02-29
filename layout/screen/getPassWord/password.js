import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";

//Estilos da aplicação
import styles from './styles';

//Importando a Imagem
import PassImage from '../../../assets/pass.svg';



export function PassWord(){
    return(
        <View style={styles.container}>
                <View style={styles.header}>
                <Text style={styles.title}>Recuperar Senha</Text>
            </View>
            <View style={styles.information}>
                    <Text>
                            Queira por favor inserir o seu email. 
                            Irá receber na sua caixa um link para a 
                            defininição da nova senha.
                    </Text>
            </View>

            <View style={styles.form}>
                <Text style={styles.label}>Email</Text>
                <TextInput placeholder="Insira o seu email" style={styles.input}/>
                
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.text}>Recuperar</Text>
                </TouchableOpacity>
               
               </View>

               <Image source={PassImage} style={styles.draw}/>
           
    </View>
    )
}
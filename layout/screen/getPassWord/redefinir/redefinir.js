import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";

//Estilos da aplicação
import styles from './styles';

//Importando a Imagem
import PassImage from '../../../../assets/pass.svg';



export function RedefinirPassWord(){
    return(
        <View style={styles.container}>
                <View style={styles.header}>
                <Text style={styles.title}>Redifinir senha</Text>
            </View>

            <View style={styles.form}>
                <Text style={styles.label}>Nova senha</Text>
                <TextInput placeholder="Insira o seu email" style={styles.input}/>
                <Text style={styles.label}>Confirmar nova senha</Text>
                <TextInput placeholder="Insira o seu email" style={styles.input}/>
                
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.text}>Recuperar</Text>
                </TouchableOpacity>
               
               </View>

               <Image source={PassImage} style={styles.draw}/>
           
    </View>
    )
}
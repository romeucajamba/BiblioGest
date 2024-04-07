import { View, Text, TextInput, TouchableOpacity, Image  } from "react-native";

// Meus estilos
//Meus estilos
import styles from "./styles";

export function SingUp({navigation}){
        function GoLoginScreen(){
            navigation.navigate('Login')
        }
        
    return(
        <View style={styles.container}>
                <View style={styles.header}>
                <Text style={styles.title}>Criar conta</Text>
            </View>
        

            <View style={styles.form}>
                <Text style={styles.label}>Nome</Text>
                <TextInput placeholder="Insira seu email" style={styles.inputPass}/>
                <Text style={styles.label}>Email</Text>
                <TextInput placeholder="Insira o seu email" style={styles.input}/>
                <Text style={styles.label}>Telemóvel</Text>
                <TextInput placeholder="Insira seu telemóvel" style={styles.inputPass}/>
                <Text style={styles.label}>Senha</Text>
                <TextInput placeholder="Insira a sua senha" style={styles.inputPass}/>
                <Text style={styles.label}>Confirmar senha</Text>
                <TextInput placeholder="Confirme a sua senha" style={styles.inputPass}/>
            
                <TouchableOpacity style={styles.btn} onPress={GoLoginScreen}>
                    <Text style={styles.text}>Criar</Text>
                </TouchableOpacity>
               
                <TouchableOpacity style={styles.forgot} onPress={GoLoginScreen}>Já tem uma conta? <Text style={styles.goLogin}>Faça o login</Text></TouchableOpacity>
            </View>

            
           
    </View>
    )
}
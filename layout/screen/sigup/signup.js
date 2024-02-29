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
                <Text style={styles.labelPass}>Nome</Text>
                <TextInput placeholder="Insira a sua senha" style={styles.inputPass}/>
                <Text style={styles.label}>Email</Text>
                <TextInput placeholder="Insira o seu email" style={styles.input}/>
                <Text style={styles.labelPass}>Telemóvel</Text>
                <TextInput placeholder="Insira a sua senha" style={styles.inputPass}/>
                <Text style={styles.labelPass}>Senha</Text>
                <TextInput placeholder="Insira a sua senha" style={styles.inputPass}/>
                <Text style={styles.labelPass}>Confirmar senha</Text>
                <TextInput placeholder="Insira a sua senha" style={styles.inputPass}/>
            
                <TouchableOpacity style={styles.btn} onPress={GoLoginScreen}>
                    <Text style={styles.text}>Criar</Text>
                </TouchableOpacity>
               
                <TouchableOpacity style={styles.forgot} onPress={GoLoginScreen}>Já tem uma conta? <Text style={styles.goLogin}>Faça o login</Text></TouchableOpacity>
            </View>

            
           
    </View>
    )
}
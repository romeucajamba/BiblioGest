import { View,  Text, Image, TextInput, TouchableOpacity } from "react-native";
import styles from './styles';
import {  Ionicons } from '@expo/vector-icons';




const profileImage = require('../../../../assets/profile.png')



export function editData(){

    return(
        <View style={styles.container}>
            <View style={styles.header}>

                 <View style={styles.data}>
                    <TouchableOpacity style={styles.back}>
                         <Ionicons name="chevron-back" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.dataTxt}>Dados pessoais</Text>
                 </View>

                 <View style={styles.editContainer}>

                    <View style={styles.editData}>
                        <Image source={profileImage} style={styles.imageProfile}/>
                        <TouchableOpacity>
                            <Text>Editar</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.personalData}>
                        <Text>Rosária Malheiro</Text>
                        <Text>rosariamalheiro@gmail.com</Text>
                    </View>
                 </View>

            </View>

            <View style={styles.form}>
            <View>
                <Text>Nome</Text>
                <TextInput placeholder="Rosária Malheiro"/>
                <Text>Email</Text>
                <TextInput placeholder="rosariamalheiro@gmail.com"/>
                <Text>Telemóvel</Text>
                <TextInput placeholder="943558106"/>
                <Text>Morada</Text>
                <TextInput placeholder="AV.Murtala Muhammed, Salga, rua 12"/>
            </View>

            <View>
                <TouchableOpacity>
                    <Text>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Confirma</Text>
                </TouchableOpacity>
            </View>
        </View>
        </View>
    )
}
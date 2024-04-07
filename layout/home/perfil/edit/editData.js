import { View,  Text, Image, TextInput, TouchableOpacity } from "react-native";
import styles from './styles';
import {  Ionicons, AntDesign,  SimpleLineIcons } from '@expo/vector-icons';




const profileImage = require('../../../../assets/profile.png')



export function editData({navigation}){

    function back(){
        navigation.navigate('Profile')
    }

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

                 <View style={styles.data}>
                    <TouchableOpacity style={styles.back} onPress={back}>
                         <Ionicons name="chevron-back" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.dataTxt}>Dados pessoais</Text>
                 </View>

                 <View style={styles.editContainer}>

                    <View style={styles.editData}>
                        <Image source={profileImage} style={styles.imageProfile}/>
                        <TouchableOpacity style={styles.btnEdit}>
                            <Text style={styles.txtEdit}>Editar</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.personalData}>
                        <Text style={styles.nameData}>Rosária Malheiro</Text>
                        <Text style={styles.emailData}>rosariamalheiro@gmail.com</Text>
                    </View>
                 </View>

            </View>

            <View style={styles.form}>
            <View>
                <Text style={styles.label}>Nome</Text>
                <TextInput placeholder="Rosária Malheiro" style={styles.input}/>
                <Text style={styles.label}>Email</Text>
                <TextInput placeholder="rosariamalheiro@gmail.com" style={styles.input}/>
                <Text style={styles.label}>Telemóvel</Text>
                <TextInput placeholder="943558106" style={styles.input}/>
                <Text style={styles.label}>Morada</Text>
                <TextInput placeholder="AV.Murtala Muhammed, Salga, rua 12" style={styles.input}/>
            </View>

            <View style={styles.btnConatiner}>
                <TouchableOpacity style={styles.btnLeft}>
                    <Text style={styles.text}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnRight}>
                    <Text style={styles.text}>Confirma</Text>
                </TouchableOpacity>
            </View>
        </View>

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
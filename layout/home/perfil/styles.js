import { StyleSheet } from "react-native";


const styles = StyleSheet.create(
    {
        container:{
            flex: 1,
            flexDirection: 'column',
            backgroundColor: '#fff',
        },
        header:{
                width: 'auto',
                height:'230px',
                flexDirection: 'column',
                marginTop: '50px'
        },

        status:{
                fontSize: '20px',
                fontWeight: '500',
                textAlign: 'center',   
        },

        userIformation:{
            width: 'auto',
            height: '200px',
        },

        imageProfile:{
            width: '142px',
            height: '142px',
            marginLeft: '30%',
            marginTop: '4px',
        },
        name:{
            marginTop: '10px',
            textAlign: 'center',
        },
        nameAndemail:{
            textAlign: 'center',
        },
        editContainer:{
            width: 'auto',
            height: '300px',
            flexDirection: 'column',
        },
        bottons:{
            width: 'auto',
            height: '200px',
            marginTop: '30px',
        },
        btn:{
            width: '240px',
            height: '39px',
            backgroundColor: '#AA4700',
            marginTop: '20px',
            marginLeft: '15%',
            borderRadius: '10%',
            flexDirection: 'row',
        },
        texto:{
            color: '#fff',
            fontWeight: '900',
            marginLeft: '12%',
            marginTop: '5%',
        },
        icons:{
            marginTop: '10px',
            marginLeft: '4%'
        },
        imgPerfil:{
            width: '400px',
            height: '220px',
        },
        vetorperfil:{
            width: '212px',
            height: '160px',
            marginLeft: '20%',
            marginTop: '10%',
        },

        navigationBar:{
            flexDirection: 'row',
            width: 'auto',
            height: '61px',
            alignItems: 'flex-end',
            justifyContent: 'space-evenly',
            borderTopWidth: '0.5px',
            borderTopLeftRadius: '12%',
            borderTopRightRadius: '12%',
            elevation: 20,
            bottom: '0'
        },
    }
)

export  default styles;
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
    },
    header:{
        width: 'auto',
        flexDirection: 'column',
        height: '260px',
        flexDirection:"column",
        marginTop: '60px'
    },
    data:{
        flexDirection: 'row',
        width: 'auto', 
        marginTop: '30px',
    },
    back:{
        left: '2%',
        marginLeft: '30px'
    },
    dataTxt:{
        marginLeft: '50px',
        fontSize: '20px',
        fontWeight: '500'
    },
    editContainer:{
        flexDirection: 'column',
        width: 'auto'
    },
    editData:{
        flexDirection: 'row'
    },
    imageProfile:{
        width: '142px',
        height: '142px',
        marginLeft: '40px',
        marginTop: '4px',
    },
    btnEdit:{
        backgroundColor: '#AA4700',
        width: '100px',
        height: '40px',
        borderRadius: '5px',
        marginTop: '50px',
        marginLeft: '10%',
        padding: '4px'
    },
    txtEdit:{
        fontSize: '20px',
        fontWeight: '500',
        textAlign: 'center',
        color: 'white'
    }, 
    personalData:{
        flexDirection: 'column',
        width: '200px',
        marginTop: '10px',
        marginLeft: '5%',
    },
    nameData:{
        textAlign: 'center',
        fontWeight: '500'
    },
    emailData:{
        textAlign: 'center'
    },
    form:{
        flexDirection: 'column',
        width: 'auto',
        height: '420px',
    },
    label:{
        fontSize: '15px',
        fontWeight: '400',
        lineHeight: '22px',
        left: '25px',
        top: '10px'
    },
    input:{
        width: '310px',
        height: '40px',
        left: '25px',
        borderRadius: '6px',
        backgroundColor: '#ECECEC',
        paddingLeft: '10px',
        marginLeft: '25px',
        color: '',
        marginTop: '17px',
    },
    btnConatiner:{
        flexDirection: 'row'
    },
    btnLeft:{
        width: '131px',
        height: '40px',
        top: '30px',
        left: '25px',
        backgroundColor: '#AA4700',
        borderRadius: '6px',
        padding: '2px'
    },
    btnRight:{
        width: '131px',
        height: '40px',
        top: '30px',
        left: '70px',
        backgroundColor: '#AA4700',
        borderRadius: '6px',
        padding: '2px'
    },
    text:{
        color: '#ffffff',
        fontSize: '20px',
        fontWeight: '400',
        textAlign: 'center'
    },
    navigationBar:{
        flexDirection: 'row',
        height: '60px',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderTopWidth: '0.5px',
        borderTopLeftRadius: '12%',
        borderTopRightRadius: '12%',
        elevation: 20
    }
})

export  default styles;
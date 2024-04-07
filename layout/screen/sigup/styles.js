import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
    },
    header:{
        width: 'auto',
        height: '40px',
        marginTop: '20%',
    },
    title:{
        top: '15px',
        fontSize: '20px',
        fontWeight: '700',
        textAlign: 'center',
    },
    form:{
        width: 'auto',
        height: '550px',
        flexDirection: 'column',
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
    inputPass:{
        width: '310px',
        height: '40px',
        marginTop: '17px',
        left: '25px',
        borderRadius: '6px',
        backgroundColor: '#ECECEC',
        paddingLeft: '10px',
        marginLeft: '25px',
    },
    btn:{
        width: '131px',
        height: '34px',
        top: '60px',
        left: '110px',
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
    singUp:{
        color: '#AA4700',
        fontSize: '13px',
        fontWeight: '500',
        textAlign: 'center',
        left: '4px',
        top: '55px',
    },
    forgot:{
        color: '#000',
        fontSize: '13px',
        fontWeight: '500',
        textAlign: 'center',
        left: '80px',
        top: '75px',
        flexDirection: 'row',
        width: '198px', 
        gap: '6px'
    },
    goLogin:{
        color: '#AA4700',
    }
 
})

export default styles;
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
    },
    header:{
            flexDirection: 'column',
            width: 'auto',
            height: '250px',

    },
    logo:{
        top:'50px',
        justifyContent: 'center',
        alignItems: 'center',
    },
    redounded:{
            width: '50px',
            height: '50px',
    },
    books:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    vetorRight:{
        width: '58px',
        height: '78px',
        top: '3px',
        right: '5px',
    },
    vetorLeft:{
        width: '58px',
        height: '78px',
        top: '3px',
        left: '5px',
    },
    title:{
        top: '15px',
        fontSize: '20px',
        fontWeight: '700',
    },
    form:{
        height: '300px',
        flexDirection: 'column',
    },
    label:{
        fontSize: '15px',
        fontWeight: '400',
        lineHeight: '22px',
        left: '25px'
    },
    labelPass:{
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
        borderRadius: '10px',
        backgroundColor: '#ECECEC',
        paddingLeft: '10px',
        marginLeft: '25px',
        color: ''
    },
    inputPass:{
        width: '310px',
        height: '40px',
        marginTop: '11px',
        left: '25px',
        borderRadius: '10px',
        backgroundColor: '#ECECEC',
        paddingLeft: '10px',
        marginLeft: '25px',
    },
    btn:{
        width: '131px',
        height: '34px',
        top: '30px',
        left: '110px',
        backgroundColor: '#AA4700',
        borderRadius: '10px',
        padding: '2px'
    },
    text:{
        color: '#ffffff',
        fontSize: '20px',
        fontWeight: '600',
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
        color: '#AA4700',
        fontSize: '13px',
        fontWeight: '500',
        textAlign: 'center',
        left: '4px',
        top: '65px',
    },
    draw:{
        width: '230px',
        height: '180px',
        top: '20px',
        left: '50px'
    },
})

export default styles;
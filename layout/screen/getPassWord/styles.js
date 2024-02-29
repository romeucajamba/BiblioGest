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
    information:{
        width: '310px',
        height: '90px',
        marginTop: '30px',
        marginLeft: '25px'
    },
    form:{
        width: 'auto',
        height: '150px',
        flexDirection: 'column',
        marginTop: '20px'
    },
    label:{
        fontSize: '15px',
        fontWeight: '400',
        lineHeight: '22px',
        left: '25px',
        marginBottom: '10px'
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
    draw:{
        width: '250px',
        height: '150px',
        top: '30%',
        left: '50px'
    },
  
   
 
})

export default styles;
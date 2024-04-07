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
        height: '250px',
        flexDirection: 'column',
        marginTop: '60px'
    },
    label:{
        fontSize: '15px',
        fontWeight: '400',
        left: '25px',
        marginTop:'15px'
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
        marginTop: '8px'
    },
 
    btn:{
        width: '131px',
        height: '34px',
        top: '30px',
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
    draw:{
        width: '250px',
        height: '150px',
        top: '28%',
        left: '50px'
    },
  
   
 
})

export default styles;
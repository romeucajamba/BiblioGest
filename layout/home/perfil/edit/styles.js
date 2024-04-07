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
        height: '300px',
        flexDirection:"column",
        backgroundColor: 'blue'
    },
    data:{
        backgroundColor: 'red',
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
    imageProfile:{
        width: '142px',
        height: '142px',
        marginLeft: '30%',
        marginTop: '4px',
    },
    editContainer:{
        flexDirection: 'column',
        width: 'auto'
    },
    editData:{
        flexDirection: 'row'
    },
    form:{
        flexDirection: 'column'
    },
    personalData:{
        flexDirection: 'column'
    }
})

export  default styles;
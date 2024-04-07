import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
    },
    header:{
        height: 180,
        flexDirection:"column"
    },
    data:{
        backgroundColor: 'red',
        flexDirection: 'row',
        width: 'auto'
    },
    back:{
        left: '2%'
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
import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff'
    },
    header:{
        height: 180,
        flexDirection:"column"
    },
    textAndBackButton:{
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        top: '20%',
    },
    back:{
        left: '2%'
    },
    myHistoryText:{
        fontSize: 20,
        fontWeight: "bold",
        left: '15%'
    },
    searchContainer:{
        width: 'auto',
        height: '60px',
        flexDirection: 'row',
        marginTop: '40px',
    },
    serach:{
        width: '250px',
        height: '40px',
        marginLeft: '40px',
        borderRadius: '6px',
        paddingLeft: '10px',
        backgroundColor: '#ECECEC',
    },
    filter:{
        marginLeft: '18px',
    },

    bookContainer:{
        width: '500px',
        height: '290px',
        flexDirection: 'column',
        },

    containerImage:{
        height: '280px',
        flexDirection: 'row',
    },

    image:{
        width: '140px',
        height: '200px',
        left: '20px',
        top: '10px',    
        },
    txtConatiner:{
            backgroundColor: '',
            height: '170px',
            width: 200,
            marginLeft: '3%',
            marginTop: '2%'
        },
    author:{
        fontWeight: 'bold',
        marginTop: '20px',
        left: '20px',
        },
    book:{
        marginTop: '5px',
        left: '20px',
    },
    inf:{
        top: 10,
        fontSize: 10,
        left: 20
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

export default styles;
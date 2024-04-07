import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    header:{
        width: 'auto',
        height: '100px',
        flexDirection: 'column',
        marginTop: '20%',
    },
    title:{
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: '20px'
    },

    livro:{
        width: '500px',
        height: '290px',
        flexDirection: 'row'
        },
        
        containerImage:{
            width: '200px',
            height: '280px',
            flexDirection: 'column',
        },
        containerImageRigth:{
            width: '250px',
            height: '280px',
            flexDirection: 'column',
        },

        imageLeft:{
            width: '140px',
            height: '200px',
            left: '20px',
            top: '10px',    
            },
            
            imageRight:{
                width: '140px',
                height: '200px',
                left: '1px',
                top: '10px',
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
            
                bookLft:{
                    marginTop: '5px',
                    left: '6px',
                    },
            
                    authorRight:{
                        fontWeight: 'bold',
                        marginTop: '20px',
                        left: '2px',
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
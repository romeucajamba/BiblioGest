import { StyleSheet } from "react-native";



const styles = StyleSheet.create(
    {
        conatiner:{
            flex: 1,
            flexDirection: 'column',
            backgroundColor: '#FFFFFF',
        },
        header:{
            width: 'auto',
            height: '100px',
            flexDirection: 'column',
            marginTop: '50px'
        },

        title:{
                color: '#000',
                fontWeight: '700',
                marginLeft: '23px'
        },

        scrool:{
            width: 'auto',
            height: '80px',
            marginTop: '10px',
        },

        options:{
            color: '#000',
            fontWeight: '400',
            fontSize: '16px',
            marginLeft: '25px',
            marginTop: '10px',
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
            alignItems: 'flex-end',
            justifyContent: 'space-evenly',
            borderTopWidth: '0.5px',
            borderTopLeftRadius: '12%',
            borderTopRightRadius: '12%',
            elevation: 20
        }
    }
)

export default styles;
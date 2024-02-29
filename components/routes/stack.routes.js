//Importar a navegação em pilha
import {createNativeStackNavigator} from '@react-navigation/native-stack';


//As telas importadas

import {LoginScreen} from '../../layout/screen/Login/Login';
import { SingUp } from '../../layout/screen/sigup/signup';
import { PassWord } from '../../layout/screen/getPassWord/password';
import { Home } from '../../layout/home/home';
import { Profile } from '../../layout/home/perfil/profile';
import { Books } from '../../layout/home/books/books';
import { Reserva } from '../../layout/home/reservar/reserva';
import { History } from '../../layout/home/perfil/histroy/history'; 

const {Group, Screen, Navigator} = createNativeStackNavigator()
//Navigator Permite criar as navegações
//Screen é a tela, componente, cada Screen representa cada componente ou página ou tela da nossa aplicação
//Group permite que passemos configurações para um grupo de tela específico que queremos

export function StackRoutes() {
    return (
        <Navigator>

            <Group screenOptions={{ headerShown: false }}>
                
                <Screen
                    name='Login'
                    component={LoginScreen}
                />

                <Screen
                    name='SingUp'
                    component={SingUp}
                />
                
                <Screen 
                    name='PassWord'
                    component={PassWord}
                />
                <Screen 
                    name='Home'
                    component={Home}
                />
                <Screen
                    name='Profile'
                    component={Profile}
                />

                <Screen
                    name='History'
                    component={History}
                />

                <Screen 
                    name='Books'
                    component={Books}
                />
                <Screen 
                    name='Reserva'
                    component={Reserva}
                />
            </Group>
        </Navigator>
    );

}
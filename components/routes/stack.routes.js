//Importar a navegação em pilha
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LoginScreen} from '../../layout/screen/Login/Login';


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

                
            </Group>
        </Navigator>
    );

}
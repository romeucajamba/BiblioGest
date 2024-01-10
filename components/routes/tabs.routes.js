import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialIcons} from '@expo/vector-icons';

//Importação das telas
import { LoginScreen } from '../../layout/screen/Login/Login';
import { Home } from '../../layout/home/home';
import { Profile } from '../../layout/screen/perfil/profile';





const {Screen, Navigator, Group} =  createBottomTabNavigator()

export function TabsRoutes() {
    return (
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'blue'
            }}
        >

            <Group screenOptions={{ headerShown: false }}>
                
                <Screen
                    name='Login'
                    component={LoginScreen}
                    options={{
                        tabBarLabel: 'Login',
                        tabBarIcon: ({color, size}) =>{
                            <MaterialIcons
                                color={color}
                                size={size}
                            />
                        }
                    }}
                />
                <Screen
                    name='Home'
                    component={Home}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({color, size}) => {
                            <MaterialIcons
                                    name='add-to-home-screen'
                                    color={color}
                                    size={size}
                            />
                        }
                    }}
                />

                <Screen
                    name='Perfil'
                    component={Profile}
                    options={{
                        tabBarLabel:'Perfil',
                        tabBarIcon: ({color, size}) => {
                            <MaterialIcons
                                    name='supervised-user-circle'
                                    color={color}
                                    size={size}
                            />
                        }
                    }}
                />

                
            </Group>
        </Navigator>
    );

}

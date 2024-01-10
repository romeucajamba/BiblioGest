import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from './stack.routes';
import { TabsRoutes } from "./tabs.routes";


export function Routes() {
    return (
        <NavigationContainer>
            <StackRoutes />
        </NavigationContainer>
    );
}
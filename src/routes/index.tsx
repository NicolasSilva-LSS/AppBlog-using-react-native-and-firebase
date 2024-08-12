/* eslint-disable prettier/prettier */
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./stack.routes";
import AppTab from "./tab.routes";

function Routes()
{
    return (
        <NavigationContainer>
            <AppStack/>
        </NavigationContainer>
    );
}

export default Routes;
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react"
import CriaItem from "./CriaItem";
import EdidarItem from "./EditarItem";
import PaginaItem from "./item";
import LoginScreen from "./Login";
import Item from "./models/Item";
import PerfilScreen from './Perfil';
import TelaPricipalScreen from "./TelaPricipal";

const Navegacao: React.FC =() => {
    const Stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
        <Stack.Navigator>
         <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Perfil" component={PerfilScreen} />
          <Stack.Screen name="TelaPricipal" component={TelaPricipalScreen} />
          <Stack.Screen name="PaginaItem" component={PaginaItem} />
          <Stack.Screen name="EdidarItem" component={EdidarItem} />
          <Stack.Screen name="CriaItem" component={CriaItem} />

        </Stack.Navigator>
      </NavigationContainer>
    );
};
 
type StackParams = {
    Perfil: undefined,
    Login: undefined,
    TelaPricipal:undefined,
    PaginaItem: {item: Item},
    EdidarItem:{item: Item},
    CriaItem:undefined,
};



export default Navegacao
export type{ StackParams};

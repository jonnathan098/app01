import { View , Text, StyleSheet,Image, Button, Alert, TextInput, TouchableOpacity } from "react-native"
import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParams } from "./Navegacao";
import axios from "axios";
import { StackActions } from "@react-navigation/native";

const style = StyleSheet.create ({
    pagina:{
        flexGrow:1,
        backgroundColor: '#363636',
        justifyContent: 'center',
        alignItems: 'center',
    },
    botaomExculir:{
        fontSize: 24,
        width:'100%',
        height:'50%',
        borderWidth:1,
        backgroundColor: '#FF0000',
    },
    buttonEdidar:{
        backgroundColor:'#000000',
        alignItems:'center',
        color:'#FF0000',
        borderWidth:1,
        width:'100%',
        height:'50%',
        
    },
    TextButton:{
        color:'#F0F8FF',
        fontSize : 15,
    },
    container:{
        borderWidth:1,
        backgroundColor: '#F5FFFA',
        width:90,
        height:100,
        borderRadius:8,
    },
   
})
type Props = NativeStackScreenProps<StackParams,'PaginaItem'>;
const PaginaItem: React.FC <Props> = (props) =>{
    const item = props.route.params.item;

    const [loading, setLoading] = useState(false);

    const botaoLoginPressionado01 = () => {
        props.navigation.navigate('EdidarItem', {item: item});
    }

    const botaoRemoverPressionado = () => {
		setLoading(true);
		axios.delete(`http://localhost:4000/api/itens/${item.id}`)
		.then(() => {
			setLoading(false);
			props.navigation.pop(1);
			props.navigation.dispatch(StackActions.replace('Home'));
		})
		.catch(error => {
			alert(error.message);
			setLoading(false);
		});
		
	};
    return(
        <View style={style.pagina}>
        <Text>{item.descricao}</Text>
            <View style={style.container}>
             <TouchableOpacity style={style.buttonEdidar}onPress={botaoLoginPressionado01}>
                 <Text style={style.TextButton}>novo usuario</Text>
             </TouchableOpacity>
             <TouchableOpacity style={style.botaomExculir}onPress={botaoRemoverPressionado}>
                 <Text style={style.TextButton}>exculir ⌦</Text>
             </TouchableOpacity>
             </View>
        </View>
    );
};
export default PaginaItem
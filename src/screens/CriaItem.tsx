import { View,Text, TextInput,StyleSheet, Button } from "react-native"
import React, { useEffect, useState } from 'react';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParams } from "./Navegacao";
import axios from "axios";
import ItemForm, { ItemFormSaveEventHandler } from "../components/ItemForm";
import Loading from "../components/Loading";
const style =  StyleSheet.create ({
    pagina:{
        flexGrow:1,
        backgroundColor: '#DEB887',
        justifyContent: 'center',
        alignItems: 'center',
    },
    edidarItem:{
        borderWidth:1,
        backgroundColor: '#800000',
        width:450,
        height:250,
        justifyContent: 'center',
    },
    nome:{
     fontSize : 15,
     height:250,
     borderWidth:1,
     color:'#00FF00',
    },
    

})
type Props = NativeStackScreenProps<StackParams,'CriaItem'>;
const CriaItem :  React.FC  <Props> = (props) => {

    const botaoLoginPressionado01 = () => {
        props.navigation.navigate( 'TelaPricipal');
    }
    const [loading, setLoading] = useState(false);

	const itemFormSalvar: ItemFormSaveEventHandler = (item) => {
		setLoading(true);
		axios.post('http://localhost:4000/api/itens', item)
		.then(() => {
			setLoading(false);
			props.navigation.navigate('TelaPricipal');
		})
		.catch((error) => {
			setLoading(false);
			alert(error.message);
		});
	};
    return(
        <View>
        <ItemForm onSalvar={itemFormSalvar} />
        <Loading show={loading} />
    </View>
    )
};
export default CriaItem
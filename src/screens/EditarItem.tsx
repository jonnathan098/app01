import { View , StyleSheet, Button, TextInput,Text, TouchableOpacity} from "react-native"
import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParams } from "./Navegacao";
import Item from "./models/Item";
import { StackActions } from "@react-navigation/native";
import axios from "axios";
import ItemForm from "../components/ItemForm";
import Loading from "../components/Loading";


const style = StyleSheet.create ({
    pagina:{
        flexGrow:1,
        backgroundColor: '#808000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ItemEdidarNome:{
     fontSize : 15,
     height:'50%' ,
      borderWidth:1,
     backgroundColor: '#B0E0E6	',
    },
    ItemEdidarDescriçao:{
        fontSize : 15,
        height:'50%' ,
         borderWidth:1,
       
    },
    edidarItem:{
     borderWidth:1,
     backgroundColor: '#F5FFFA',
      width:450,
      height:250,
      justifyContent: 'center',
    },
})
type Props = NativeStackScreenProps<StackParams,'EdidarItem'>;

const EdidarItem: React.FC <Props> = (props) =>{
  const [loading, setLoading] = useState(false);
	const item = props.route.params.item;

	const itemFormSalvar = (item: Item) => {
		setLoading(true);
		axios.put(`http://localhost:4000/api/itens/${item.id}`, item)
		.then(() => {
			props.navigation.pop(1);
			props.navigation.dispatch(StackActions.replace('Item', {item}));
			setLoading(false);
		})
		.catch((error) => {
			alert(error.message);
			setLoading(false);
		});
		
	};

	return (
		<View>
			<ItemForm item={item} onSalvar={itemFormSalvar} />
			<Loading show={loading} />
		</View>
	);
};
export default EdidarItem
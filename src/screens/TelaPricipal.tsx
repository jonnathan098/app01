import { useFocusEffect } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { Button, FlatList, ListRenderItem, StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native';
import  image from '../../assets/thumb-1920-604626.png';
import Item from './models/Item';
import { StackParams } from './Navegacao';


const styles = StyleSheet.create({
	listItem: {
		backgroundColor: '#000000',
		padding: 20,
		marginBottom: 20,
	
	},
	listItemText: {
		alignItems: 'center',	
		fontSize: 24,
		color:'#FF0000',
	},
	botao:{
		fontSize : 24,
        borderWidth:1,
        backgroundColor: '#2E8B57',
        borderRadius:8,
		alignItems: 'center',	
	},
	aliamendo:{
		alignItems: 'flex-end',	
	},
	aliamendo01:{
		alignItems: 'center',
	},
	image: {
		width:100,
		height:55,
	},
})
type Props = NativeStackScreenProps<StackParams,'TelaPricipal'>;

const TelaPricipalScreen: React.FC <Props> = (Props) => {

	 const [loading, setLoading] = useState(false);
 	 const [data, setData] = useState<Item[]>([]);
	  
  useFocusEffect(useCallback(() => {
		setLoading(true);
    axios.get<Item[]>('http://localhost:4000/api/itens')
    .then((res) => {
      setData(res.data);
			setLoading(false);
    })
    .catch((error) => {
      console.log(error);
			setLoading(false);
    });
  }, []));

		const renderFlatListItem: ListRenderItem<Item> = ({item}) => {
			const botaoLoginPressionado = () => {
				Props.navigation.navigate('PaginaItem', {item: item});
			}
			
			return (
			<TouchableOpacity style={styles.listItem} onPress={botaoLoginPressionado}>
		    	<View style={styles.aliamendo}>
					<Image style={styles.image} source={image}/>
		    	</View>	
				<Image style={styles.image} source={image}/>
				<View style={styles.aliamendo01}>
					<Text style={styles.listItemText}>{item.nome}</Text>
				</View>
			</TouchableOpacity>
		)
		}
		const botaoLoginPressionado02 = () => {
			Props.navigation.navigate('CriaItem');
		}
	return (
		<View>
			<FlatList renderItem={renderFlatListItem} data={data}/>
			<View>
				<Button title='criar novo item' onPress={botaoLoginPressionado02} />
	        </View>
		</View>
	)
}
export default TelaPricipalScreen
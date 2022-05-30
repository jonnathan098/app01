import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Alert} from 'react-native';
import  image from '../../assets/download.jfif.png';
import { Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParams } from './Navegacao';

const style = StyleSheet.create({
    container: {
      flexGrow:1,
      backgroundColor: '#bb0',
     alignItems:'center',
    },
    
    mensagem: {
      fontSize:24,
      fontWeight: 'bold'
    },
  
    image: {
      width:200,
      height:200,
      borderRadius:100,
      marginTop:20,
      alignItems: 'flex-start',
      
    },
   
  })
  type Props = NativeStackScreenProps<StackParams,'Perfil'>;
const perfilScreen: React.FC <Props> = (Props) => {
   const botaoPressionado = () =>{
    Props.navigation.navigate('TelaPricipal');
  }
    return(
      <View style={style.container}>
        <Image style={style.image} source={image}/>
        <Text style={style.mensagem}>bem vindo!</Text>
        <Text>tudo bem !</Text>
        <Button title='supera' onPress={botaoPressionado} />
      </View>
    )
}
export default perfilScreen
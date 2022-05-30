import React from 'react';
import { Text, View } from 'react-native';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#000c',
		position: 'absolute',
		left: 0,
		top: 0,
		width: '100%',
		height: '100%',
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},

	text: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 18,
	},
});
type Props = {
	show?: boolean
};

const Loading: React.FC<Props> = (props) => {
	return (
		<>
		  {(props.show) && (
				<View style={styles.container}>
					<Text style={styles.text}>Carregando...</Text>
				</View>
			)}
		</>
	);
};

Loading.defaultProps = {
	show: false
};

export default Loading;
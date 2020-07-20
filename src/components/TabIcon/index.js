import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from '../common/Icon/index';
import constant from '../../config/constant';

function TabIcon(props) {
	const {focused, iconName, title} = props;

	let color = focused ? constant.PRIMARY_COLOR : constant.TAB_COLOR;

	return (
		<View style={styles.container}>
			<Icon style={{ color: color }} name={ iconName } size={ 25 } />
			<Text style={{ color: color }}>{ title }</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		flexDirection: 'column', 
		alignItems: 'center', 
		alignSelf: 'center',
		marginTop: 3
	},
});

export default TabIcon;
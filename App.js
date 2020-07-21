import { StatusBar } from 'expo-status-bar';
import SplashScreen from 'react-native-splash-screen'
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Routes from './src/routes';

export default function App() {

	// 组件初始化设置启动屏三秒关闭
	useEffect(() => {
		setTimeout(() => {
			SplashScreen.hide();
		}, 3000);
	}, []);

	return (
		<View style={styles.container}>
			<Routes />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});

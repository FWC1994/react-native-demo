import { StatusBar } from 'expo-status-bar';
import SplashScreen from 'react-native-splash-screen'
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import {Provider} from 'react-redux';
import Routes from './src/routes';
import store from './src/store/index';
export default function App() {
	console.log('open----------------')
	// 组件初始化设置启动屏三秒关闭
	useEffect(() => {
		setTimeout(() => {
			SplashScreen.hide();
			console.log('SplashScreen----------------')
		}, 3000);
	}, []);

	return (
		<Provider store={store}>
			<View style={styles.container}>
				<Routes />
			</View>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});

import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';
import constant from '@/config/constant';

function WSTabView(props) {
	const { tabList = [] } = props;

	const [index, setIndex] = useState(0);

	// 用于保存TabView SceneMap信息
	let sceneMapObj = {};

	// 处理参数成 routes 和 SceneMap
	let routes = tabList.map((tab) => {
		const { key, title } = tab;
		sceneMapObj[key] = tab.module;
		return {
			title: title,
			key: key
		}
	});

	const initialLayout = { width: Dimensions.get('window').width };

	const renderScene = SceneMap(sceneMapObj);

	const renderTabBar = props => {
		return (
			<View style={styles.tabBar}>
				{props.navigationState.routes.map((route, i) => {
					let color = i === index ? constant.PRIMARY_COLOR : constant.TAB_COLOR;
					return (
						<TouchableOpacity
							style={styles.tabItem}
							onPress={() => setIndex(i)}
							key={route.key}
						>
							<Animated.Text style={{ color }}>{route.title}</Animated.Text>
						</TouchableOpacity>
					);
				})}
			</View>
		);
	};

	return (
		<TabView
			navigationState={{ index, routes }}
			renderScene={renderScene}
			onIndexChange={setIndex}
			initialLayout={initialLayout}
			renderTabBar={renderTabBar}
			style={{flex: 1}}
		/>
	);
}

const styles = StyleSheet.create({
	tabBar: {
		flexDirection: 'row',
	},
	tabItem: {
		flex: 1,
		alignItems: 'center',
		padding: 16,
		color: '#00ff00'
	},
});

export default WSTabView;
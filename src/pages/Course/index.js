import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import WSTabView from '@/components/WSTabView/index'
import commonStyles from '@/assets/styles/common';

function Course() {

	const Module = (props) => {
		return <View style={[styles.scene, { backgroundColor: props.backgroundColor }]} />
	};

	const tabList = [
        {
            title: '全部课程',
			key: 'all',
			module: () => <Module backgroundColor={'#ff4081'}/>
        },
        {
            title: '即将开始',
            key: 'recent',
			module: () => <Module backgroundColor={'#ff0000'}/>
        },
        {
            title: '我的课程',
            key: 'mine',
			module: () => <Module backgroundColor={'#ff4000'}/>
        },
    ]


	return (
		<View style={commonStyles.page}>
			<WSTabView tabList={tabList} />
		</View>
	);
}

const styles = StyleSheet.create({
	scene: {
		flex: 1,
	},
});

export default Course;
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import WSTabView from '@/components/WSTabView/index'
import commonStyles from '@/assets/styles/common';
import CourseList from './components/CourseList';
import config from '@/config/config';

function Course() {
	const tabList = config.courseTypes.map((item) => {
		return {
			title: item.title,
			key: item.key,
			module: () => <CourseList type={item.key}/>
		}
	})

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
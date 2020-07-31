import React, { useState, useEffect } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import WSSwiper from './components/WSSwiper';
import { View, Text, Button, NativeModules, Platform } from 'react-native';
import commonStyles from '@/assets/styles/common';
import { add } from '@/store/counter/action';
import bannerAPI from '@/apis/banner';
import ToastExample from '@/components/common/ToastExample';

function Discovery(props) {
	let [banners, setBanners] = useState(null);
	const { count, add } = props;

	useEffect(() => {
		getBanner();
	}, []);

	// 获取banner数据
	async function getBanner() {
		let res;
		try{
			res = await bannerAPI.getList();
		}catch(error){
			console.error(error);
		}
		
		if(res.data?.code !== 200 || !res.data.data) return;
		setBanners(res.data.data)
	}

	function handleClick() {
		if(Platform.OS === 'ios'){
			const module = NativeModules.CustomModule;
			module.getStringFromRN("hello,I am from ios");
		}else{
			ToastExample.show('call android module', ToastExample.SHORT);
		}
		
		add(1)
	}

	function navToDownloadPage() {
		Actions.download()
	}

	return (
		<View style={commonStyles.page}>
			{
				banners && <WSSwiper pages={banners} height={150} width={'100%'}/>
			}
			<Text>{count}</Text>

			<Button
				onPress={handleClick}
				title="add"
			/>
			
			<Button
				onPress={navToDownloadPage}
				title="跳转我的下载"
			/>
		</View>
		
	);
}

export default connect(state => ({
	count: state.count
}),{
	add
})(Discovery);
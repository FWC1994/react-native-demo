import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import WSSwiper from './components/WSSwiper';
import { View, Text, Button } from 'react-native';
import commonStyles from '@/assets/styles/common';
import { add } from '@/store/counter/action';
import bannerAPI from '@/apis/banner';
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

	return (
		<View style={commonStyles.page}>
			{
				banners && <WSSwiper pages={banners} height={150} width={'100%'}/>
			}
			<Text>{count}</Text>
			<Button
				onPress={() => add(1)}
				title="add"
			/>
			
		</View>
		
	);
}

export default connect(state => ({
	count: state.count
}),{
	add
})(Discovery);
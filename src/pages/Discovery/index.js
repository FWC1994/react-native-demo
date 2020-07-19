import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomIconFont from '../../components/common/Icon/index';
function Discovery() {
	return (
		<View>
			{/* <Icon name={'angle-right'} size={24} color={'#999'} /> */}
			<CustomIconFont name={'star'} size={24} color={'#00c06d'}/>
			
            <Text>discovery page</Text>
		</View>
	);
}
export default Discovery;
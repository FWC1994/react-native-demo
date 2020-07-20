import React from 'react';
import { Image, TouchableWithoutFeedback, StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';

function WSSwiper(props) {
    const { pages = [], height = "100%", width = "100%" } = props;
    
    function handleClick(item) {
        console.log(item)
    }

    const listItem = pages.map((item)=>{
        return <TouchableWithoutFeedback 
                    style={styles.slide} 
                    key={ item.id }
                    onPress={ () => handleClick(item) }
                >
                    <Image
                        style={styles.image}
                        source={{ uri: item.coverUrl }}
                        
                    />
                </TouchableWithoutFeedback>
    })

	return (
        <View style={{ height: height, width: width}} >
            <Swiper showsButtons={false} autoplay>
                { listItem }
            </Swiper>
        </View>
		
	);
}

const styles = StyleSheet.create({
	slide: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    }
})
export default WSSwiper;
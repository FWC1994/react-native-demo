import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CourseItem = (props) => {
    const { courseData } = props;
    const { name, coverUrl, type, startAt} = courseData;
    return <View style={styles.container}>
        <View style={styles.coverBox}>
            <Image 
                source={{
                    uri: coverUrl,
                }}
                style={styles.cover}
            />
        </View>
        <View style={styles.info}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.msg}>{type} | {startAt}</Text>
        </View>
    </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#f3f3f4',
        paddingBottom: 10,
        paddingTop: 10
    },

    info: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'space-between'
    },

    title: {
        flex: 1,
        fontSize: 16,
        color: '#3d3d3e',
        fontWeight: '500'
    },

    msg: {
        color: '#b8b0b0'
    },

    coverBox: {
        width: 150
    },
    
    cover: {
        width: 132,
        height: 75,
        resizeMode: 'stretch',
    }
});

export default CourseItem
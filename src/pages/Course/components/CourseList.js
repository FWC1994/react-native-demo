import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import CourseItem from './CourseItem';
const CourseList = (props) => {
    const { type } = props;

    let demoCourse = {
        name: '找对风格·穿对衣',
        coverUrl: 'https://p.gsxcdn.com/124024260_zicuubzj.jpg',
        type: '系列课',
        startAt: '2020-07-24'

    }

    let courseList = []

    for(let i = 0; i < 50; i++){
        let item = JSON.parse(JSON.stringify(demoCourse))
        item.id = Math.random();
        item.name = i + 1 + '、' + item.name
        courseList.push(item);
    }

    
    const renderItem = ({ item }) => (
        <CourseItem courseData={item} />
    );

    return <FlatList
        data={courseList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.container}
    />
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20,
        paddingTop: 5,
        paddingLeft: 20,
        paddingRight: 20,
    }
});

export default CourseList
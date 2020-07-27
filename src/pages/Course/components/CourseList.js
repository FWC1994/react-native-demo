import React, { useState ,useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import CourseItem from './CourseItem';
import courseAPI from '@/apis/course';

const CourseList = (props) => {
    const { type } = props;
    let [courses, setCourses] = useState([]);

    useEffect(() => {
		getCourses();
    }, []);
    
    // 获取课程列表
    async function getCourses() {
        let res;
        try{
            res = await courseAPI.getCourses();
        }catch(error){
            console.error(error);
        }
        if(res.data?.code !== 200) return;
        setCourses(res.data.data.courses)
    }


    const renderItem = ({ item }) => (
        <CourseItem courseData={item} />
    );

    return <FlatList
        data={courses}
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
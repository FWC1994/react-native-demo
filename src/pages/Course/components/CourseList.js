import React, { useState ,useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import CourseItem from './CourseItem';
import courseAPI from '@/apis/course';

const CourseList = (props) => {
    const { type } = props;
    let [courses, setCourses] = useState([]);
    let [refreshing] = useState(false);
    

    useEffect(() => {
		getCourses();
    }, []);
    
    // 获取课程列表
    async function getCourses(append) {
        let res;
        try{
            res = await courseAPI.getCourses();
        }catch(error){
            console.error(error);
        }
        if(res.data?.code !== 200) return;
        let list = res.data.data.courses
        if(append){
            list = courses.concat(list)
        }
        setCourses(list)
    }


    const renderItem = ({ item }) => (
        <CourseItem courseData={item} />
    );

    return <FlatList
        data={courses}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        refreshing={refreshing}
        onRefresh={()=>getCourses(false)}
        onEndReached={()=>getCourses(true)}
        onEndReachedThreshold={0.5}
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
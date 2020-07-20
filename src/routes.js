import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';
import Course from './pages/Course/index';
import Home from './pages/Home/index';
import Discovery from './pages/Discovery/index';
import TabIcon from './components/TabIcon/index';

const Routes = () => (
    <Router>
        <Stack key="root" >
            <Scene key="main" tabs hideNavBar={true} default='discovery' showLabel={false} tabBarStyle={styles.tabBar}>
                <Scene key="discovery" component={Discovery} title="推荐好课" icon={TabIcon} iconName={'star'} />
                <Scene key="course" component={Course} title="我的课程" icon={TabIcon} iconName={'video'} />
                <Scene key="home" component={Home} title="个人中心" icon={TabIcon} iconName={'user'} />
            </Scene>
        </Stack>
    </Router>
);

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: 'white',
        borderTopColor: 'white',
        borderTopWidth: 1,
    },

})
   
export default Routes
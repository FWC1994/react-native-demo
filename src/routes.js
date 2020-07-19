import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import Course from './pages/Course/index';
import Home from './pages/Home/index';
import Discovery from './pages/Discovery/index';

const Routes = () => (
    <Router>
        <Stack key="root" >
            <Scene key="main" tabs hideNavBar={true} default='discovery'>
                <Scene key="discovery" component={Discovery} title="推荐好课"/>
                <Scene key="course" component={Course} title="我的课程" />
                <Scene key="home" component={Home} title="个人中心" />
            </Scene>
        </Stack>
    </Router>
);
   
export default Routes
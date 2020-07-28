export default {
    host: __DEV__ ? 'http://localhost:3000' : 'https://m.weishi100.com',
    // 课程列表类型
    courseTypes: [
        {
            title: '全部课程',
			key: 'all',
        },
        {
            title: '即将开始',
            key: 'recent',
        },
        {
            title: '我的课程',
            key: 'mine',
        },
    ]
}
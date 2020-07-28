## 微师技术调研Demo
组内学习React Native代码，可以仿照微师原有功能通过RN实现，一起来踩坑，遇到的关键性问题可以记录到issues。

### 代码结构说明
```
./src
├── apis --接口层代码 统一管理接口        
├── assets --资源目录 样式字体等
│   └── styles -- 公共样式目录
├── components -- 全局组件目录
│   └── common -- 通用组件目录
├── config -- 配置文件以及常量定义
├── pages -- 页面目录
├── store -- 数据状态管理
└── utils -- 通用方法目录
└── routes.js -- 页面路由
```


### 运行开发
1. 准备React Native环境,可参考: [Requirements](https://reactnative.cn/docs/getting-started.html)
2. 安装相关依赖 执行：yarn install
3. 运行 yarn run ios 或 yarn run android

> 注： ios 第一次拉取项目需要进入ios目录执行pod install 安装依赖

### 需要调研问题
后期开发需要提前调研解决的关键性问题和功能，并通过demo的方式集成到项目中，欢迎认领补充:
- [x] 如何使用自定义字体图标
- [x] 实现底部导航 页面切换
- [x] 应用启动屏设置
- [x] 应用ios、android图标设置
- [x] 集成Redux
- [ ] 本地数据存储AsyncStorage
- [ ] 视频音频播放功能
- [ ] 增加qq,微信第3方分享功能
- [x] 列表功能FlatList
- [x] tab页面切换组件集成
- [ ] model组件封装
- [x] Mock接口

未完待续...

### 学习参考资料
- [官网文档](https://reactnative.cn/)
- [分享 50 个完整的 React Native 项目](https://juejin.im/post/58f37cb361ff4b0058f9824a)
- [react-native-awesome](https://github.com/crazycodeboy/react-native-awesome)
- [react-native-guide](https://github.com/reactnativecn/react-native-guide)


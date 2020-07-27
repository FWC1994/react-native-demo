const Koa = require('koa');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const config = require('./config');

const index = require('./router/index');
const banner = require('./router/banner');
const course = require('./router/course');

let app = new Koa();
// 支持跨域
app.use(cors());

app.use(bodyParser(config.bodyParser));

// 绑定全局属性方法
app.context.genResult = (data) => {
    return {
        code: 200,
        data: data,
        msg: 'ok'
    }
};

//装载所有子路由
router = new Router();
router.use('/m', index.routes());
router.use('/m/banner', banner.routes());
router.use('/m/course', course.routes());

//加载路由中间件
app.use(router.routes()); 
app.use(router.allowedMethods());  

const port = config.port || 3000;

app.listen(port, function() {
    console.log('Mock Service is running on port ' + port);
});


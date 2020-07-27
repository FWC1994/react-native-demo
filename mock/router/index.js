const Router = require('koa-router');

const router = new Router();

/**
* 欢迎页面
*/

let welcome = function(ctx){

   ctx.body = 'Mock Service is Running!';

};

router.get('/', welcome);

module.exports = router;
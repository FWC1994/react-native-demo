const Router = require('koa-router');
const service = require('../services/banner');

const router = new Router();

router.get('/getList', (ctx) => service.getList(ctx));

module.exports = router;

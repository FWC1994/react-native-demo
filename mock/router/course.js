const Router = require('koa-router');
const service = require('../services/course');

const router = new Router();

router.get('/all', (ctx) => service.getAll(ctx));

module.exports = router;


const Mock = require('mockjs');

module.exports = {
    getAll(ctx) {
        let res = Mock.mock({
            "courses|10": [
                {
                    "id": () => Mock.mock('@guid()'),
                    "name": () => Mock.mock('@ctitle(5, 10)'),
                    "coverUrl": 'https://p.gsxcdn.com/124024260_zicuubzj.jpg',
                    "type": '系列课',
                    "startAt": () => Mock.mock('@date()')
                }
            ]
        })
        return ctx.body = ctx.genResult(res);
    }
}
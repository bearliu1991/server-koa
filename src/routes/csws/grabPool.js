import Router from 'koa-router';
import RES from './const';

const router = new Router();

// 抢单池列表
router.post('/orderlist', async ctx => {
  return (ctx.body = { code: 1, msg: 'sucess', data: RES.grabOrderList });
});

module.exports = router;

import Router from 'koa-router';
import admin from './admin';
import center from './center';
import order from './order';
import seats from './seats';
import setting from './setting';
import stuff from './stuff';
import survey from './survey';
import tencent from './tencent';
import pay from './pay';
const router = new Router();
router.prefix('/api');
// 生成sessionId
router.get('/getSessionId', async ctx => {
  const sessionId = ctx.sessionId;
  return (ctx.body = {
    sessionId,
  });
});
// 用户登录注册
router.use('/adminUser', admin.routes(), admin.allowedMethods());
// 企业中心
router.use('/adminCenter', center.routes(), center.allowedMethods());
// 员工
router.use('/stuff', stuff.routes(), stuff.allowedMethods());

router.use('/survey', survey.routes(), survey.allowedMethods());
// 公众号
router.use('/tencent', tencent.routes(), tencent.allowedMethods());
// 坐席
router.use('/seats', seats.routes(), seats.allowedMethods());
// 订单
router.use('/order', order.routes(), order.allowedMethods());
// 支付
router.use('/pay', pay.routes(), pay.allowedMethods());
// 设置
router.use('/set', setting.routes(), setting.allowedMethods());

export default function(app) {
  app.use(router.routes());
}

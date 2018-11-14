import Router from 'koa-router';
import pay from './pay';
import zhifu from './zhifu';
import invite from './invite';
const router = new Router();

// 支付相关
router.use('/api/mobile/uPayOrder', pay.routes(), pay.allowedMethods());
// 支付异步通知
router.use('/xkdata-web/uPayOrder', zhifu.routes(), zhifu.allowedMethods());
// 邀请
router.use('/api/mobile/invite', invite.routes(), invite.allowedMethods());

export default function(app) {
  app.use(router.routes());
}

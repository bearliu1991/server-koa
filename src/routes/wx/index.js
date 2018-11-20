import Router from 'koa-router';
import wxAuth from './wxAuth';
import wxNotify from './wxNotify';
const router = new Router();

// 微信相关接口
router.use('/api/wechat', wxAuth.routes(), wxAuth.allowedMethods());
router.use('/xkdata-web/wechatNotify', wxNotify.routes(), wxNotify.allowedMethods());

export default function(app) {
  app.use(router.routes(), router.allowedMethods());
}

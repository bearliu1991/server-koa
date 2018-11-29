import Router from 'koa-router';
import chat from './chat';
import common from './common';
import grabPool from './grabPool';
const router = new Router();
router.prefix('/api');
// 生成sessionId
router.get('/getSessionId', async ctx => {
  const sessionId = ctx.sessionId;
  return (ctx.body = {
    sessionId,
  });
});
router.use('/chat', chat.routes(), chat.allowedMethods());
router.use('/chat', common.routes(), common.allowedMethods());
router.use('/grabpool', grabPool.routes(), grabPool.allowedMethods());

export default function(app) {
  app.use(router.routes());
}

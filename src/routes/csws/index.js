import Router from 'koa-router';
import chat from './chat';
import common from './common';
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

export default function(app) {
  app.use(router.routes());
}

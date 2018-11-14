import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import xmlDataHandler from '../../common/xmlDataHandler';
const router = new Router();

// 微信通知
router.post('/msgNotify/*', async ctx => {
  const jsonData = await xmlDataHandler.getXmlData(ctx);
  const response = await proxyService.postProxy(ctx, ctx.url, { params: jsonData });
  ctx.body = response;
});
router.get('/msgNotify/*', async ctx => {
  const response = await proxyService.getProxy(ctx, ctx.url);
  ctx.body = response;
});

router.post('/componentNotify/', async ctx => {
  const jsonData = await xmlDataHandler.getXmlData(ctx);
  const response = await proxyService.postProxy(ctx, ctx.url, { params: jsonData });
  ctx.body = response;
});

router.post('/msgPlatNotify/:appid', async ctx => {
  let appid = ctx.appid;
  if (/8ff8$/.test(appid)) {
    const jsonData = await xmlDataHandler.getXmlData(ctx);
    const response = await proxyService.postProxy(ctx, ctx.url, { params: jsonData });
    return (ctx.body = response);
  } else {
    return (ctx.body = '');
  }
});

export default router;

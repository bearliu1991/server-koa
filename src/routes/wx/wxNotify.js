import Router from 'koa-router';
import httpXmlService from '../../common/httpXmlService';
import xmlDataHandler from '../../common/xmlDataHandler';
const router = new Router();

// 服务器配置地址 msgNotify/0，用户发送和接受微信服务器信息
router.post('/msgNotify/*', async ctx => {
  const xmlData = await xmlDataHandler.getXmlData(ctx, 'xml');
  httpXmlService.post(ctx.url, { data: xmlData });
  ctx.body = 'success';
});
// 用于校验服务器
router.get('/msgNotify/*', async ctx => {
  const response = await httpXmlService.get(ctx, ctx.url);
  ctx.body = response;
});

// 微信二维码授权登陆授权事件接受URL
router.post('/componentNotify/', async ctx => {
  const xmlData = await xmlDataHandler.getXmlData(ctx, 'xml');
  const response = await httpXmlService.post(ctx.url, { data: xmlData });
  ctx.body = response;
});
// 授权登陆后实现的业务URL
router.post('/msgPlatNotify/:appid', async ctx => {
  let appid = ctx.params.appid;
  if (/8ff8$/.test(appid)) {
    const xmlData = await xmlDataHandler.getXmlData(ctx, 'xml');
    const response = await httpXmlService.post(ctx.url, { data: xmlData });
    return (ctx.body = response);
  } else {
    const xmlData = await xmlDataHandler.getXmlData(ctx, 'xml');
    console.log(xmlData);
    httpXmlService.post(ctx.url, { data: xmlData });
    ctx.body = 'success';
  }
});

export default router;

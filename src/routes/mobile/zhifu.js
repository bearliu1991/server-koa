import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import xmlDataHandler from '../../common/xmlDataHandler';
import { updatePayOrderByWxNotify, updatePayOrderByAliPayNotify } from '../../api/mobile';

const router = new Router();

// 微信支付异步通知
router.post('/updatePayOrderByWxNotify', async ctx => {
  const jsonData = await xmlDataHandler.getXmlData(ctx);
  const params = { params: JSON.stringify(jsonData) };
  const response = await proxyService.postProxy(ctx, updatePayOrderByWxNotify, { params });
  if (response.code === 1) {
    const resXml =
      '<xml>' +
      '<return_code><![CDATA[SUCCESS]]></return_code>' +
      '<return_msg><![CDATA[OK]]></return_msg>' +
      '</xml>';
    return (ctx.body = resXml);
  }
  return (ctx.body = response);
});

// 支付宝支付异步通知
router.post('/updatePayOrderByAliPayNotify', async ctx => {
  let params = { params: JSON.stringify(ctx.request.body) };
  const response = await proxyService.postProxy(ctx, updatePayOrderByAliPayNotify, { params });
  if (response.code === 1) {
    ctx.body = 'success';
  }
  return response;
});

export default router;

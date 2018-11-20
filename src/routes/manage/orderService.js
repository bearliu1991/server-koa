import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import { getOrderListByPageForM, updateBatchStatusForM, getOrderDetail } from '../../api';
const router = new Router();

//
router.post('/getOrderListByPageForM', async ctx => {
  const response = await proxyService.postProxy(ctx, getOrderListByPageForM);
  return (ctx.body = response);
});
//
router.post('/updateBatchStatusForM', async ctx => {
  console.log(ctx);
  const response = await proxyService.postProxy(ctx, updateBatchStatusForM);
  return (ctx.body = response);
});
//
router.post('/getOrderDetail', async ctx => {
  const response = await proxyService.postProxy(ctx, getOrderDetail);
  return (ctx.body = response);
});

export default router;

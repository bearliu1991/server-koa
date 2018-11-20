import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import { dateList, menuList, recordsList, orderStatus, orderDetail, usingMenu } from '../../api';

const router = new Router();

// 获取时间列表
router.post('/dateList', async ctx => {
  const response = await proxyService.postProxy(ctx, dateList);
  return (ctx.body = response);
});

//
router.post('/menuList', async ctx => {
  const response = await proxyService.postProxy(ctx, menuList);
  return (ctx.body = response);
});

//
router.post('/recordsList', async ctx => {
  const response = await proxyService.postProxy(ctx, recordsList);
  console.log(response);
  return (ctx.body = response);
});

//
router.post('/orderStatus', async ctx => {
  const response = await proxyService.postProxy(ctx, orderStatus);
  return (ctx.body = response);
});

// 获取订单详情
router.post('/orderDetail', async ctx => {
  const response = await proxyService.postProxy(ctx, orderDetail);
  return (ctx.body = response);
});

// 获取正在使用的套餐
router.post('/usingMenu', async ctx => {
  const response = await proxyService.postProxy(ctx, usingMenu);
  return (ctx.body = response);
});

export default router;

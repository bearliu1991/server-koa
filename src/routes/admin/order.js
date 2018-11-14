import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import { dateList, menuList, recordsList, orderStatus, orderDetail, usingMenu } from '../../api';

const router = new Router();

// 获取时间列表
router.get('/dateList', async ctx => {
  const response = await proxyService.postProxy(ctx, dateList);
  return (ctx.body = response);
});

//
router.get('/menuList', async ctx => {
  const response = await proxyService.postProxy(ctx, menuList);
  return (ctx.body = response);
});

//
router.get('/recordsList', async ctx => {
  const response = await proxyService.postProxy(ctx, recordsList);
  return (ctx.body = response);
});

//
router.get('/orderStatus', async ctx => {
  const response = await proxyService.postProxy(ctx, orderStatus);
  return (ctx.body = response);
});

// 获取订单详情
router.get('/orderDetail', async ctx => {
  const response = await proxyService.postProxy(ctx, orderDetail);
  return (ctx.body = response);
});

// 获取正在使用的套餐
router.get('/usingMenu', async ctx => {
  const response = await proxyService.postProxy(ctx, usingMenu);
  return (ctx.body = response);
});

export default router;

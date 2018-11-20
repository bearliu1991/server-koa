import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import {
  getIntoSeatList,
  saveSeatNo,
  saveSeat,
  updateSeat,
  getSeatDetail,
  getSeatList,
  updateSeatAuthByBatch,
  updateSeatStatus,
  updateSeatBaseInfo,
  updateSeatAuth,
  updateConditionalSeat,
} from '../../api';

const router = new Router();

// 获取坐席
router.get('/getIntoSeatList', async ctx => {
  const response = await proxyService.postProxy(ctx, getIntoSeatList);
  return (ctx.body = response);
});

// 生成坐席编号
router.get('/saveSeatNo', async ctx => {
  const response = await proxyService.postProxy(ctx, saveSeatNo);
  return (ctx.body = response);
});

// 保存坐席接口
router.post('/saveSeat', async ctx => {
  let params = ctx.request.body;
  if (params.eeId) {
    params.eeId = Number(params.eeId);
  }
  params.seatId = Number(params.seatId);
  const response = await proxyService.postProxy(ctx, saveSeat, { params });
  return (ctx.body = response);
});

// 修改坐席接口
router.post('/updateSeat', async ctx => {
  const response = await proxyService.postProxy(ctx, updateSeat);
  return (ctx.body = response);
});

// 获取坐席详情接口
router.get('/getSeatDetail', async ctx => {
  let params = ctx.request.query;
  params.id = Number(params.id);
  const response = await proxyService.postProxy(ctx, getSeatDetail, { params });
  return (ctx.body = response);
});

// 查询坐席列表接口
router.get('/getSeatList', async ctx => {
  let params = ctx.request.query;
  params.offset = Number(params.offset);
  params.limit = Number(params.limit);
  let response = await proxyService.postProxy(ctx, getSeatList, { params });
  return (ctx.body = response);
});

// 批量为坐席修改公众号权限
router.post('/updateSeatAuthByBatch', async ctx => {
  const response = await proxyService.postProxy(ctx, updateSeatAuthByBatch);
  return (ctx.body = response);
});

// 解除授权/停用/批量停用/启用统一调用接口
router.post('/updateSeatStatus', async ctx => {
  const response = await proxyService.postProxy(ctx, updateSeatStatus);
  return (ctx.body = response);
});

// 修改坐席基本信息接口
router.get('/updateSeatBaseInfo', async ctx => {
  let params = ctx.request.query;
  if (params.eeId) {
    params.eeId = Number(params.eeId);
  }
  const response = await proxyService.postProxy(ctx, updateSeatBaseInfo, { params });
  return (ctx.body = response);
});

// 修改坐席权限接口
router.post('/updateSeatAuth', async ctx => {
  const response = await proxyService.postProxy(ctx, updateSeatAuth);
  return (ctx.body = response);
});

// 修改个性化坐席接口
router.post('/updateConditionalSeat', async ctx => {
  const response = await proxyService.postProxy(ctx, updateConditionalSeat);
  return (ctx.body = response);
});

export default router;

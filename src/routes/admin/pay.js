import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import {
  isCanPayVoucherAdmin,
  isBuyPackage,
  updateBatchStatusForA,
  getCurOrderDetail,
  saveOrderInfo,
  saveCorpCreateApplyForOrder,
  getSimpleDetail,
  getDetail,
  savePayVoucherTradeOrderAdmin,
  saveAccountTradeOrderAdmin,
} from '../../api';

const router = new Router();

// 是否能上传凭证
router.get('/isCanPayVoucher', async ctx => {
  const response = await proxyService.postProxy(ctx, isCanPayVoucherAdmin);
  return (ctx.body = response);
});
// 是否存在待支付订单
router.get('/getExistOrder', async ctx => {
  let params = ctx.request.query;
  params.corpId = Number(params.corpId);
  const response = await proxyService.postProxy(ctx, isBuyPackage, { params });
  return (ctx.body = response);
});
// 取消订单
router.get('/getCancelOrder', async ctx => {
  // 处理参数数组
  const orderIds = ctx.requestParams['orderIds[]'];
  if (typeof orderIds === 'string') {
    ctx.requestParams['orderIds'] = [orderIds];
  } else {
    ctx.requestParams['orderIds'] = orderIds;
  }
  ctx.requestParams.corpId = Number(ctx.requestParams.corpId);
  delete ctx.requestParams['orderIds[]'];
  const response = await proxyService.postProxy(ctx, updateBatchStatusForA);
  return (ctx.body = response);
});
// 获取公司当前订购服务
router.get('/getCurOrderDetail', async ctx => {
  let params = ctx.request.query;
  params.corpId = Number(params.corpId);
  const response = await proxyService.postProxy(ctx, getCurOrderDetail, { params });
  return (ctx.body = response);
});
// 保存订单
router.get('/saveOrderInfo', async ctx => {
  let params = ctx.request.query;
  params.packageId = Number(params.packageId);
  params.orderPayprice = Number(params.orderPayprice);
  params.corpId = Number(params.corpId);
  params.packageValidDay = Number(params.packageValidDay);
  params.packageDiscountsPrice = Number(params.packageDiscountsPrice);
  const response = await proxyService.postProxy(ctx, saveOrderInfo, { params });
  return (ctx.body = response);
});
// 保存创建公司并创建订单
router.get('/saveCorpCreateApplyForOrder', async ctx => {
  let params = ctx.request.query;
  params.packId = Number(params.packId);
  params.orderPayprice = Number(params.orderPayprice);
  params.packageValidDay = Number(params.packageValidDay);
  params.packageDiscountsPrice = Number(params.packageDiscountsPrice);
  const response = await proxyService.postProxy(ctx, saveCorpCreateApplyForOrder, { params });
  return (ctx.body = response);
});
// 进入确认付款页,扫码支付后,轮询查询订单简单详情
router.get('/getSimpleDetail', async ctx => {
  let params = ctx.request.query;
  params.corpId = Number(params.corpId);
  const response = await proxyService.postProxy(ctx, getSimpleDetail, { params });
  return (ctx.body = response);
});
// 订单详情(管理平台)
router.get('/getOrderDetail', async ctx => {
  let params = ctx.request.query;
  params.corpId = Number(params.corpId);
  const response = await proxyService.postProxy(ctx, getDetail, { params });
  return (ctx.body = response);
});
// 付款凭证确认银行汇款
router.get('/savePayVoucherTradeOrder', async ctx => {
  const response = await proxyService.postProxy(ctx, savePayVoucherTradeOrderAdmin);
  return (ctx.body = response);
});
// 付款方名称账号确认银行汇款
router.get('/saveAccountTradeOrder', async ctx => {
  const response = await proxyService.postProxy(ctx, saveAccountTradeOrderAdmin);
  return (ctx.body = response);
});

export default router;

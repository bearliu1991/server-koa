import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import {
  isBuyPackageForM,
  getCurOrderDetailForM,
  getTPackageListForM,
  getSimpleDetailForM,
  saveOrderInfoForM,
  isCanPayVoucher,
  saveAccountTradeOrder,
  savePayVoucherTradeOrder,
} from '../../api';
const router = new Router();

// 是否存在待支付订单
router.post('/isBuyPackageForM', async ctx => {
  const response = await proxyService.postProxy(ctx, isBuyPackageForM);
  return (ctx.body = response);
});

// 获取公司当前订购服务
router.post('/getCurOrderDetailForM', async ctx => {
  const response = await proxyService.postProxy(ctx, getCurOrderDetailForM);
  return (ctx.body = response);
});

// 套餐列表 xuyuan 20018-10-22
router.post('/getTPackageListForM', async ctx => {
  let response = await proxyService.postProxy(ctx, getTPackageListForM);
  return (ctx.body = response);
});

// 订单简单详情(运营平台)
router.post('/getSimpleDetailForM', async ctx => {
  const response = await proxyService.postProxy(ctx, getSimpleDetailForM);
  return (ctx.body = response);
});
// xuyuan 20018-10-19
router.post('/saveOrderInfoForM', async ctx => {
  const response = await proxyService.postProxy(ctx, saveOrderInfoForM);
  return (ctx.body = response);
});

// 是否能上传凭证(运营平台) xuyuan 20018-10-19
router.post('/isCanPayVoucher', async ctx => {
  const response = await proxyService.postProxy(ctx, isCanPayVoucher);
  return (ctx.body = response);
});

// 银行汇款上传凭证,付款方名称账号上传 xuyuan 20018-10-19
router.post('/saveAccountTradeOrder', async ctx => {
  const response = await proxyService.postProxy(ctx, saveAccountTradeOrder);
  return (ctx.body = response);
});

// 银行汇款上传凭证 ,付款凭证上传 xuyuan 20018-10-19
router.post('/savePayVoucherTradeOrder', async ctx => {
  const response = await proxyService.postProxy(ctx, savePayVoucherTradeOrder);
  return (ctx.body = response);
});

export default router;

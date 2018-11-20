import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import { transformData } from '../../utils/utils';
import {
  getTradeOrderByOperation,
  updateTradeOrderApprovalRefuse,
  updateTradeOrderApprovalAdopt,
  getPayOrderDetailForM,
} from '../../api';
const router = new Router();

//  运营系统获得交易订单列表
router.post('/getTradeOrderByOperation', async ctx => {
  let response = await proxyService.postProxy(ctx, getTradeOrderByOperation);
  if (response.code === 1) {
    response.data.records = transformData(response.data.records, {
      payOrderNo: 'payOrderNo',
      orderId: 'orderId',
      batchNo: 'batchNo',
      packageName: 'packageName',
      orderChannel: 'orderChannel',
      corpName: 'corpName',
      payStatus: 'payStatus',
      authStatus: 'authStatus',
      status: 'status',
      payType: 'payType',
      orderPrice: 'orderPrice',
    });
  }
  return (ctx.body = response);
});

// 运营系统拒绝审批
router.post('/updateTradeOrderApprovalRefuse', async ctx => {
  const response = await proxyService.postProxy(ctx, updateTradeOrderApprovalRefuse);
  return (ctx.body = response);
});

// 运营系统审批通过
router.post('/updateTradeOrderApprovalAdopt', async ctx => {
  const response = await proxyService.postProxy(ctx, updateTradeOrderApprovalAdopt);
  return (ctx.body = response);
});

//  获取交易订单详情
router.post('/getPayOrderDetailForM', async ctx => {
  let response = await proxyService.postProxy(ctx, getPayOrderDetailForM);
  return (ctx.body = response);
});

export default router;

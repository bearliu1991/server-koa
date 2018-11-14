import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import { transformData } from '../../utils/utils';
import { getOrderListByPageForM, updateBatchStatusForMr, getOrderDetail } from '../../api';
const router = new Router();

//
router.post('/getOrderListByPage', async ctx => {
  const response = await proxyService.postProxy(ctx, getOrderListByPageForM);
  response.data.records = transformData(response.data.records, {
    orderCreateTime: 'orderCreateTime',
    corpId: 'corpId',
    corpName: 'corpName',
    orderChannel: 'orderChannel',
    goodsName: 'goodsName',
    validDay: 'validDay',
    goodsPrice: 'goodsPrice',
    goodsDiscountsPrice: 'goodsDiscountsPrice',
    goodsNum: 'goodsNum',
    goodsNumPrice: 'goodsNumPrice',
    orderMobile: 'orderMobile',
    orderNickname: 'orderNickname',
    picUrl: 'picUrl',
    orderPayprice: 'orderPayprice',
    status: 'status',
    payType: 'payType',
    orderId: 'orderId',
    orderPayPrice: 'orderPayPrice',
    payOrderNo: 'payOrderNo',
    packageId: 'packageId',
  });
  return (ctx.body = response);
});
//
router.post('/updateBatchStatusForM', async ctx => {
  const response = await proxyService.postProxy(ctx, updateBatchStatusForMr);
  return (ctx.body = response);
});
//
router.post('/getOrderDetail', async ctx => {
  const response = await proxyService.postProxy(ctx, getOrderDetail);
  return (ctx.body = response);
});

export default router;

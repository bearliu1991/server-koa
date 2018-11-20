import Router from 'koa-router';
import querystring from 'querystring';
import proxyService from '../../common/proxyService';
import httpsXmService from '../../common/httpsXmService';
import wxSign from '../../common/wxSign';
import {
  getOrderPayInfo,
  updatePayOrderReturnParam,
  updatePayOrderByPayType,
  getPayOrderStatus,
} from '../../api/mobile';

const router = new Router();

// 获取订单详情
router.post('/getOrderPayInfo', async ctx => {
  const response = await proxyService.postProxy(ctx, getOrderPayInfo);
  return (ctx.body = response);
});
// 创建支付单并且返回支付参数
router.post('/updatePayOrderReturnParam', async ctx => {
  const params = ctx.request.body;
  if (params.type === 1) {
    params.type = 'ALI_PAY';
  } else if (params.type === 2) {
    params.type = 'WX_JSAPI_PAY';
  } else if (params.type === 3) {
    params.type = 'WX_H5_PAY';
  }
  const response = await proxyService.postProxy(ctx, updatePayOrderReturnParam, { params });
  const pageQuery = {
    orderId: response.data.orderId,
    userId: response.data.userId,
    type: response.data.type,
    outTradeNo: response.data.outTradeNo,
  };
  const pageQueryStr = querystring.stringify(pageQuery);
  // 处理微信H5支付
  if (params.type === 'WX_H5_PAY' && response.data.wxH5PayForm) {
    // 获取H5支付参数
    const wxResponse = await httpsXmService.post(response.data.wxH5PayForm);
    const responseData = {
      code: 1,
      message: '获取成功',
      data: wxResponse,
      pageQuery: pageQueryStr,
    };
    return (ctx.body = responseData);
  }
  // 公众号
  if (params.type === 'WX_JSAPI_PAY' && response.data.wxAppIdPayForm) {
    // 获取公众号支付参数
    const wxResponse = await httpsXmService.post(response.data.wxAppIdPayForm); // json
    if (!wxResponse.prepay_id) {
      return (ctx.body = {
        code: 1,
        data: wxResponse,
      });
    } else {
      const signData = wxSign(wxResponse.prepay_id);
      const responseData = {
        code: 1,
        data: signData,
        pageQuery: pageQueryStr,
      };
      return (ctx.body = responseData);
    }
  }
  return (ctx.body = response);
});

// 查询订单
router.post('/updatePayOrderByPayType', async ctx => {
  let params = ctx.requestParams;
  if (params.type === 1) {
    params.type = 'WX_JSAPI_PAY';
  } else if (params.type === 2) {
    params.type = 'ALI_PAY';
  } else if (params.type === 3) {
    params.type = 'BANK_PAY';
  } else if (params.type === 4) {
    params.type = 'WX_H5_PAY';
  }
  const response = await proxyService.postProxy(ctx, updatePayOrderByPayType, { params });
  return (ctx.body = response);
});

// 获取订单详情包括支付信息
router.post('/getPayOrderStatus', async ctx => {
  const response = await proxyService.postProxy(ctx, getPayOrderStatus);
  return (ctx.body = response);
});

export default router;

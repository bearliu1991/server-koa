import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import { getUserInfo, joinCorp, verifyCode } from '../../api/mobile';

const router = new Router();

// 获取用户信息
router.post('/getUserInfo', async ctx => {
  const response = await proxyService.postProxy(ctx, getUserInfo);
  return (ctx.body = response);
});

// 邀请加入
router.post('/joinCorp', async ctx => {
  let params = ctx.request.body;
  params.eeId = params.eeId - 0;
  params.validateCodeType = params.validateCodeType - 0;
  params.validateCodeLength = params.validateCodeLength - 0;
  const response = await proxyService.postProxy(ctx, joinCorp, { params });
  return (ctx.body = response);
});

// 获取验证码
router.post('/verifyCode', async ctx => {
  let params = ctx.request.body;
  params.userId = params.userId - 0;
  params.validateCodeType = params.validateCodeType - 0;
  params.validateCodeLength = params.validateCodeLength - 0;
  const response = await proxyService.postProxy(ctx, verifyCode, { params });
  return (ctx.body = response);
});

export default router;

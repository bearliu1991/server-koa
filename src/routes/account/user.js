import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import { login, logout, getSession } from '../../api';
import { transformData } from '../../utils/utils';

const router = new Router();

// 用户登录返回用户信息
router.post('/login', async ctx => {
  let params = ctx.requestParams;
  params = transformData(params, {
    username: 'identificationNumber',
    psw: 'loginPassword',
    sessionId: 'sessionId',
    platformType: 'platformType',
  });
  const response = await proxyService.postProxy(ctx, login, { params });
  return (ctx.body = response);
});

// 登出
router.post('/logout', async ctx => {
  const response = await proxyService.postProxy(ctx, logout);
  return (ctx.body = response);
});

// 获取用户信息
router.post('/getSession', async ctx => {
  const response = await proxyService.postProxy(ctx, getSession);
  return (ctx.body = response);
});

export default router;

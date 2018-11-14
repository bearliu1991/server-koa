import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import { transformData } from '../../utils/utils';
import { login, logout } from '../../api';
const router = new Router();

// 登陆
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

// 注册
router.post('/register', async ctx => {
  let params = ctx.requestParams;
  params = transformData(params, {
    username: 'identificationNumber',
    psw: 'loginPassword',
    sessionId: 'sessionId',
    platformType: 'platformType',
    regType: 'registerType',
    mobile: 'mobile',
    autoLogin: 'autoLogin',
  });
  // const response = await proxyService.postProxy(ctx, register, { params });
  return (ctx.body = params);
});

// 登出
router.post('/logout', async ctx => {
  const response = await proxyService.postProxy(ctx, logout);
  return (ctx.body = response);
});

export default router;

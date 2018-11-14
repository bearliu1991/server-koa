import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import { getSession } from '../../api';
import { setSessionIdToRequestParams } from '../../middlewares';
import manage from './manage';
import auth from './auth';
import sensitive from './sensitive';
import tConfig from './tConfig';
import customer from './customer';
import tSysCfg from './tSysCfg';
import tPackage from './tPackage';
import tStatus from './tStatus';
import tService from './tService';
import tJob from './tJob';
import tCheatConfig from './tCheatConfig';
import tAppConfig from './tAppConfig';
import tSystemMessage from './tSystemMessage';
import verCfg from './verCfg';
import corp from './corp';
import wxPublicAccount from './wxPublicAccount';
import user from './user';
import seat from './seat';
import orderService from './orderService';
import uPayOrder from './uPayOrder';
import buyorder from './buyOrder';
const router = new Router();
router.prefix('/api');
// 用户登录注册
router.post('/pageauth', setSessionIdToRequestParams, async ctx => {
  if (!ctx.sessionId) {
    return (ctx.body = {
      valid: false,
    });
  } else {
    const sessionId = ctx.requestParams.sessionId;
    const response = await proxyService.postProxy(ctx, getSession, { params: { sessionId } });
    if (response.code === 1) {
      return (ctx.body = {
        valid: true,
        data: response.data,
      });
    } else {
      return (ctx.body = {
        valid: false,
      });
    }
  }
});

router.get('/pageauth', setSessionIdToRequestParams, async ctx => {
  if (!ctx.sessionId) {
    return (ctx.body = {
      valid: false,
    });
  } else {
    const sessionId = ctx.requestParams.sessionId;
    const response = await proxyService.postProxy(ctx, getSession, { params: { sessionId } });
    if (response.code === 1) {
      return (ctx.body = {
        valid: true,
        data: response.data,
      });
    } else {
      return (ctx.body = {
        valid: false,
      });
    }
  }
});
router.use('/manage', setSessionIdToRequestParams, manage.routes(), manage.allowedMethods());
router.use(
  '/sensitive',
  setSessionIdToRequestParams,
  sensitive.routes(),
  sensitive.allowedMethods()
);
router.use('/auth', setSessionIdToRequestParams, auth.routes(), auth.allowedMethods());
router.use('/tConfig', setSessionIdToRequestParams, tConfig.routes(), tConfig.allowedMethods());
router.use('/customer', setSessionIdToRequestParams, customer.routes(), customer.allowedMethods());
router.use('/tSysCfg', setSessionIdToRequestParams, tSysCfg.routes(), tSysCfg.allowedMethods());
router.use('/tPackage', setSessionIdToRequestParams, tPackage.routes(), tPackage.allowedMethods());
router.use('/tStatus', setSessionIdToRequestParams, tStatus.routes(), tStatus.allowedMethods());
router.use('/tService', setSessionIdToRequestParams, tService.routes(), tService.allowedMethods());
router.use('/tJob', setSessionIdToRequestParams, tJob.routes(), tJob.allowedMethods());
router.use(
  '/tCheatConfig',
  setSessionIdToRequestParams,
  tCheatConfig.routes(),
  tCheatConfig.allowedMethods()
);
router.use(
  '/tAppConfig',
  setSessionIdToRequestParams,
  tAppConfig.routes(),
  tAppConfig.allowedMethods()
);
router.use(
  '/tSystemMessage',
  setSessionIdToRequestParams,
  tSystemMessage.routes(),
  tSystemMessage.allowedMethods()
);
router.use('/verCfg', setSessionIdToRequestParams, verCfg.routes(), verCfg.allowedMethods());
router.use('/corp', setSessionIdToRequestParams, corp.routes(), corp.allowedMethods());
router.use(
  '/wxPublicAccount',
  setSessionIdToRequestParams,
  wxPublicAccount.routes(),
  wxPublicAccount.allowedMethods()
);
router.use('/user', setSessionIdToRequestParams, user.routes(), user.allowedMethods());
router.use('/seat', setSessionIdToRequestParams, seat.routes(), seat.allowedMethods());
router.use(
  '/orderService',
  setSessionIdToRequestParams,
  orderService.routes(),
  orderService.allowedMethods()
);
router.use(
  '/uPayOrder',
  setSessionIdToRequestParams,
  uPayOrder.routes(),
  uPayOrder.allowedMethods()
);
router.use('/buyorder', setSessionIdToRequestParams, buyorder.routes(), buyorder.allowedMethods());

export default function(app) {
  app.use(router.routes());
}

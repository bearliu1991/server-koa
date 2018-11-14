import Router from 'koa-router';
import { setSessionIdToRequestParams } from '../../middlewares';
import user from './user';
const router = new Router();
// 账户登陆
router.use('/api', setSessionIdToRequestParams, user.routes(), user.allowedMethods());

export default function(app) {
  app.use(router.routes());
}

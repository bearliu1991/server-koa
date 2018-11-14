import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import {
  delTService,
  getTServiceById,
  getTServiceListByPage,
  saveOrUpdateTService,
} from '../../api';
const router = new Router();

router.post('/delTService', async ctx => {
  const response = await proxyService.postProxy(ctx, delTService);
  return (ctx.body = response);
});

router.post('/getTServiceById', async ctx => {
  const response = await proxyService.postProxy(ctx, getTServiceById);
  return (ctx.body = response);
});

router.post('/getTServiceListByPage', async ctx => {
  const response = await proxyService.postProxy(ctx, getTServiceListByPage);
  return (ctx.body = response);
});

router.post('/saveOrUpdateTService', async ctx => {
  const response = await proxyService.postProxy(ctx, saveOrUpdateTService);
  return (ctx.body = response);
});

export default router;

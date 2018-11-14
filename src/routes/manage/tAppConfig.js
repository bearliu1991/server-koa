import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import {
  updateAppConfig,
  queryTAppConfigByPager,
  queryAppConfig,
  deleteAppConfig,
  addAppConfig,
} from '../../api';
const router = new Router();

router.post('/updateAppConfig', async ctx => {
  const response = await proxyService.postProxy(ctx, updateAppConfig);
  return (ctx.body = response);
});

router.post('/queryTAppConfigByPager', async ctx => {
  const response = await proxyService.postProxy(ctx, queryTAppConfigByPager);
  return (ctx.body = response);
});
router.post('/queryAppConfig', async ctx => {
  const response = await proxyService.postProxy(ctx, queryAppConfig);
  return (ctx.body = response);
});
router.post('/deleteAppConfig', async ctx => {
  const response = await proxyService.postProxy(ctx, deleteAppConfig);
  return (ctx.body = response);
});
router.post('/addAppConfig', async ctx => {
  const response = await proxyService.postProxy(ctx, addAppConfig);
  return (ctx.body = response);
});

export default router;

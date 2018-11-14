import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import {
  deleteTJobCfg,
  queryTJobCfg,
  addTJobCfg,
  updateTJobCfg,
  queryTJobCfgByPager,
} from '../../api';
const router = new Router();

router.post('/deleteTJobCfg', async ctx => {
  const response = await proxyService.postProxy(ctx, deleteTJobCfg);
  return (ctx.body = response);
});

router.post('/queryTJobCfg', async ctx => {
  const response = await proxyService.postProxy(ctx, queryTJobCfg);
  return (ctx.body = response);
});

router.post('/addTJobCfg', async ctx => {
  const response = await proxyService.postProxy(ctx, addTJobCfg);
  return (ctx.body = response);
});

router.post('/updateTJobCfg', async ctx => {
  const response = await proxyService.postProxy(ctx, updateTJobCfg);
  return (ctx.body = response);
});

router.post('/queryTJobCfgByPager', async ctx => {
  const response = await proxyService.postProxy(ctx, queryTJobCfgByPager);
  return (ctx.body = response);
});

export default router;

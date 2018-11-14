import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import {
  queryAntiCheatCfgByPager,
  modAntiCheatCfg,
  delAntiCheatCfg,
  queryAntiCheatCfg,
  addAntiCheatCfg,
} from '../../api';
const router = new Router();

router.post('/queryAntiCheatCfgByPager', async ctx => {
  const response = await proxyService.postProxy(ctx, queryAntiCheatCfgByPager);
  return (ctx.body = response);
});

router.post('/modAntiCheatCfg', async ctx => {
  const response = await proxyService.postProxy(ctx, modAntiCheatCfg);
  return (ctx.body = response);
});
router.post('/delAntiCheatCfg', async ctx => {
  const response = await proxyService.postProxy(ctx, delAntiCheatCfg);
  return (ctx.body = response);
});
router.post('/queryAntiCheatCfg', async ctx => {
  const response = await proxyService.postProxy(ctx, queryAntiCheatCfg);
  return (ctx.body = response);
});
router.post('/addAntiCheatCfg', async ctx => {
  const response = await proxyService.postProxy(ctx, addAntiCheatCfg);
  return (ctx.body = response);
});

export default router;

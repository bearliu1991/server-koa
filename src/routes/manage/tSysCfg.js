import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import { delSysCfg, getSysCfg, getSysCfgListPaging, updateSysCfg, addSysCfg } from '../../api';
const router = new Router();

router.post('/delSysCfg', async ctx => {
  const response = await proxyService.postProxy(ctx, delSysCfg);
  return (ctx.body = response);
});

router.post('/getSysCfg', async ctx => {
  const response = await proxyService.postProxy(ctx, getSysCfg);
  return (ctx.body = response);
});

router.post('/getSysCfgListPaging', async ctx => {
  const response = await proxyService.postProxy(ctx, getSysCfgListPaging);
  return (ctx.body = response);
});

router.post('/updateSysCfg', async ctx => {
  const response = await proxyService.postProxy(ctx, updateSysCfg);
  return (ctx.body = response);
});

router.post('/addSysCfg', async ctx => {
  const response = await proxyService.postProxy(ctx, addSysCfg);
  return (ctx.body = response);
});

export default router;

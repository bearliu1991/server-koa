import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import {
  getIsNewVersion,
  deleteVersion,
  updateVersion,
  addVersion,
  queryTAppVersionByPager,
} from '../../api';
const router = new Router();

router.post('/getIsNewVersion', async ctx => {
  const response = await proxyService.postProxy(ctx, getIsNewVersion);
  return (ctx.body = response);
});

router.post('/deleteVersion', async ctx => {
  const response = await proxyService.postProxy(ctx, deleteVersion);
  return (ctx.body = response);
});
router.post('/updateVersion', async ctx => {
  const response = await proxyService.postProxy(ctx, updateVersion);
  return (ctx.body = response);
});
router.post('/addVersion', async ctx => {
  const response = await proxyService.postProxy(ctx, addVersion);
  return (ctx.body = response);
});

router.post('/queryTAppVersionByPager', async ctx => {
  const response = await proxyService.postProxy(ctx, queryTAppVersionByPager);
  return (ctx.body = response);
});

export default router;

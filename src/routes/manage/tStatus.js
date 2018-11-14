import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import {
  getTStatusListByPage,
  getTStatusTableById,
  delTStatusTableById,
  saveTStatusTable,
  delTStatusById,
  getTStatusById,
  saveOrUpdateTStatus,
} from '../../api';
const router = new Router();

router.post('/getTStatusListByPage', async ctx => {
  const response = await proxyService.postProxy(ctx, getTStatusListByPage);
  return (ctx.body = response);
});

router.post('/getTStatusTableById', async ctx => {
  const response = await proxyService.postProxy(ctx, getTStatusTableById);
  return (ctx.body = response);
});

router.post('/delTStatusTableById', async ctx => {
  const response = await proxyService.postProxy(ctx, delTStatusTableById);
  return (ctx.body = response);
});

router.post('/saveTStatusTable', async ctx => {
  const response = await proxyService.postProxy(ctx, saveTStatusTable);
  return (ctx.body = response);
});

router.post('/delTStatusById', async ctx => {
  const response = await proxyService.postProxy(ctx, delTStatusById);
  return (ctx.body = response);
});

router.post('/getTStatusById', async ctx => {
  const response = await proxyService.postProxy(ctx, getTStatusById);
  return (ctx.body = response);
});

router.post('/saveOrUpdateTStatus', async ctx => {
  const response = await proxyService.postProxy(ctx, saveOrUpdateTStatus);
  return (ctx.body = response);
});

export default router;

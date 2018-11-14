import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import {
  queryTItemValueByPager,
  addTItemValue,
  queryTItemValue,
  updateTItemDefine,
  deleteTItemValue,
  addTItemDefine,
  updateTItemValue,
  deleteTItemDefine,
  queryTItemDefine,
  queryTItemDefineByPager,
  loadTConfigListTree,
  queryTItemDefineTree,
  addTIdentity,
  deleteTIdentity,
  queryTIdentity,
  addTIdentityService,
  updateTIdentity,
  deleteTIdentityService,
  queryIdentityByPager,
  queryTIdentityService,
} from '../../api';
const router = new Router();

router.post('/queryTItemValueByPager', async ctx => {
  const response = await proxyService.postProxy(ctx, queryTItemValueByPager);
  return (ctx.body = response);
});
router.post('/addTItemValue', async ctx => {
  const response = await proxyService.postProxy(ctx, addTItemValue);
  return (ctx.body = response);
});

router.post('/queryTItemValue', async ctx => {
  const response = await proxyService.postProxy(ctx, queryTItemValue);
  return (ctx.body = response);
});

router.post('/updateTItemDefine', async ctx => {
  const response = await proxyService.postProxy(ctx, updateTItemDefine);
  return (ctx.body = response);
});

router.post('/deleteTItemValue', async ctx => {
  const response = await proxyService.postProxy(ctx, deleteTItemValue);
  return (ctx.body = response);
});
router.post('/addTItemDefine', async ctx => {
  const response = await proxyService.postProxy(ctx, addTItemDefine);
  return (ctx.body = response);
});
router.post('/updateTItemValue', async ctx => {
  const response = await proxyService.postProxy(ctx, updateTItemValue);
  return (ctx.body = response);
});

router.post('/deleteTItemDefine', async ctx => {
  const response = await proxyService.postProxy(ctx, deleteTItemDefine);
  return (ctx.body = response);
});

router.post('/queryTItemDefine', async ctx => {
  const response = await proxyService.postProxy(ctx, queryTItemDefine);
  return (ctx.body = response);
});

router.post('/queryTItemDefineByPager', async ctx => {
  const response = await proxyService.postProxy(ctx, queryTItemDefineByPager);
  return (ctx.body = response);
});

router.post('/loadTConfigListTree', async ctx => {
  const response = await proxyService.postProxy(ctx, loadTConfigListTree);
  return (ctx.body = response);
});
// 查找字典配置树 2018-10-30 xuyuan
router.post('/queryTItemDefineTree', async ctx => {
  const response = await proxyService.postProxy(ctx, queryTItemDefineTree);
  return (ctx.body = response);
});

// identity
router.post('/addTIdentity', async ctx => {
  const response = await proxyService.postProxy(ctx, addTIdentity);
  return (ctx.body = response);
});

router.post('/deleteTIdentity', async ctx => {
  const response = await proxyService.postProxy(ctx, deleteTIdentity);
  return (ctx.body = response);
});

router.post('/queryTIdentity', async ctx => {
  const response = await proxyService.postProxy(ctx, queryTIdentity);
  return (ctx.body = response);
});

router.post('/addTIdentityService', async ctx => {
  const response = await proxyService.postProxy(ctx, addTIdentityService);
  return (ctx.body = response);
});

router.post('/updateTIdentity', async ctx => {
  const response = await proxyService.postProxy(ctx, updateTIdentity);
  return (ctx.body = response);
});

router.post('/deleteTIdentityService', async ctx => {
  const response = await proxyService.postProxy(ctx, deleteTIdentityService);
  return (ctx.body = response);
});

router.post('/queryIdentityByPager', async ctx => {
  const response = await proxyService.postProxy(ctx, queryIdentityByPager);
  return (ctx.body = response);
});

router.post('/queryTIdentityService', async ctx => {
  const response = await proxyService.postProxy(ctx, queryTIdentityService);
  return (ctx.body = response);
});

export default router;

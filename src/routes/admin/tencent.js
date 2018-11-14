import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import {
  getPublicAccountList,
  checkAppIdNum,
  updateCssWxPublicAccountStatusToDelete,
  updateCssWxPublicAccountToAuthBlockUp,
  updateCssWxPublicAccountToBlockUp,
  updateCssWxPublicAccountToDisabled,
  updateCssWxPublicAccountToActive,
  updateCssWxPublicAccountDataToDb,
} from '../../api';

const router = new Router();

// 获取公众号列表
router.get('/getPublicAccountList', async ctx => {
  const response = await proxyService.postProxy(ctx, getPublicAccountList);
  return (ctx.body = response);
});

// 判断是否可以添加公众号
router.get('/checkAppIdNum', async ctx => {
  const response = await proxyService.postProxy(ctx, checkAppIdNum);
  return (ctx.body = response);
});

// 公众号信息一键同步
router.get('/updateCssWxPublicAccountDataToDb', async ctx => {
  let params = ctx.request.query;
  params.appAccountId = Number(params.appAccountId);
  params.eeId = Number(params.eeId);
  const response = await proxyService.postProxy(ctx, updateCssWxPublicAccountDataToDb, { params });
  return (ctx.body = response);
});

// 解除授权
router.get('/updateCssWxPublicAccountToAuthBlockUp', async ctx => {
  let response = await proxyService.postProxy(ctx, updateCssWxPublicAccountToAuthBlockUp);
  return (ctx.body = response);
});

// 停用
router.get('/updateCssWxPublicAccountToBlockUp', async ctx => {
  const response = await proxyService.postProxy(ctx, updateCssWxPublicAccountToBlockUp);
  return (ctx.body = response);
});

// 禁用微信公众号
router.get('/updateCssWxPublicAccountToDisabled', async ctx => {
  const response = await proxyService.postProxy(ctx, updateCssWxPublicAccountToDisabled);
  return (ctx.body = response);
});

// 启用微信公众号
router.get('/updateCssWxPublicAccountToActive', async ctx => {
  const response = await proxyService.postProxy(ctx, updateCssWxPublicAccountToActive);
  return (ctx.body = response);
});

// 删除微信公众号
router.get('/updateCssWxPublicAccountStatusToDelete', async ctx => {
  const response = await proxyService.postProxy(ctx, updateCssWxPublicAccountStatusToDelete);
  return (ctx.body = response);
});

export default router;

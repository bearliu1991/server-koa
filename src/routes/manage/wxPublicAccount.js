import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import {
  getPublicAccountListByPage,
  updatePublicAccountToActiveByOperation,
  updatePublicAccountListToDisabled,
  updatePublicAccountToBlockUpByOperation,
  updatePublicAccountToUnAuthorizationByOperation,
  updatePublicAccountListStatusToDelete,
  getPublicAccountList1,
} from '../../api';
const router = new Router();

router.post('/getPublicAccountListByPage', async ctx => {
  const response = await proxyService.postProxy(ctx, getPublicAccountListByPage);
  return (ctx.body = response);
});

router.post('/updatePublicAccountToActiveByOperation', async ctx => {
  const response = await proxyService.postProxy(ctx, updatePublicAccountToActiveByOperation);
  return (ctx.body = response);
});
router.post('/updatePublicAccountListToDisabled', async ctx => {
  const response = await proxyService.postProxy(ctx, updatePublicAccountListToDisabled);
  return (ctx.body = response);
});
router.post('/updatePublicAccountToBlockUpByOperation', async ctx => {
  const response = await proxyService.postProxy(ctx, updatePublicAccountToBlockUpByOperation);
  return (ctx.body = response);
});

router.post('/updatePublicAccountToUnAuthorizationByOperation', async ctx => {
  const response = await proxyService.postProxy(
    ctx,
    updatePublicAccountToUnAuthorizationByOperation
  );
  return (ctx.body = response);
});

router.post('/updatePublicAccountListStatusToDelete', async ctx => {
  const response = await proxyService.postProxy(ctx, updatePublicAccountListStatusToDelete);
  return (ctx.body = response);
});

router.post('/getPublicAccountList', async ctx => {
  const response = await proxyService.postProxy(ctx, getPublicAccountList1);
  return (ctx.body = response);
});

export default router;
